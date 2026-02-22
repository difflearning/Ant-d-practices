import React, { useEffect, useState } from 'react';
import {
  BellOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CommentOutlined,
  CustomerServiceOutlined,
  DownloadOutlined,
  EditOutlined,
  FieldTimeOutlined,
  FolderOpenOutlined,
  FolderViewOutlined,
  FullscreenOutlined,
  HomeOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  PieChartOutlined,
  ScheduleOutlined,
  SearchOutlined,
  SunOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {FloatButton, Button, Layout, Menu, theme, Flex, Space, Badge, Avatar, Card, Input, Form, Row, Col, Select, Progress } from 'antd';
import '../styles/sidebar.css';  // import CSS here
import Search from 'antd/es/transfer/search';
import { Line } from '@ant-design/charts';
import logo from "../assets/logo.png"; // adjust path if needed
import av1 from "../assets/02.jpg"; // adjust path if needed
import av2 from "../assets/03.jpg"; // adjust path if needed

const { Header, Sider, Content } = Layout;
const App = () => {


    // Raw weekly performance data
  const rawData = [
    { day: "Mon", theory: 60, practice: 40, lexicon: 25 },
    { day: "Tue", theory: 65, practice: 45, lexicon: 30 },
    { day: "Wed", theory: 70, practice: 50, lexicon: 35 },
    { day: "Thu", theory: 75, practice: 55, lexicon: 40 },
    { day: "Fri", theory: 80, practice: 60, lexicon: 45 },
  ];

  // Convert to long format (required for multiple lines)
  const data = [];
  rawData.forEach((d) => {
    data.push({ day: d.day, type: "Theory", value: d.theory });
    data.push({ day: d.day, type: "Practice", value: d.practice });
    data.push({ day: d.day, type: "Lexicon", value: d.lexicon });
  });

  const config = {
    data,
    xField: "day",
    yField: "value",
    seriesField: "type",

    smooth: true,

    // 👇 Area under the line
    area: {
      style: {
        fillOpacity: 0.12, // light & clean
      },
    },

    // 👇 Thin line ABOVE the area
    lineStyle: {
      lineWidth: 1.4,
    },

    // Optional dots on lines
    point: {
      size: 3,
    },

    color: ["#1677ff", "#52c41a", "#fa8c16"],

    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Performance (%)",
      },
    },

    legend: {
      position: "top",
    },

    tooltip: {
      formatter: (datum) => ({
        name: datum.type,
        value: `${datum.value}%`,
      }),
    },
  };

  const [friends, setFriends] = useState([]);

    useEffect(() => {
    // Fetch 3 random users
    fetch("https://randomuser.me/api/?results=3")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          avatar: user.picture.medium,
          schedule: Math.floor(Math.random() * 50),
          time: Math.floor(Math.random() * 50),
          clock: Math.floor(Math.random() * 50),
          score: Math.floor(Math.random() * 20000),
        }));
        setFriends(formatted);
      });
  }, []);



  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout  style={{minHeight:'100dvh',  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}} >


<Sider

  width={80}
  collapsedWidth={64}
  collapsible
  collapsed={collapsed}
  trigger={null}
  style={{ background: 'transparent' }}
>
  <Flex
    vertical
    justify="space-between"
    align="center"
    style={{ height: '100%', padding: '12px 0' }}
  >
    {/* 🔝 Logo */}
    <div className="logo">
      <img src={logo} alt="logo" style={{ width: 44 }} />
    </div>

    {/* 📌 Main icons */}
    <Flex  vertical gap={0} align="center">
      <Button size="large"   type='text' icon={<HomeOutlined />} className="sidebar-btn" />
      <Button size="large"  icon={<DownloadOutlined />} />
      <Button size="large"  icon={<MailOutlined />} />
      <Button size="large"  icon={<FolderOpenOutlined />} />
      <Button size="large" icon={<ScheduleOutlined />} />
      <Button size="large" icon={<PieChartOutlined />} />
    </Flex>

    {/* 🌙 Bottom actions */}
    <Flex vertical gap={0} align="center">
      <Button size="large" icon={<SunOutlined />} />
      <Button size="large" icon={<MoonOutlined />} />
    </Flex>
  </Flex>




