// import styled from 'styled-components';

// export const CalendarCont = styled.div`
//   padding: 18px;
//   background-color: #f0f0f0;
//   border-radius: 40px;
//   margin-top: 40px;
// `;

// export const MonthTit = styled.h2`
//   text-align: center;
//   margin-bottom: 6px;
//   font-size: 1em;
//   color: #333;
//   font-weight: 500;
// `;

// export const CalendarWrap = styled.div`
//   .rbc-calendar {
//     background-color: transparent;
//     font-weight: 300;
//     font-size: 0.1em;
//     color: #555;
//     opacity: 1;
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
//     font-size: 1.1em;
//   }
//   .rbc-date-cell {
//     text-align: center;
//     padding: 2px 0;
//     font-size: 0.8em;
//   }
//   .rbc-month-header {
//     .rbc-header {
//       &:nth-child(7) {
//         color: #17a1fa; // 토요일 파랑
//       }
//       &:first-child {
//         color: #ea4335; // 일요일 빨강
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
//   .rbc-row {
//     margin-bottom: 5px;
//   }

//   .rbc-event,
//   .rbc-day-slot .rbc-background-event {
//     border: none;
//     box-sizing: border-box;
//     box-shadow: none;
//     margin: 0 auto;
//     padding: 1px 0px;
//     border-radius: 5px;
//     color: #fff;
//     cursor: pointer;
//     width: 90%;
//     height: 50%; // 크기 설정
//     text-align: center; /* 텍스트 가운데 정렬 */
//     line-height: 1; /* 텍스트 라인 높이 설정 */
//     font-size: 0.3em; /* 글씨 크기 조정 */
//     box-sizing: border-box; /* 패딩과 보더를 포함한 크기 계산 */
//     overflow: hidden; /* 넘치는 텍스트 숨김 */
//   }
// `;

import styled from 'styled-components';

export const CalendarCont = styled.div`
  padding: 18px;
  background-color: #f0f0f0;
  border-radius: 40px;
  margin-top: 40px;
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
    font-size: 0.1em;
    color: #555;
    opacity: 1;
    border: none; /* 전체 캘린더의 테두리 제거 */
  }

  .rbc-header {
    background-color: transparent;
    border: none; /* 헤더의 테두리 제거 */
    padding: 5px 3px;
    font-size: 0.9em;
  }

  .rbc-month-view,
  .rbc-month-row,
  .rbc-day-bg {
    border: none; /* 월별 보기, 월별 행, 일 배경의 테두리 제거 */
  }

  .rbc-off-range-bg {
    background-color: transparent;
    border: none; /* 범위 밖 날짜의 테두리 제거 */
  }

  .rbc-today {
    background-color: transparent;
    border: none; /* 오늘 날짜 셀의 테두리 제거 */
  }

  .rbc-button-link {
    color: #555;
    font-size: 1.1em;
    border: none; /* 버튼 링크의 테두리 제거 */
  }

  .rbc-date-cell {
    text-align: center;
    padding: 2px 0;
    font-size: 0.8em;
    border: none; /* 날짜 셀의 테두리 제거 */
  }

  .rbc-month-header {
    .rbc-header {
      &:nth-child(7) {
        color: #17a1fa; /* 토요일 파랑 */
      }
      &:first-child {
        color: #ea4335; /* 일요일 빨강 */
      }
      border: none; /* 월 헤더의 테두리 제거 */
    }
  }

  .rbc-row-content {
    border: none; /* 행 내용의 테두리 제거 */
    .rbc-row {
      .rbc-date-cell {
        &:nth-child(7) .rbc-button-link {
          color: #17a1fa;
        }
        &:first-child .rbc-button-link {
          color: #ea4335;
        }
        border: none; /* 날짜 셀의 테두리 제거 */
      }
    }
  }

  .rbc-row {
    margin-bottom: 4px;
    border: none; /* 각 행의 테두리 제거 */
  }

  .rbc-event,
  .rbc-day-slot .rbc-background-event {
    border: none;
    box-sizing: border-box;
    box-shadow: none;
    margin: 0 auto;
    padding: 1px 0px;
    padding-left: 3px;
    border-radius: 5px;
    cursor: pointer;
    width: 101%;
    height: 100%; 
    text-align: center; 
    overflow: hidden; 
  }
`;
