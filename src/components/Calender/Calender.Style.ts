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
    border: none;
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
    border: none;
  }

  .rbc-today {
    background-color: transparent;
    border: none;
  }

  .rbc-button-link {
    color: #555;
    font-size: 1.1em;
    border: none;
  }

  .rbc-date-cell {
    text-align: center;
    padding: 2px 0;
    font-size: 0.8em;
    border: none;
  }

  .rbc-month-header {
    .rbc-header {
      &:nth-child(7) {
        color: #17a1fa;
      }
      &:first-child {
        color: #ea4335;
      }
      border: none;
    }
  }

  .rbc-row-content {
    border: none;
    .rbc-row {
      .rbc-date-cell {
        &:nth-child(7) .rbc-button-link {
          color: #17a1fa;
        }
        &:first-child .rbc-button-link {
          color: #ea4335;
        }
        border: none;
      }
    }
  }

  .rbc-row {
    margin-bottom: 4px;
    border: none;
  }

  .rbc-event,
  .rbc-day-slot .rbc-background-event {
    border: none;
    box-sizing: border-box;
    box-shadow: none;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: hidden;
    background-color: #333;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;
