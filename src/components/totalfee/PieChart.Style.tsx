import styled from 'styled-components';

export const ChartContainer = styled.div`
  position: relative;
  padding-top: 20px;
  width: 100%;
  height: 300px;

  canvas {
    max-height: 100%;
  }

  .chartjs-legend {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .chartjs-legend li {
    margin-bottom: 10px;
    margin-top: 20px;
  }
`;
