import styled from 'styled-components';

export const SCalendarContainer = styled.div`
  padding: 10px;
  background-color: #f0f0f0; // 회색 배경 추가
  border-radius: 8px;
`;

export const SMonthHeader = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #333;
`;

export const SCalendarWrap = styled.div`
  .rbc-calendar {
    font-family: 'Arial', sans-serif;
    background-color: transparent;
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
    color: black;
    font-size: 0.9em;
  }
  .rbc-date-cell {
    text-align: center;
    padding: 2px 0;
  }
  .rbc-month-header {
    .rbc-header {
      &:nth-child(7) {
        color: blue;
      }
      &:first-child {
        color: red;
      }
    }
  }
  .rbc-row-content {
    .rbc-row {
      .rbc-date-cell {
        &:nth-child(7) .rbc-button-link {
          color: blue;
        }
        &:first-child .rbc-button-link {
          color: red;
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