</Sider>

      <Layout   style={{background:'transparent'}} >

        <Content
          style={{
            margin: '16px 32px',
            minHeight: '100dvh',
            background: 'transparent',
            display:'flex',
            flexDirection:'column',
            gap:"20px"

          }}
        >
   <Row align="middle">
  {/* CENTER COLUMN */}
  <Col sm={0} xs={0} md={24} flex="auto">
    <Flex align="center" justify="center">
      <Button className="sidebar-btn" size="medium">Primary</Button>
      <Button className="sidebar-btn" size="medium">Primary</Button>
      <Button className="sidebar-btn" size="medium">Primary</Button>
      <Button className="sidebar-btn" size="medium">Primary</Button>
    </Flex>
  </Col>

  {/* RIGHT COLUMN */}
  <Col>
    <Flex align="center" gap={1}>
      <Button className="sidebar-btn" size="medium" icon={<SearchOutlined />} />
      <Badge dot offset={[-7, 4]}>
        <BellOutlined style={{ fontSize: 24 }} />
      </Badge>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Flex>
  </Col>
</Row>


 <Row gutter={[16, 16]}>
      {/* LEFT – spans 2 rows on desktop, full width on mobile */}
      <Col sm={24} lg={8} md={24}>
      <Card style={{ minWidth:300 , padding: 0,borderRadius:17 }}>
      <Flex   vertical gap={15}>
        {/* Header */}
        <Flex align="center" style={{ width: '100%' }} justify="space-between">
          <div style={{ margin: 0 }}>
            <h2 style={{ margin: 0 }}>Select A Course</h2>
            <p style={{ margin: '4px 0 0 0' }}>Start Learning today</p>
          </div>
          <Button size="large" icon={<FullscreenOutlined />} />
        </Flex>

        {/* Search bar container (no Card) */}
        <Form
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            borderRadius: '100vmax',
            overflow: 'hidden',
            backgroundColor: '#cac6c6', // search bar background
          }}
        >
          <Input
            placeholder="Search..."
            style={{
              border: 'none',
              flex: 1,
              padding: '8px 12px',
              borderRadius: 0,
                   backgroundColor: '#cac6c6'
            }}
          />
        

             {/* Button outside the pill container */}
          <Button
            type="primary" 
            size='large'
            className="sidebar-btn"
            icon={<SearchOutlined />}
            style={{
              marginLeft: 8,
              borderRadius: 4, // all four corners
              flexShrink: 0,

            }}/>
        </Form>



          <Card
              style={{
                backgroundColor: '#d1d6fd',
                height: 200,
                borderRadius:17
              }}
              styles={{
                body: {
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 16,
                  // border: '2px dashed red',
                  height:'100%'
                },
              }}
            >

            <div style={{width:'100%',padding:0,margin:0}}>

              <h2  style={{margin:0}}>Speak with Confidence</h2>
              <p style={{margin:0}}>Learn how to speak English and confidently</p>
            
            </div>

            <Flex  justify='space-between' align='center' style={{marginTop:'auto'}}>

                <Space size={10}>
                  <Button className="sidebar-btn"  icon={<CalendarOutlined/>}/>
                  <span>27 Apr 2025</span>
                </Space>


                <div>
                    <Avatar src={av1} shape='square'/>
                    <Avatar src={av2} shape='square'/>
                </div>
            </Flex>


        </Card>
  <Card
              style={{
                backgroundColor: '#cfeafc',
                height: 200,
                borderRadius:17
              }}
              styles={{
                body: {
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 16,
                  // border: '2px dashed red',
                  height:'100%'
                },
              }}
            >

            <div style={{width:'100%',padding:0,margin:0}}>

              <h2  style={{margin:0}}>Speak with Confidence</h2>
              <p style={{margin:0}}>Learn how to speak English and confidently</p>
            
            </div>

            <Flex  justify='space-between' align='center' style={{marginTop:'auto'}}>

                <Space size={10}>
                  <Button className="sidebar-btn"  icon={<CalendarOutlined/>}/>
                  <span>27 Apr 2025</span>
                </Space>


                <div>
                    <Avatar src={av1} shape='square'/>
                    <Avatar src={av2} shape='square'/>
                </div>
            </Flex>


        </Card>
  <Card
              style={{
                backgroundColor: '#e2fad4',
                height: 200,
                borderRadius:17
              }}
              styles={{
                body: {
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 16,
                  // border: '2px dashed red',
                  height:'100%'
                },
              }}
            >

            <div style={{width:'100%',padding:0,margin:0}}>

              <h2  style={{margin:0}}>Speak with Confidence</h2>
              <p style={{margin:0}}>Learn how to speak English and confidently</p>
            
            </div>

            <Flex  justify='space-between' align='center' style={{marginTop:'auto'}}>

                <Space size={10}>
                  <Button className="sidebar-btn"  icon={<CalendarOutlined/>}/>
                  <span>27 Apr 2025</span>
                </Space>


                <div>


                    <Avatar src={av1} shape='square'/>
                    <Avatar src={av2} shape='square'/>
                </div>
            </Flex>


        </Card>


        
      </Flex>
    </Card>
      </Col>

      {/* RIGHT */}
      <Col xs={24} lg={16} md={24}>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={24}>
   

         <Card title="Weekly Performance">
        <Line {...config} />
      </Card>
          
          </Col>

          

          <Col xs={24} lg={12} md={24}>
          
 

