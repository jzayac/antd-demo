import React, { ComponentType } from "react";
import type { ThemeConfig } from "antd";
import { ConfigProvider } from "antd";
import { Layout } from "antd";

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "green",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
};

const contentStyle: React.CSSProperties = {
  padding: "0 50px",
  color: "#eee",
};

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#52c41a",
  },
};

type Props = {
  Component: ComponentType;
  pageProps: Record<string, unknown>;
};

export default function MyApp({ Component, pageProps }: Props) {
  return (
    <ConfigProvider theme={theme}>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center", backgroundColor: "#333333" }}>
          <h1 style={headerStyle}>App Title</h1>
        </Header>
        <Content style={contentStyle}>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </ConfigProvider>
  );
}
