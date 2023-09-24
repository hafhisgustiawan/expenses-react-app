import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const max = Math.max(...props.dataPoints.map((el) => el.value));

  return (
    <div className="chart">
      {props.dataPoints.map((el) => (
        <ChartBar
          key={el.label}
          value={el.value}
          maxValue={max}
          label={el.label}
        />
      ))}
    </div>
  );
};

export default Chart;
