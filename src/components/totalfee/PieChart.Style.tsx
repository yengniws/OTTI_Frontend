import styled from 'styled-components';

export const ChartContainer = styled.div`
  position: relative;
  padding-top: 20px;
  width: 100%;
  height: 300px;

  canvas {
    max-height: 100%;
    max-width: 100%;
  }

  .chartjs-legend {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    position: absolute !important;
    bottom: 0 !important;
    left: 0 !important;
    width: 100% !important;
    padding: 20px 0 !important;
  }

  .chartjs-legend ul {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  .chartjs-legend li {
    margin-bottom: 10px !important;
    display: flex !important;
    align-items: center !important;
    width: 100% !important;
  }

  .chartjs-legend li span {
    margin-right: 10px !important;
  }
`;
