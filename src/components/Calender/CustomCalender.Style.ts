import styled from 'styled-components';
import Calendar from 'react-calendar';

export const CalendarContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
`;

export const CalendarTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
  text-align: left;
`;

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  background-color: #f5f5f5;
  border: none;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #ffffff;
    border-bottom: 1px solid #e0e0e0;
    border-radius: 10px 10px 0 0;
  }

  .react-calendar__month-view__weekdays {
    background-color: #ffffff;
    font-weight: bold;
    color: #ff6384;
    text-align: center;
  }

  .react-calendar__tile {
    text-align: center;
    padding: 10px;
  }

  .react-calendar__tile--now {
    background: #36a2eb;
    color: white;
  }

  .react-calendar__tile--active {
    background: #ffce56;
    color: white;
  }
`;
