import { Case } from "@/models/case";
import { Chart } from "@antv/g2";
import { Space, Typography } from "antd";
import { useEffect, useRef } from "react";
import { GraphWrapper } from "./GraphWrapper";

const { Text } = Typography;

type Props = {
  data: Case[];
};

export function PieChart({ data }: Props) {
  const container = useRef(null);
  const chart = useRef(null);

  const width = 500;
  const height = 500;

  const renderBarChart = (container: any) => {
    const chart = new Chart({
      container,
      width,
      height,
    });

    chart.coordinate({ type: "theta", innerRadius: 0.25, outerRadius: 0.8 });

    // count cases by month
    const last6Months = Array.from({ length: 6 }, (_, index) => {
      const today = new Date();
      today.setMonth(new Date().getMonth() - index);

      const yearMonth =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1).toString().padStart(2, "0");

      return {
        id: yearMonth,
        value: data
          .filter((item, index) => {
            return item.date.startsWith(yearMonth);
          })
          .reduce((acc, item) => {
            return acc + item.newCasesByPublishDate;
          }, 0),
      };
    });

    chart
      .interval()
      .data(last6Months)
      .transform({ type: "stackY" })
      .encode("y", "value")
      .encode("color", "id")
      .scale("color", {
        range: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb"],
      })
      .label({
        text: "value",
        fontWeight: "bold",
        offset: 14,
      })
      .label({
        text: "id",
        position: "spider",
        connectorDistance: 0,
        fontWeight: "bold",
        textBaseline: "bottom",
        textAlign: (d: any) => (["c", "sass"].includes(d.id) ? "end" : "start"),
        dy: -4,
      })
      .style("radius", 4)
      .style("stroke", "#fff")
      .style("lineWidth", 2)
      .animate("enter", { type: "waveIn" })
      .legend(false);

    // Render visualization
    chart.render();

    return chart;
  };

  useEffect(() => {
    if (!chart.current) {
      // @ts-ignore
      chart.current = renderBarChart(container.current);
    }
  }, [data]);

  return (
    <GraphWrapper title="Cases">
      {data.length === 0 ? (
        <Space style={{ width, height }}>
          <Text>loading...</Text>
        </Space>
      ) : (
        <div ref={container}></div>
      )}
    </GraphWrapper>
  );
}
