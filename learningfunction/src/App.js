import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import 'antd/dist/antd.css';
import { Dropdown, Menu, Icon, Drawer, Input, Rate, Button,notification } from 'antd'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import Box from './components/SarahaBox'
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'



function App() {
  
  const { TextArea } = Input;
const [torf,setTorf]=useState(false);
const [torff,setTorff]=useState(false);

const func=()=>{

  setTorf(!torf);

  
  notification.open({
    placement:'bottomRight',
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />
  });

}

  return (



    <div className="App" >

     
 
      <Box style={{ textAlign: "center" }} />
      <Button  style={{ marginLeft:"570px",marginTop: "600px",position:"absolute" }} onClick={()=>setTorff(!torff)}>About</Button>
      <Button  style={{ marginLeft:"650px",marginTop: "600px",position:"absolute" }} onClick={()=>setTorf(!torf)}>Feedback</Button>
      <Drawer
        title="Feedback"

        closable={true}
        placement="right"
        visible={torf}
        onClose={()=>setTorf(!torf)}
      >
        <Input style={{ width: "100%" }}
          placeholder="Enter your name"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}

        />
        <Input placeholder="2K**/**/***" style={{ marginTop: "20px" }}></Input>

        <TextArea rows={4} placeholder="Some words from you..." style={{ marginTop: "20px" }} />

        <Rate allowHalf defaultValue={2.5} style={{ marginTop: "20px" }} />

        <Button type="primary" style={{ marginTop: "20px" }} onClick={func}>Submit</Button>
      </Drawer>
     
      <Drawer
        title="About"

        closable={true}
        placement="left"
        visible={torff}
        onClose={()=>setTorff(!torff)}
      >
        Tarun Kumar
      </Drawer>



    </div>


  );
}

export default App;
