import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import 'antd/dist/antd.css';
import { Dropdown, Menu, Icon, Drawer, Input, Rate, Button} from 'antd'
import Particles from 'react-particles-js'
import styled from 'styled-components'
import Box from './components/SarahaBox'
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link,withRouter} from 'react-router-dom'

import { func } from 'prop-types';
const Div=styled.div`
margin:300px;
position:absolute;
margin-left:350px;

`;

function App() {
  
  return (

<Router>
    <div className="App" >

     
   
      <Switch><Route exact path='/'>
        ()=>{
          <Div>
            <h1 style={{color:"white"}}>Hi, Dexter here </h1>
            <Link to="/dexworld"><Button type="danger" size="large" onClick={func}>Proceed <Icon type="login" /></Button></Link> 
          </Div>
        }
      </Route></Switch>
      
        <Switch><Route exact path='/dexworld' exact  component={Box} ></Route></Switch>
      




    </div>

    </Router>
  );
}

export default App;
