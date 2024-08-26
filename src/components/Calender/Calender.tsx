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

// // Set timezone to America/Los_Angeles
// moment.tz.setDefault('America/Los_Angeles');
// moment.locale('ko');
// const localizer = momentLocalizer(moment);

// interface IEvent {
//   start: Date;
//   end: Date;
//   title: string;
//   color: string;
// }

// interface IPayment {
//   paymentDate: number; // 'dd' 형식으로 전달받음
//   ottName: string;
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

//         console.log('Fetched subscriptions:', subscriptions);

//         const eventList = subscriptions.flatMap((subscription) => {
//           console.log('Processing subscription:', subscription);

//           const events = createRecurringEvents(
//             subscription.paymentDate,
//             subscription.ottName,
//             getRandomColor(),
//           );

//           console.log('Generated events for subscription:', events);

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
//   ): IEvent[] => {
//     const startOfMonth = moment().startOf('month').tz('America/Los_Angeles');
//     const endOfMonth = moment().endOf('month').tz('America/Los_Angeles');

//     console.log('Creating recurring events with parameters:');
//     console.log('Day of month:', dayOfMonth);
//     console.log('Title:', title);
//     console.log('Color:', color);
//     console.log('Start of month:', startOfMonth.format());
//     console.log('End of month:', endOfMonth.format());

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
//     console.log('All generated dates:', dates);

//     return dates.map((date) => ({
//       start: new Date(moment(date).startOf('day').toDate()), // 시작 시간을 00:00로 설정
//       end: new Date(moment(date).endOf('day').toDate()), // 종료 시간을 23:59로 설정
//       title,
//       color,
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

// Set timezone to America/Los_Angeles
moment.tz.setDefault('America/Los_Angeles');
moment.locale('ko');
const localizer = momentLocalizer(moment);

interface IEvent {
  start: Date;
  end: Date;
  title: string;
  color: string;
}

interface IPayment {
  paymentDate: number; // 'dd' 형식으로 전달받음
  ottName: string;
}

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosInstance.get('/api/subscription/user'); // API 요청
        const subscriptions: IPayment[] = response.data;

        const eventList = subscriptions.flatMap((subscription) => {
          const events = createRecurringEvents(
            subscription.paymentDate,
            subscription.ottName,
            getRandomColor(),
          );

          return events;
        });
        setEvents(eventList);
      } catch (error) {
        console.error('Error fetching subscription data:', error);
      }
    };

    fetchEvents();
  }, []);

  const createRecurringEvents = (
    dayOfMonth: number,
    title: string,
    color: string,
  ): IEvent[] => {
    const startOfMonth = moment().startOf('month').tz('America/Los_Angeles');
    const endOfMonth = moment().endOf('month').tz('America/Los_Angeles');

    const rule = new RRule({
      freq: RRule.MONTHLY,
      dtstart: startOfMonth
        .clone()
        .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
        .toDate(),
      bymonthday: dayOfMonth, // 매월 해당 일자로 이벤트 생성
      interval: 1,
      until: endOfMonth
        .clone()
        .set({ hour: 23, minute: 59, second: 59, millisecond: 999 })
        .toDate(), // 날짜의 끝 시점을 23:59:59로 설정
    });

    const dates = rule.all();

    return dates.map((date) => ({
      start: new Date(moment(date).startOf('day').toDate()), // 시작 시간을 00:00로 설정
      end: new Date(moment(date).endOf('day').toDate()), // 종료 시간을 23:59로 설정
      title,
      color,
    }));
  };

  const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const DateCellWrapper: Components['dateCellWrapper'] = ({
    children,
    value,
  }) => {
    const event = events.find((evt) => moment(evt.start).isSame(value, 'day'));

    return React.cloneElement(
      React.Children.only(children) as React.ReactElement,
      {
        style: {
          ...((children as React.ReactElement).props.style || {}),
          position: 'relative',
          cursor: event ? 'pointer' : 'default',
          ...(event && {
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '2px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: '2px',
              backgroundColor: event.color,
            },
          }),
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
      style={{ backgroundColor: event.color, height: '100%', width: '100%' }}
    />
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
          style={{ height: 230 }}
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
