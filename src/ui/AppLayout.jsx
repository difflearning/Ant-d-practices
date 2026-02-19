import React, { useState } from 'react';
import {
  CommentOutlined,
  CustomerServiceOutlined,
  DownloadOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {FloatButton, Button, Layout, Menu, theme, Flex, Space } from 'antd';


const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{height:"100dvh"}}>
      <Sider style={{display:"flex",alignItems:"center",justifyContent: "center"}} trigger={null} collapsible collapsed={collapsed}>
       
        <Flex style={{ height: "100vh" }} justify="space-between"  vertical   >
   

          <div className="logo">
               <img src="/logo.png" alt="logo" />
          </div>


          <Flex     vertical gap="small" >
            <Button type="primary" icon={<DownloadOutlined />} size="large" />
            <Button type="primary" icon={<DownloadOutlined />} size="large" />
            <Button type="primary" icon={<DownloadOutlined />} size="large" />
            <Button type="primary" icon={<DownloadOutlined />} size="large" />
            <Button type="primary" icon={<DownloadOutlined />} size="large" />
          </Flex>

          <Space  direction="vertical">

                  <Button type="primary" icon={<DownloadOutlined />} size="large" />
      <Button type="primary" icon={<DownloadOutlined />} size="large" />

          </Space>

     </Flex>

      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content

          {/* <Outlet/> */}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;