import React, { useState, useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getSubscriptionList } from '../../api/subscriptionApi';
import * as S from './Calender.Style';

moment.locale('ko');
const localizer = momentLocalizer(moment);

interface Event {
  start: Date;
  end: Date;
  title: string;
}

const Calendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));

  useEffect(() => {
    const fetchSubscriptions = async () => {
      const subscriptions = await getSubscriptionList();
      const newEvents = subscriptions.map((sub) => ({
        start: new Date(sub.paymentDate),
        end: new Date(sub.paymentDate),
        title: sub.platformName,
      }));
      setEvents(newEvents);
    };

    fetchSubscriptions();
  }, []);

  const DateCellWrapper = ({ children, value }: any) => {
    const hasEvent = events.some((event) =>
      moment(event.start).isSame(value, 'day'),
    );

    return React.cloneElement(React.Children.only(children), {
      style: {
        ...children.style,
        position: 'relative',
        ...(hasEvent && {
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '2px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '2px',
            backgroundColor: '#007bff',
          },
        }),
      },
    });
  };

  const onNavigate = (newDate: Date) => {
    setCurrentMonth(moment(newDate).format('M월'));
  };

  return (
    <S.CalendarContainer>
      <S.MonthHeader>{currentMonth}</S.MonthHeader>
      <S.CalendarWrap>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 300 }}
          views={['month']}
          toolbar={false}
          onNavigate={onNavigate}
          components={{
            dateCellWrapper: DateCellWrapper,
          }}
          formats={{
            monthHeaderFormat: 'M월',
            weekdayFormat: (date: Date) => moment(date).format('ddd'),
            dayFormat: (date: Date) => moment(date).format('D'),
          }}
        />
      </S.CalendarWrap>
    </S.CalendarContainer>
  );
};

export default Calendar;
