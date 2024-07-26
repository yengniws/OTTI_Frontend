import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as S from './CustomCalender.Style';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

const CustomCalendar = () => {
  const formatShortWeekday = (locale: string | undefined, date: Date) => {
    return format(date, 'EEE', { locale: ko });
  };

  const formatMonthYear = (locale: string | undefined, date: Date) => {
    return format(date, 'M월', { locale: ko }); //yyyy, mm
  };

  return (
    <S.CalendarContainer>
      <S.CalendarTitle>캘린더</S.CalendarTitle>
      <S.StyledCalendar
        locale="ko"
        formatShortWeekday={formatShortWeekday}
        formatMonthYear={formatMonthYear}
      />
    </S.CalendarContainer>
  );
};

export default CustomCalendar;
