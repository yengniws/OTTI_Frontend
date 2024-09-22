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

// 로컬라이저 moment로 초기화
const localizer = momentLocalizer(moment);

// Subscription 데이터 구조 정의
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

// 이벤트 구조 정의
interface IEvent {
  start: Date;
  end: Date;
  title: string;
  color: string;
  id: number;
  ottName: string;
}

// Calendar 컴포넌트 정의
const Calendar = () => {
  // 현재 표시되는 달 상태 관리
  const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));

  // 선택된 이벤트 상태 관리
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

  // 캘린더에 표시될 이벤트 목록 상태 관리
  const [events, setEvents] = useState<IEvent[]>([]);

  // 컴포넌트 마운트시, 구독 정보를 가져와 이벤트 목록 설정
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosInstance.get<Subscription[]>(
          '/api/subscription/user',
        );
        const subscriptions = response.data;

        // 구독 이벤트 생성
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
        console.error('구독 정보 불러오기 실패:', error);
      }
    };

    fetchEvents();
  }, []);

  // 매월 반복되는 이벤트 생성 함수
  const createRecurringEvents = (
    dayOfMonth: number,
    ottName: string,
    color: string,
    id: number,
  ): IEvent[] => {
    // 현재 월 시작과 끝
    const startOfMonth = moment().startOf('month').tz('America/Los_Angeles');
    const endOfMonth = moment().endOf('month').tz('America/Los_Angeles');

    // 반복 규칙 적용한 이벤트 생성
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

    // 모든 날짜 가져오기
    const dates = rule.all();

    // 각 날짜에 대한 이벤트 객체 생성
    return dates.map((date) => ({
      start: new Date(moment(date).startOf('day').toDate()),
      end: new Date(moment(date).endOf('day').toDate()),
      title: ottName, // OTT 이름 -> 이벤트 제목
      color,
      id,
      ottName,
    }));
  };

  // 날짜 셀 래퍼 컴포넌트
  const DateCellWrapper: Components['dateCellWrapper'] = ({
    children,
    value,
  }) => {
    // 현재 날짜에 해당하는 이벤트를 필터링
    const dayEvents = events.filter((evt) =>
      moment(evt.start).isSame(value, 'day'),
    );

    return React.cloneElement(
      React.Children.only(children) as React.ReactElement,
      {
        style: {
          ...((children as React.ReactElement).props.style || {}),
          position: 'relative',
          height: `${Math.max(80, 80 + (dayEvents.length - 1) * 20)}px`, // 이벤트 개수에 따라 셀 높이 조정
        },
      },
    );
  };

  // 날짜 변경 시 현재 월을 업데이트
  const handleNavigate = (newDate: Date) => {
    setCurrentMonth(moment(newDate).format('M월'));
  };

  // 이벤트 선택 시 선택된 이벤트를 상태로 설정
  const handleSelectEvent = (event: IEvent) => {
    setSelectedEvent(event);
  };

  // 이벤트 컴포넌트 렌더링
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
      <span
        style={{
          padding: '1px',
          fontWeight: '400',
          fontSize: '8px',
        }}
      >
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
          style={{ minHeight: '330px', maxHeight: 'auto' }}
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
      {/* 선택된 이벤트가 있을 경우 팝업 표시 */}
      {selectedEvent && (
        <Popup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </S.CalendarCont>
  );
};

export default Calendar;
