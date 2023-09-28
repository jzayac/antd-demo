import { Case } from "@/models/case";
import { Chart } from "@antv/g2";
import { Space, Typography } from "antd";
import { useEffect, useRef } from "react";
import { GraphWrapper } from "./GraphWrapper";

const { Text } = Typography;

type Props = {
  data: Case[];
};

export function ColumnChart({ data }: Props) {
  const container = useRef(null);
  const chart = useRef(null);

  const width = 500;
  const height = 500;

  useEffect(() => {
    if (!chart.current && data.length > 0) {
      // @ts-ignore
      chart.current = renderBarChart(container.current);
    }
  }, []);

  function renderBarChart(container: any) {
    const chart = new Chart({
      container,
      width,
      height,
    });

    // count cases by month
    const last6Months = Array.from({ length: 6 }, (_, index) => {
      const today = new Date();
      today.setMonth(new Date().getMonth() - index);

      const yearMonth =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1).toString().padStart(2, "0");

      return {
        month: yearMonth,
        newCases: data
          .filter((item, index) => {
            return item.date.startsWith(yearMonth);
          })
          .reduce((acc, item) => {
            return acc + item.newCasesByPublishDate;
          }, 0),
      };
    });

    chart
      .interval() // Create an Interval tag
      .data(last6Months) // Bind data
      .encode("y", "newCases") // Encode x channel
      .encode("x", "month") // Encode y channel
      .encode("key", "month") // Specify key
      .animate("update", { duration: 300 }); // Specify the time to update the animation

    chart.render();

    return chart;
  }

  return (
    <GraphWrapper title="Cases by Month">
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
