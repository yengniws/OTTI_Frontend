// import React, { useState, useEffect } from 'react';
// import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment-timezone';
// import 'moment/locale/ko';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { getSubscriptionList } from '../../api/subscriptionApi';
// import * as S from './Calender.Style';

// moment.tz.setDefault('Asia/Seoul');
// moment.locale('ko');
// const localizer = momentLocalizer(moment);

// interface Event {
//   start: Date;
//   end: Date;
//   title: string;
// }

// const Calendar = () => {
//   const [events, setEvents] = useState<Event[]>([]);
//   const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));

//   useEffect(() => {
//     const fetchSubscriptions = async () => {
//       const subscriptions = await getSubscriptionList();
//       const newEvents = subscriptions.map((sub) => ({
//         start: new Date(sub.paymentDate),
//         end: new Date(sub.paymentDate),
//         title: sub.platformName,
//       }));
//       setEvents(newEvents);
//     };

//     fetchSubscriptions();
//   }, []);

//   const DateCellWrapper = ({ children, value }: any) => {
//     const hasEvent = events.some((event) =>
//       moment(event.start).isSame(value, 'day'),
//     );

//     return React.cloneElement(React.Children.only(children), {
//       style: {
//         ...children.style,
//         position: 'relative',
//         ...(hasEvent && {
//           '&::after': {
//             content: '""',
//             position: 'absolute',
//             bottom: '2px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             width: '80%',
//             height: '2px',
//             backgroundColor: '#007bff',
//           },
//         }),
//       },
//     });
//   };

//   const onNavigate = (newDate: Date) => {
//     setCurrentMonth(moment(newDate).format('M월'));
//   };

//   return (
//     <S.CalendarContainer>
//       <S.MonthHeader>{currentMonth}</S.MonthHeader>
//       <S.CalendarWrap>
//         <BigCalendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 210 }}
//           views={['month']}
//           toolbar={false}
//           onNavigate={onNavigate}
//           components={{
//             dateCellWrapper: DateCellWrapper,
//           }}
//           formats={{
//             monthHeaderFormat: 'M월',
//             weekdayFormat: (date: Date) => moment(date).format('ddd'),
//             dayFormat: (date: Date) => moment(date).format('D'),
//           }}
//         />
//       </S.CalendarWrap>
//     </S.CalendarContainer>
//   );
// };

// export default Calendar;

// import React, { useState } from 'react';
// import {
//   Calendar as BigCalendar,
//   momentLocalizer,
//   Components,
// } from 'react-big-calendar';
// import moment from 'moment-timezone';
// import 'moment/locale/ko';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import * as S from './Calender.Style';
// import Popup from './Popup';

// moment.tz.setDefault('Asia/Seoul');
// moment.locale('ko');
// const localizer = momentLocalizer(moment);

// interface IEvent {
//   start: Date;
//   end: Date;
//   title: string;
//   color: string;
// }

// const Calendar = () => {
//   const [events] = useState<IEvent[]>([
//     {
//       start: new Date(2024, 7, 2),
//       end: new Date(2024, 7, 2),
//       title: 'Netflix',
//       color: '#E50914',
//     },
//     {
//       start: new Date(2024, 7, 15),
//       end: new Date(2024, 7, 15),
//       title: 'Disney+',
//       color: '#0063e5',
//     },
//     {
//       start: new Date(2024, 7, 20),
//       end: new Date(2024, 7, 20),
//       title: 'Wavve',
//       color: '#00A8E1',
//     },
//   ]);
//   const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));
//   const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

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

//   return (
//     <S.CalendarCont>
//       <S.MonthTit>{currentMonth}</S.MonthTit>
//       <S.CalendarWrap>
//         <BigCalendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 210 }}
//           views={['month']}
//           toolbar={false}
//           onNavigate={handleNavigate}
//           onSelectEvent={handleSelectEvent}
//           components={{
//             dateCellWrapper: DateCellWrapper,
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

// import React, { useState } from 'react';
// import {
//   Calendar as BigCalendar,
//   momentLocalizer,
//   Components,
// } from 'react-big-calendar';
// import { RRule } from 'rrule';
// import moment from 'moment-timezone';
// import 'moment/locale/ko';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import * as S from './Calender.Style';
// import Popup from './Popup';

// moment.tz.setDefault('Asia/Seoul');
// moment.locale('ko');
// const localizer = momentLocalizer(moment);

// interface IEvent {
//   start: Date;
//   end: Date;
//   title: string;
//   color: string;
// }

// const Calendar = () => {
//   const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));
//   const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

//   const createRecurringEvents = (
//     baseDate: Date,
//     title: string,
//     color: string,
//   ): IEvent[] => {
//     const rule = new RRule({
//       freq: RRule.MONTHLY,
//       dtstart: baseDate,
//       count: 12, //반복 횟수
//     });

//     return rule.all().map((date) => ({
//       start: new Date(date),
//       end: new Date(date),
//       title,
//       color,
//     }));
//   };

//   const events = [
//     ...createRecurringEvents(new Date(2024, 6, 2), 'Netflix', '#E50914'),
//     ...createRecurringEvents(new Date(2024, 6, 15), 'Disney+', '#0063e5'),
//     ...createRecurringEvents(new Date(2024, 6, 20), 'Wavve', '#00A8E1'),
//   ];

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

//   return (
//     <S.CalendarCont>
//       <S.MonthTit>{currentMonth}</S.MonthTit>
//       <S.CalendarWrap>
//         <BigCalendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 210 }}
//           views={['month']}
//           toolbar={false}
//           onNavigate={handleNavigate}
//           onSelectEvent={handleSelectEvent}
//           components={{
//             dateCellWrapper: DateCellWrapper,
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

import React, { useState } from 'react';
import {
  Calendar as BigCalendar,
  momentLocalizer,
  Components,
} from 'react-big-calendar';
import { RRule } from 'rrule';
import moment from 'moment-timezone';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import * as S from './Calender.Style';
import Popup from './Popup';

moment.tz.setDefault('Asia/Seoul');
moment.locale('ko');
const localizer = momentLocalizer(moment);

interface IEvent {
  start: Date;
  end: Date;
  title: string;
  color: string;
}

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(moment().format('M월'));
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

  const createRecurringEvents = (
    baseDate: Date,
    title: string,
    color: string,
  ): IEvent[] => {
    const rule = new RRule({
      freq: RRule.MONTHLY,
      dtstart: baseDate,
      interval: 1,
    });

    return rule.all().map((date) => ({
      start: new Date(date),
      end: new Date(date),
      title,
      color,
    }));
  };

  const events = [
    ...createRecurringEvents(new Date(2024, 6, 2), 'Netflix', '#E50914'),
    ...createRecurringEvents(new Date(2024, 6, 15), 'Disney+', '#0063e5'),
    ...createRecurringEvents(new Date(2024, 6, 20), 'Wavve', '#00A8E1'),
  ];

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

  return (
    <S.CalendarCont>
      <S.MonthTit>{currentMonth}</S.MonthTit>
      <S.CalendarWrap>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 210 }}
          views={['month']}
          toolbar={false}
          onNavigate={handleNavigate}
          onSelectEvent={handleSelectEvent}
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
      {selectedEvent && (
        <Popup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </S.CalendarCont>
  );
};

export default Calendar;
