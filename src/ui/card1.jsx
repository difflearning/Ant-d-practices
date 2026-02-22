
            <Card style={{ backgroundColor: 'red', width: 350, padding: 0,borderRadius:17 }}>
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
            backgroundColor: '#fff', // search bar background
          }}
        >
          <Input
            placeholder="Search..."
            style={{
              border: 'none',
              flex: 1,
              padding: '8px 12px',
              borderRadius: 0,
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
                    <Avatar  shape='square'/>
                    <Avatar shape='square'/>
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
                    <Avatar  shape='square'/>
                    <Avatar shape='square'/>
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
                    <Avatar  shape='square'/>
                    <Avatar shape='square'/>
                </div>
            </Flex>


        </Card>


        
      </Flex>
    </Card>