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
//       interval: 1,
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

import React from 'react';
import * as S from './Calender.Style';

const Calendar: React.FC = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const firstMondayOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const weekdays = ['월', '화', '수', '목', '금', '토', '일'];
  const monthNames = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  const renderCalendarDays = () => {
    const days = [];

    // Weekday headers
    weekdays.forEach((day, index) => {
      days.push(
        <S.WeekdayHeader
          key={`weekday-${index}`}
          isWeekend={index === 5 || index === 6}
          isSunday={index === 6}
        >
          {day}
        </S.WeekdayHeader>,
      );
    });

    // Empty cells for days before the first Monday of the month
    for (let i = 0; i < firstMondayOffset; i++) {
      days.push(
        <S.DayCell key={`empty-${i}`} isWeekend={false} isSunday={false} />,
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = (firstMondayOffset + day - 1) % 7;
      days.push(
        <S.DayCell
          key={`day-${day}`}
          isWeekend={dayOfWeek === 5 || dayOfWeek === 6}
          isSunday={dayOfWeek === 6}
        >
          {day}
        </S.DayCell>,
      );
    }

    return days;
  };

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>캘린더</S.CalendarHeader>
      <S.CalendarHeader>{monthNames[currentMonth]}</S.CalendarHeader>
      <S.CalendarGrid>{renderCalendarDays()}</S.CalendarGrid>
    </S.CalendarContainer>
  );
};

export default Calendar;
