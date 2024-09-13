// // payment 만 가져옴
// import React, { useState, useEffect } from 'react';
// import {
//   Calendar as BigCalendar,
//   momentLocalizer,
//   Components,
// } from 'react-big-calendar';
// import { RRule } from 'rrule';
// import moment from 'moment-timezone';
// import 'moment/locale/ko';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axiosInstance from '../../libs/AxiosInstance';
// import * as S from './Calender.Style';
// import Popup from './Popup';

// moment.tz.setDefault('America/Los_Angeles');
// moment.locale('ko');
// const localizer = momentLocalizer(moment);

// interface IEvent {
//   start: Date;
//   end: Date;
//   title: string;
//   color: string;
//   id: number; // id를 추가
// }

// interface IPayment {
//   paymentDate: number; // 'dd' 형식으로 전달받음
//   ottName: string;
//   id: number; // API 응답에 id가 포함되어야 함
// }

// const Calendar: React.FC = () => {
//   const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));
//   const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);
//   const [events, setEvents] = useState<IEvent[]>([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axiosInstance.get('/api/subscription/user'); // API 요청
//         const subscriptions: IPayment[] = response.data;

//         const eventList = subscriptions.flatMap((subscription) => {
//           const events = createRecurringEvents(
//             subscription.paymentDate,
//             subscription.ottName,
//             getRandomColor(),
//             subscription.id, // id를 추가
//           );

//           return events;
//         });
//         setEvents(eventList);
//       } catch (error) {
//         console.error('Error fetching subscription data:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const createRecurringEvents = (
//     dayOfMonth: number,
//     title: string,
//     color: string,
//     id: number, // id를 추가
//   ): IEvent[] => {
//     const startOfMonth = moment().startOf('month').tz('America/Los_Angeles');
//     const endOfMonth = moment().endOf('month').tz('America/Los_Angeles');

//     const rule = new RRule({
//       freq: RRule.MONTHLY,
//       dtstart: startOfMonth
//         .clone()
//         .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
//         .toDate(),
//       bymonthday: dayOfMonth, // 매월 해당 일자로 이벤트 생성
//       interval: 1,
//       until: endOfMonth
//         .clone()
//         .set({ hour: 23, minute: 59, second: 59, millisecond: 999 })
//         .toDate(), // 날짜의 끝 시점을 23:59:59로 설정
//     });

//     const dates = rule.all();

//     return dates.map((date) => ({
//       start: new Date(moment(date).startOf('day').toDate()), // 시작 시간을 00:00로 설정
//       end: new Date(moment(date).endOf('day').toDate()), // 종료 시간을 23:59로 설정
//       title,
//       color,
//       id, // id 추가
//     }));
//   };

//   const getRandomColor = (): string => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   const DateCellWrapper: Components['dateCellWrapper'] = ({
//     children,
//     value,
//   }) => {
//     const event = events.find((evt) => moment(evt.start).isSame(value, 'day'));

//     return React.cloneElement(
//       React.Children.only(children) as React.ReactElement,
//       {
//         style: {
//           ...((children as React.ReactElement).props.style || {}),
//           position: 'relative',
//           cursor: event ? 'pointer' : 'default',
//           ...(event && {
//             '&::after': {
//               content: '""',
//               position: 'absolute',
//               bottom: '2px',
//               left: '50%',
//               transform: 'translateX(-50%)',
//               width: '80%',
//               height: '2px',
//               backgroundColor: event.color,
//             },
//           }),
//         },
//       },
//     );
//   };

//   const handleNavigate = (newDate: Date) => {
//     setCurrentMonth(moment(newDate).format('M월'));
//   };

//   const handleSelectEvent = (event: IEvent) => {
//     setSelectedEvent(event);
//   };

//   const EventComponent = ({ event }: { event: IEvent }) => (
//     <div
//       style={{ backgroundColor: event.color, height: '100%', width: '100%' }}
//     />
//   );

//   return (
//     <S.CalendarCont>
//       <S.MonthTit>{currentMonth}</S.MonthTit>
//       <S.CalendarWrap>
//         <BigCalendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 230 }}
//           views={['month']}
//           toolbar={false}
//           onNavigate={handleNavigate}
//           onSelectEvent={handleSelectEvent}
//           components={{
//             dateCellWrapper: DateCellWrapper,
//             event: EventComponent,
//           }}
//           formats={{
//             monthHeaderFormat: 'M월',
//             weekdayFormat: (date: Date) => moment(date).format('ddd'),
//             dayFormat: (date: Date) => moment(date).format('D'),
//           }}
//         />
//       </S.CalendarWrap>
//       {selectedEvent && (
//         <Popup
//           event={selectedEvent}
//           onClose={() => setSelectedEvent(null)}
//           id={selectedEvent.id}
//         />
//       )}
//     </S.CalendarCont>
//   );
// };

// export default Calendar;

// // 행 늘이기
// import React, { useState, useEffect } from 'react';
// import {
//   Calendar as BigCalendar,
//   momentLocalizer,
//   Components,
// } from 'react-big-calendar';
// import { RRule } from 'rrule';
// import moment from 'moment-timezone';
// import 'moment/locale/ko';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axiosInstance from '../../libs/AxiosInstance';
// import * as S from './Calender.Style';
// import Popup from './Popup';

