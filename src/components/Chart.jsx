import React from "react";
import "../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  FlexibleXYPlot,
} from "react-vis";

const Chart = (props) => {

  return (
    <FlexibleXYPlot height={500} width={1000} color="red">
      <LineSeries data={props.data} />
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
    </FlexibleXYPlot>
  );
};

export default Chart;
