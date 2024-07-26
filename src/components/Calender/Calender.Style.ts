import styled from 'styled-components';

export const CalendarCont = styled.div`
  padding: 18px;
  background-color: #f0f0f0;
  border-radius: 40px;
`;

export const MonthTit = styled.h2`
  text-align: center;
  margin-bottom: 12px;
  font-size: 1em;
  color: #333;
  font-weight: 500;
`;

export const CalendarWrap = styled.div`
  .rbc-calendar {
    background-color: transparent;
    font-weight: 300;
    font-size: 0.9em;
    color: #555;
    opacity: 0.8;
  }
  .rbc-header {
    background-color: transparent;
    border: none;
    padding: 5px 3px;
    font-size: 0.9em;
  }
  .rbc-month-view,
  .rbc-month-row,
  .rbc-day-bg {
    border: none;
  }
  .rbc-off-range-bg {
    background-color: transparent;
  }
  .rbc-today {
    background-color: transparent;
  }
  .rbc-button-link {
    color: #555;
    font-size: 0.9em;
  }
  .rbc-date-cell {
    text-align: center;
    padding: 2px 0;
  }
  .rbc-month-header {
    .rbc-header {
      &:nth-child(7) {
        color: #17a1fa; /* blue */
      }
      &:first-child {
        color: #ea4335; /* red */
      }
    }
  }
  .rbc-row-content {
    .rbc-row {
      .rbc-date-cell {
        &:nth-child(7) .rbc-button-link {
          color: #17a1fa;
        }
        &:first-child .rbc-button-link {
          color: #ea4335;
        }
      }
    }
  }
  .rbc-month-header {
    margin-bottom: 5px;
  }
  .rbc-row {
    margin-bottom: 5px;
  }
`;

// import styled from 'styled-components';

// export const CalendarWrapper = styled.div`
//   width: 100%;
//   max-width: 400px;
//   margin: 0 auto;
// `;

// export const CalendarHeader = styled.div`
//   text-align: center;
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 20px;
// `;

// export const CalendarContainer = styled.div`
//   background-color: #f0f0f0;
//   border-radius: 10px;
//   padding: 20px;
// `;

// export const CalendarGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(7, 1fr);
//   gap: 5px;
// `;

// export const WeekdayHeader = styled.div<{ isWeekend: boolean; isSunday: boolean }>`
//   text-align: center;
//   padding: 5px;
//   font-weight: bold;
//   color: ${props => props.isSunday ? 'red' : props.isWeekend ? 'blue' : 'black'};
// `;

// export const DayCell = styled.div<{ isWeekend: boolean; isSunday: boolean }>`
//   text-align: center;
//   padding: 10px;
//   cursor: pointer;
//   position: relative;
//   color: ${props => props.isSunday ? 'red' : props.isWeekend ? 'blue' : 'black'};
//   &:hover {
//     background-color: #e0e0e0;
//   }
// `;

// export const EventIndicator = styled.div`
//   width: 6px;
//   height: 6px;
//   border-radius: 50%;
//   background-color: #ff4081;
//   position: absolute;
//   bottom: 2px;
//   left: 50%;
//   transform: translateX(-50%);
// `;