// moment.tz.setDefault('America/Los_Angeles');
// moment.locale('ko');
// const localizer = momentLocalizer(moment);

// interface IEvent {
//   start: Date;
//   end: Date;
//   title: string;
//   color: string;
//   id: number;
//   ottName: string;
// }

// interface IPayment {
//   paymentDate: number;
//   ottName: string;
//   id: number;
// }

// const Calendar: React.FC = () => {
//   const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));
//   const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);
//   const [events, setEvents] = useState<IEvent[]>([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axiosInstance.get('/api/subscription/user');
//         const subscriptions: IPayment[] = response.data;

//         const eventList = subscriptions.flatMap((subscription) =>
//           createRecurringEvents(
//             subscription.paymentDate,
//             subscription.ottName,
//             '#3174ad',
//             subscription.id,
//           ),
//         );
//         setEvents(eventList);
//       } catch (error) {
//         console.error('Error fetching subscription data:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const createRecurringEvents = (
//     dayOfMonth: number,
//     ottName: string,
//     color: string,
//     id: number,
//   ): IEvent[] => {
//     const startOfMonth = moment().startOf('month').tz('America/Los_Angeles');
//     const endOfMonth = moment().endOf('month').tz('America/Los_Angeles');

//     const rule = new RRule({
//       freq: RRule.MONTHLY,
//       dtstart: startOfMonth
//         .clone()
//         .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
//         .toDate(),
//       bymonthday: dayOfMonth,
//       interval: 1,
//       until: endOfMonth
//         .clone()
//         .set({ hour: 23, minute: 59, second: 59, millisecond: 999 })
//         .toDate(),
//     });

//     const dates = rule.all();

//     return dates.map((date) => ({
//       start: new Date(moment(date).startOf('day').toDate()),
//       end: new Date(moment(date).endOf('day').toDate()),
//       title: ottName,
//       color,
//       id,
//       ottName,
//     }));
//   };

//   const DateCellWrapper: Components['dateCellWrapper'] = ({
//     children,
//     value,
//   }) => {
//     const dayEvents = events.filter((evt) =>
//       moment(evt.start).isSame(value, 'day'),
//     );

//     return React.cloneElement(
//       React.Children.only(children) as React.ReactElement,
//       {
//         style: {
//           ...((children as React.ReactElement).props.style || {}),
//           position: 'relative',
//           height: `${Math.max(80, 80 + (dayEvents.length - 1) * 20)}px`,
//         },
//       },
//     );
//   };

//   const handleNavigate = (newDate: Date) => {
//     setCurrentMonth(moment(newDate).format('M월'));
//   };

//   const handleSelectEvent = (event: IEvent) => {
//     setSelectedEvent(event);
//   };

//   const EventComponent = ({ event }: { event: IEvent }) => (
//     <div
//       style={{
//         backgroundColor: event.color,
//         // height: '10px',
//         // width: '90%',
//         margin: '0px auto',
//         // borderRadius: '12px',
//         overflow: 'hidden',
//         whiteSpace: 'nowrap',
//         // textOverflow: 'ellipsis',
//         // fontSize: '12px',
//         // color: 'white',
//         textAlign: 'center',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <span style={{ marginRight: '4px' }}>{event.ottName}</span>
//     </div>
//   );

//   return (
//     <S.CalendarCont>
//       <S.MonthTit>{currentMonth}</S.MonthTit>
//       <S.CalendarWrap>
//         <BigCalendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 'auto', minHeight: '300px' }}
//           views={['month']}
//           toolbar={false}
//           onNavigate={handleNavigate}
//           onSelectEvent={handleSelectEvent}
//           components={{
//             dateCellWrapper: DateCellWrapper,
//             event: EventComponent,
//           }}
//           formats={{
//             monthHeaderFormat: 'M월',
//             weekdayFormat: (date: Date) => moment(date).format('ddd'),
//             dayFormat: (date: Date) => moment(date).format('D'),
//           }}
//         />
//       </S.CalendarWrap>
//       {selectedEvent && (
//         <Popup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
//       )}
//     </S.CalendarCont>
//   );
// };

// export default Calendar;

// id 깡코드
// import React, { useState, useEffect } from 'react';
// import {
//   Calendar as BigCalendar,
//   momentLocalizer,
//   Components,
// } from 'react-big-calendar';
// import { RRule } from 'rrule';
// import moment from 'moment-timezone';
// import 'moment/locale/ko';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axiosInstance from '../../libs/AxiosInstance';
// import * as S from './Calender.Style';
// import Popup from './Popup';

// moment.tz.setDefault('America/Los_Angeles');
// moment.locale('ko');
// const localizer = momentLocalizer(moment);