<Card
  bodyStyle={{
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 17,
    border: "1px dashed green",
  }}
  style={{
    borderRadius: 17,
    margin: 0,
    padding: 0,
    minHeight: 200,
    display: "flex",
    flexDirection: "column",
  }}
>
  {/* Top row grows to take space */}
  <div style={{ flexGrow: 1 }}>
    <Row align="middle" justify="space-between">
      <Col>
        <h2 style={{ margin: 0 }}>Homework</h2>
        <p style={{ margin: 0 }}>check and complete tasks</p>
      </Col>
      <Col>
        <Select
          style={{ width: 100, borderRadius: "50vmax" }}
          placeholder="Day"
          options={[{ value: "Mon", label: "Monday" }]}
        />
      </Col>
    </Row>
  </div>

  {/* Bottom row sticks to bottom */}
  <Row align="middle" gutter={10} style={{ marginTop: 10 }}>
    <Col>
      <Button size='large' icon={<FolderViewOutlined />} />
    </Col>
    <Col flex={1}>
      <Space vertical size={0} style={{ width: "100%" }}>
        <p style={{ margin: 0 }}>Write 3 sentences with vocab</p>
        <Progress percent={57} />
      </Space>
    </Col>
  </Row>
  <Row align="middle" gutter={10} style={{ marginTop: 10 }}>
    <Col>
      <Button size='large' icon={<EditOutlined />} />
    </Col>
    <Col flex={1}>
      <Space direction="vertical" size={0} style={{ width: "100%" }}>
        <p style={{ margin: 0 }}>Write 3 sentences with vocab</p>
        <Progress percent={42} />
      </Space>
    </Col>
  </Row>
  <Row align="middle" gutter={10} style={{ marginTop: 10 }}>
    <Col>
      <Button size='large' icon={<VideoCameraAddOutlined />} />
    </Col>
    <Col flex={1}>
      <Space direction="vertical" size={0} style={{ width: "100%" }}>
        <p style={{ margin: 0 }}>Write 3 sentences with vocab</p>
        <Progress percent={31} />
      </Space>
    </Col>
  </Row>
 
</Card>



          </Col>
          <Col xs={24} md={24} lg={12} sm={24}>
          
  

<Card
  bodyStyle={{
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 17,
    border: "1px dashed green",
  }}
  style={{
    borderRadius: 17,
    margin: 0,
    padding: 0,
    minHeight: 200,
    display: "flex",
    flexDirection: "column",
  }}
>
  {/* Top header */}
  <div style={{ flexGrow: 1, marginBottom: 8 }}>
    <Row align="middle" justify="space-between">
      <Col>
        <h2 style={{ margin: 0 }}>Friends Score</h2>
        <p style={{ margin: 0, fontSize: "clamp(0.5rem, 2vw, 0.8rem)" }}>
          See how you rank among friends
        </p>
      </Col>
      <Col>
        <Select
          style={{ width: 100, borderRadius: "50vmax" }}
          placeholder="All"
          options={[{ value: "Anna", label: "Anna Morgan" }]}
        />
      </Col>
    </Row>
  </div>

  {/* Friend rows */}
  {friends.map((friend, idx) => (
    <Row
      key={idx}
      align="middle"
      style={{ marginBottom: idx < friends.length - 1 ? 8 : 0 }}
      gutter={16}
    >
      <Col flex="auto">
        <Space align="start" size={12}>


                 <Avatar shape="square" src={friend.avatar} size="large" />
          <div>
            <h4 style={{ margin: 0 }}>{friend.name}</h4>
            <Space size={12}>
              <span><ScheduleOutlined style={{ marginRight: 4 }} />{friend.schedule}</span>
              <span><FieldTimeOutlined style={{ marginRight: 4 }}/>{friend.time}</span>
              <span><ClockCircleOutlined  style={{ marginRight: 4 }}/>{friend.clock}</span>
            </Space>
          </div>
        </Space>
      </Col>
      <Col>
        <div style={{ border: "2px dashed green", padding: "4px 8px", textAlign: "center" }}>
          <span className="rank">{friend.score.toLocaleString()}</span>
        </div>
      </Col>
    </Row>
  ))}
</Card>
          
          
          </Col>
        </Row>
      </Col>
    </Row>
   
          {/* <Outlet/> */}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;


