import React, { useState, useEffect } from 'react';
import {
  Calendar as BigCalendar,
  momentLocalizer,
  Components,
} from 'react-big-calendar';
import { RRule } from 'rrule';
import moment from 'moment-timezone';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axiosInstance from '../../libs/AxiosInstance';
import * as S from './Calender.Style';
import Popup from './Popup';

moment.tz.setDefault('America/Los_Angeles');
moment.locale('ko');
const localizer = momentLocalizer(moment);

interface Subscription {
  id: number;
  name: string;
  payment: number;
  memo: string;
  paymentDate: number;
  userId: number;
  ott: {
    id: number;
    name: string;
    ratePlan: string;
    price: number;
    image: string;
    createdDate: string;
    modifiedDate: string;
  };
  createdDate: string;
  modifiedDate: string;
}

interface IEvent {
  start: Date;
  end: Date;
  title: string;
  color: string;
  id: number;
  ottName: string;
}

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // 모든 구독 정보 가져오기
        const response = await axiosInstance.get<Subscription[]>(
          '/api/subscription/user',
        );
        const subscriptions = response.data;

        const eventList = subscriptions.flatMap((subscription) =>
          createRecurringEvents(
            subscription.paymentDate,
            subscription.ott.name,
            '#333',
            subscription.id,
          ),
        );
        setEvents(eventList);
      } catch (error) {
        console.error('구독 정보 가져오기 오류:', error);
      }
    };

    fetchEvents();
  }, []);

  const createRecurringEvents = (
    dayOfMonth: number,
    ottName: string,
    color: string,
    id: number,
  ): IEvent[] => {
    const startOfMonth = moment().startOf('month').tz('America/Los_Angeles');
    const endOfMonth = moment().endOf('month').tz('America/Los_Angeles');

    const rule = new RRule({
      freq: RRule.MONTHLY,
      dtstart: startOfMonth
        .clone()
        .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
        .toDate(),
      bymonthday: dayOfMonth,
      interval: 1,
      until: endOfMonth
        .clone()
        .set({ hour: 23, minute: 59, second: 59, millisecond: 999 })
        .toDate(),
    });

    const dates = rule.all();

    return dates.map((date) => ({
      start: new Date(moment(date).startOf('day').toDate()),
      end: new Date(moment(date).endOf('day').toDate()),
      title: ottName, // OTT 이름을 이벤트 제목으로 설정
      color,
      id,
      ottName,
    }));
  };

  const DateCellWrapper: Components['dateCellWrapper'] = ({
    children,
    value,
  }) => {
    const dayEvents = events.filter((evt) =>
      moment(evt.start).isSame(value, 'day'),
    );

    return React.cloneElement(
      React.Children.only(children) as React.ReactElement,
      {
        style: {
          ...((children as React.ReactElement).props.style || {}),
          position: 'relative',
          height: `${Math.max(80, 80 + (dayEvents.length - 1) * 20)}px`,
        },
      },
    );
  };

  const handleNavigate = (newDate: Date) => {
    setCurrentMonth(moment(newDate).format('M월'));
  };

  const handleSelectEvent = (event: IEvent) => {
    setSelectedEvent(event);
  };

  const EventComponent = ({ event }: { event: IEvent }) => (
    <div
      style={{
        backgroundColor: event.color,
        margin: '0px auto',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{ marginRight: '2px', padding: '1px', fontWeight: '300' }}>
        {event.ottName}
      </span>
    </div>
  );

  return (
    <S.CalendarCont>
      <S.MonthTit>{currentMonth}</S.MonthTit>
      <S.CalendarWrap>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'auto', minHeight: '300px' }}
          views={['month']}
          toolbar={false}
          onNavigate={handleNavigate}
          onSelectEvent={handleSelectEvent}
          components={{
            dateCellWrapper: DateCellWrapper,
            event: EventComponent,
          }}
          formats={{
            monthHeaderFormat: 'M월',
            weekdayFormat: (date: Date) => moment(date).format('ddd'),
            dayFormat: (date: Date) => moment(date).format('D'),
          }}
        />
      </S.CalendarWrap>
      {selectedEvent && (
        <Popup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </S.CalendarCont>
  );
};

export default Calendar;