// interface Subscription {
//   id: number;
//   name: string;
//   payment: number;
//   memo: string;
//   paymentDate: number;
//   userId: number;
//   ott: {
//     id: number;
//     name: string;
//     ratePlan: string;
//     price: number;
//     image: string;
//     createdDate: string;
//     modifiedDate: string;
//   };
//   createdDate: string;
//   modifiedDate: string;
// }

// interface IEvent {
//   start: Date;
//   end: Date;
//   title: string;
//   color: string;
//   id: number;
//   ottName: string;
// }

// const Calendar: React.FC = () => {
//   const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));
//   const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);
//   const [events, setEvents] = useState<IEvent[]>([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         // 여러 구독 정보를 가져오기 위해 여러 번의 API 호출을 수행합니다.
//         // 실제 사용 시에는 이 부분을 동적으로 구성해야 합니다.
//         const subscriptionIds = [1, 2, 3, 4, 5, 6, 7]; // 실제 ID로 교체해야 합니다.
//         const subscriptionPromises = subscriptionIds.map(id =>
//           axiosInstance.get<Subscription>(`/api/subscription/${id}`)
//         );

//         const responses = await Promise.all(subscriptionPromises);
//         const subscriptions = responses.map(response => response.data);

//         const eventList = subscriptions.flatMap((subscription) =>
//           createRecurringEvents(
//             subscription.paymentDate,
//             subscription.ott.name,
//             '#3174ad',
//             subscription.id,
//           ),
//         );
//         setEvents(eventList);
//       } catch (error) {
//         console.error('Error fetching subscription data:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const createRecurringEvents = (
//     dayOfMonth: number,
//     ottName: string,
//     color: string,
//     id: number,
//   ): IEvent[] => {
//     const startOfMonth = moment().startOf('month').tz('America/Los_Angeles');
//     const endOfMonth = moment().endOf('month').tz('America/Los_Angeles');

//     const rule = new RRule({
//       freq: RRule.MONTHLY,
//       dtstart: startOfMonth
//         .clone()
//         .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
//         .toDate(),
//       bymonthday: dayOfMonth,
//       interval: 1,
//       until: endOfMonth
//         .clone()
//         .set({ hour: 23, minute: 59, second: 59, millisecond: 999 })
//         .toDate(),
//     });

//     const dates = rule.all();

//     return dates.map((date) => ({
//       start: new Date(moment(date).startOf('day').toDate()),
//       end: new Date(moment(date).endOf('day').toDate()),
//       title: ottName,
//       color,
//       id,
//       ottName,
//     }));
//   };

//   const DateCellWrapper: Components['dateCellWrapper'] = ({
//     children,
//     value,
//   }) => {
//     const dayEvents = events.filter((evt) =>
//       moment(evt.start).isSame(value, 'day'),
//     );

//     return React.cloneElement(
//       React.Children.only(children) as React.ReactElement,
//       {
//         style: {
//           ...((children as React.ReactElement).props.style || {}),
//           position: 'relative',
//           height: `${Math.max(80, 80 + (dayEvents.length - 1) * 20)}px`,
//         },
//       },
//     );
//   };

//   const handleNavigate = (newDate: Date) => {
//     setCurrentMonth(moment(newDate).format('M월'));
//   };

//   const handleSelectEvent = (event: IEvent) => {
//     setSelectedEvent(event);
//   };

//   const EventComponent = ({ event }: { event: IEvent }) => (
//     <div
//       style={{
//         backgroundColor: event.color,
//         // height: '50px',
//         margin: '0px auto',
//         overflow: 'hidden',
//         whiteSpace: 'nowrap',
//         textAlign: 'center',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <span style={{ marginRight: '3px', padding: '1px' }}>{event.ottName}</span>
//     </div>
//   );

//   return (
//     <S.CalendarCont>
//       <S.MonthTit>{currentMonth}</S.MonthTit>
//       <S.CalendarWrap>
//         <BigCalendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 'auto', minHeight: '300px' }}
//           views={['month']}
//           toolbar={false}
//           onNavigate={handleNavigate}
//           onSelectEvent={handleSelectEvent}
//           components={{
//             dateCellWrapper: DateCellWrapper,
//             event: EventComponent,
//           }}
//           formats={{
//             monthHeaderFormat: 'M월',
//             weekdayFormat: (date: Date) => moment(date).format('ddd'),
//             dayFormat: (date: Date) => moment(date).format('D'),
//           }}
//         />
//       </S.CalendarWrap>
//       {selectedEvent && (
//         <Popup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
//       )}
//     </S.CalendarCont>
//   );
// };

// export default Calendar;

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
        // 모든 구독 정보를 한번에 가져옵니다.
        const response = await axiosInstance.get<Subscription[]>(
          '/api/subscription/user',
        );
        const subscriptions = response.data;

        const eventList = subscriptions.flatMap((subscription) =>
          createRecurringEvents(
            subscription.paymentDate,
            subscription.ott.name,
            '#3174ad',
            subscription.id,
          ),
        );
        setEvents(eventList);
      } catch (error) {
        console.error('Error fetching subscription data:', error);
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
      title: ottName, // OTT의 이름을 이벤트 제목으로 설정
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
      <span style={{ marginRight: '3px', padding: '1px' }}>
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
