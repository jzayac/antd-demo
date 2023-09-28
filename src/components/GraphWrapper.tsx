import { MessageOutlined } from "@ant-design/icons";
import { Space, Card, Image, Row, Col, Divider } from "antd";

type Props = {
  children: React.ReactNode;
  title: string;
};

export function GraphWrapper({ title, children }: Props) {
  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <Card title={title} size="default">
        {children}
        <Divider />
        <Row
          justify="space-between"
          style={{ borderTop: "10", borderTopColor: "black" }}
        >
          <Image width={20} src="https://picsum.photos/20/20?q=2" />
          <Col>
            1
            <MessageOutlined />
          </Col>
        </Row>
      </Card>
    </Space>
  );
}
