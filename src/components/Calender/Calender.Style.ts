// import styled from 'styled-components';

// export const CalendarCont = styled.div`
//   padding: 18px;
//   background-color: #f0f0f0;
//   border-radius: 40px;
//   margin: 20px;
// `;

// export const MonthTit = styled.h2`
//   text-align: center;
//   margin-bottom: 10px;
//   font-size: 1em;
//   color: #333;
//   font-weight: 500;
// `;

// export const CalendarWrap = styled.div`
//   .rbc-calendar {
//     background-color: transparent;
//     font-weight: 300;
//     font-size: 0.9em;
//     color: #555;
//     opacity: 0.8;
//   }
//   .rbc-header {
//     background-color: transparent;
//     border: none;
//     padding: 5px 3px;
//     font-size: 0.9em;
//   }
//   .rbc-month-view,
//   .rbc-month-row,
//   .rbc-day-bg {
//     border: none;
//   }
//   .rbc-off-range-bg {
//     background-color: transparent;
//   }
//   .rbc-today {
//     background-color: transparent;
//   }
//   .rbc-button-link {
//     color: #555;
//     font-size: 0.9em;
//   }
//   .rbc-date-cell {
//     text-align: center;
//     padding: 2px 0;
//   }
//   .rbc-month-header {
//     .rbc-header {
//       &:nth-child(7) {
//         color: #17a1fa; /* blue */
//       }
//       &:first-child {
//         color: #ea4335; /* red */
//       }
//     }
//   }
//   .rbc-row-content {
//     .rbc-row {
//       .rbc-date-cell {
//         &:nth-child(7) .rbc-button-link {
//           color: #17a1fa;
//         }
//         &:first-child .rbc-button-link {
//           color: #ea4335;
//         }
//       }
//     }
//   }
//   .rbc-month-header {
//     margin-bottom: 5px;
//   }
//   .rbc-row {
//     margin-bottom: 5px;
//   }
// `;

import styled from 'styled-components';

export const CalendarCont = styled.div`
  padding: 18px;
  background-color: #f0f0f0;
  border-radius: 40px;
  margin: 20px;
`;

export const MonthTit = styled.h2`
  text-align: center;
  margin-bottom: 6px;
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
    font-size: 1.1em;
  }
  .rbc-date-cell {
    text-align: center;
    padding: 2px 0;
    font-size: 0.8em;
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
  .rbc-row {
    margin-bottom: 5px;
  }

  /* Custom event styles */
  .rbc-event,
  .rbc-day-slot .rbc-background-event {
    border: none;
    box-sizing: border-box;
    box-shadow: none;
    margin: 0;
    padding: 1px 0px;
    padding-left: 4px;
    background-color: #3174ad;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    width: 100%;
    height: 10%; // 크기 설정
    text-align: left;
    font-size: 0.3em;
  }
`;
