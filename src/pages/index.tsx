import React from "react";
import { Button, Row, Col } from "antd";
import { DownloadOutlined, AlignLeftOutlined } from "@ant-design/icons";
import { ColumnChart } from "@/components/ColumnChart";
import { useBanks } from "@/hooks/use-test";
import { PieChart } from "@/components/PieChart";

const Home = () => {
  let data = useBanks();

  return (
    <>
      <Row justify="space-between">
        <h3 style={{ color: "black" }}>Page title</h3>
        <Col className="gutter-row">
          <Row justify="space-between">
            <Button>
              Export to Pdf
              <DownloadOutlined style={{ color: "green", scale: "1.2" }} />
            </Button>
            <Button>
              Notes <span style={{ color: "grey" }}>(3)</span>
              <AlignLeftOutlined style={{ color: "green", scale: "1" }} />
            </Button>
            <Button>
              Filters
              <span style={{ color: "green" }}>9+</span>
              <AlignLeftOutlined style={{ color: "green", scale: "1" }} />
            </Button>
          </Row>
        </Col>
      </Row>
      <Row gutter={[10, 24]}>
        <Col span={10}>
          <ColumnChart data={data} />
        </Col>
        <Col span={10} push={4}>
          <PieChart data={data} />
        </Col>
      </Row>
    </>
  );
};

export default Home;
