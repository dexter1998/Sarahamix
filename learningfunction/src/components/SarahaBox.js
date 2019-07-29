import React, { useState } from 'react'
import 'antd/dist/antd.css';
import styled from 'styled-components'
// https://onaircode.com/wp-content/uploads/2017/11/Constellation.jpg
import { Avatar, Input, Radio, Button, Modal, Icon, Badge, Popover, Search } from 'antd';
import Arraydtu from './class.json'
import EmojiPicker from 'emoji-picker-react';
import Dp from './0981.png'

const Div = styled.div` 
border-radius:0px;
box-shadow: 0px 1px 0px rgba(0,0,0,0.1);

width:100%;
display:flex;
margin-right:30px;
height:49px;


`;
const Div1 = styled.div` 
box-shadow: 1px 1px 3px rgba(0,0,0,0.7);
border-radius: 10px;
width:25%;
background-color:#ffff;
border-color:black;


height:400px;


`;
const Div2 = styled.div` 
box-shadow: 1px 1px 3px rgba(0,0,0,0.7);
border-radius: 10px;
width:41%;
background-color:#ffff;

margin-left:25px;
height:400px;`;
const Div4 = styled.div` 
box-shadow: 1px 1px 3px rgba(0,0,0,0.7);
border-radius: 10px;
width:26%;
background-color:#ffff;
justify-content:center;
margin-left:30px;
height:auto;

`;
const Div3 = styled.div`
display:flex;
height:400px;
margin:100px;
width:1200px;
justify-content:center;
`;

const Divf = styled.div`
display:flex;
height:10%;

justify-content:center;


`;
const Divs = styled.div`
display:flex;
justify-content:space-around;
padding-left:0px;
height:70px;
border-radius:10px;
border-bottom-left-radius: 0px;
border-bottom-right-radius: 0px;
`;





const Divi = styled.div`
overflow:auto;
::-webkit-scrollbar { 
    display: none; 
}
height:330px;
 
`;
const Divp = styled.div`

width:35px;
height:35px;
border-radius:30px;

background:url(${Dp}); 

border-color:#f5f5f5;
border-width:thin;
border-style:solid;
`;
const DivB = styled.div`
width:5%;

margin-top:24px;
margin-left:-8px;
background-color:#40A9FF;
height:25px;

`;
const Divright = styled.div`
position:absolute;

height:120px;
width:120px;
margin-left:80px; 
background:url(${Dp}); 
margin-top:10px;




`;
const DivT = styled.div`
margin-left:10px;
  font-size: 16px;
  text-align:center;
`;
const Divc = styled.div`
display:flex;
justify-content:space-around;

`;

const Diva = styled.div`

height:30px;
width:50%;
background-color:gray;
border-radius:10px;
margin-left:10px;
padding:1%;
`;
const Divb = styled.div`
height:30px;
width:30%;
background-color:gray;
border-radius:10px;
margin-left:10px;
padding:1%;
`;
const Divd = styled.div`

height:30px;
width:90%;
background-color:gray;
border-radius:10px;
margin-left:10px;
padding:1%;
`;
const Divcolor = styled.div`
background-color:#40A9FF;
width:100%;
height:200px;
border-top-left-radius:10px;
border-top-right-radius:10px;
`;
const Bottom = styled.div`
background-color:#fff;
box-shadow:0px 0px 5px rgba(0,0,0,0.2);
margin-top:-40px;
margin-left:20px;
height:230px;
width:85%;

`;
const DivMiddle = styled.div`
overflow:auto;
::-webkit-scrollbar { 
    display: none; 
}

justify-content:center;
width:200px;

`;
const Divvv=styled.div`
border-radius:10px;

margin-left:50px;
max-width:600px;
height:auto;
background-color:#6d6d6d;
color:#fff;
display:flex;
justify-content:center;
text-align:center;

padding:5px;
`;


const Box = () => {
    const [modl, setmodl] = useState(false);
    const [del, setdel] = useState(false);
    const [count, setcount] = useState(50);
    const [getvalue, setvalue] = useState(1);
    const [linkn,setlinkn]=useState("");

    const linkf=(k)=>{
        setmodl(!modl);
        setlinkn(k);

    }



    const { Search } = Input;
    const array = Arraydtu;
    const ArrayItems = array.map((str, index) => {

        return (
            <Radio.Button value={`${index}`} style={{ width: "300px", height: "49px", borderRadius: "0px", padding: "7px" }} onClick={() => { setvalue(index) }}><Avatar icon="user" style={{ marginRight: "15px" }} />{str.name}</Radio.Button>
        );

    }

    );

    const messagesarray=array.map((str,index)=>{
        console.log("entered in messagesarray")
        if(index===getvalue){
            console.log("entered in if ")
            return(str.anony.map((mess,ind)=>{
                console.log(mess)
                return(<div><Divvv>{mess}</Divvv> <br></br></div>);
            }))
        }
                

    })

    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );
    const text = <span>Title</span>;

    const sectionfourth = array.map((str, index) => {
        if (getvalue === index) {
            return (<Div4>
                <Divcolor>
                    <Divright></Divright>
                    <Button shape="circle" size="20px" style={{ "backgroundColor": "f2003c", marginLeft: "125px", marginTop: "115px" }} onClick={() => { setcount(count + 1) }}><Icon type="heart" theme="filled" style={{ fontSize: '15px', color: '#f2003c' }} /></Button>
                </Divcolor>
                <Bottom>
                    <DivT>
                        <strong> {str.name}</strong>
                    </DivT>
                    <div style={{ textAlign: "center" }}>
                        <i style={{ fontSize: "12px" }}>{str.rolln}</i>
                    </div>
                    <Badge count={count} overflowCount={999} style={{ marginLeft: "105px" }}></Badge>

                    <Divc>
                        <Popover placement="rightTop" title={text} content={content} trigger="click">
                            <Button type="primary" style={{ "backgroundColor": "#40a9ff", width: "53%", marginTop: "23px" }}>BADGES</Button>
                        </Popover>
                    </Divc>
                    <div style={{ paddingLeft: "21%", paddingRight: "15%" }}>
                        <Button type="primary" style={{ "backgroundColor": "#0077b5", borderColor: "#0077b5", width: "30px", padding: "1%", margin: "6%" }} onClick={()=>{linkf("linkedin")}}><Icon type="linkedin" style={{ color: "#fff", fontSize: "20px" }} theme="filled" /></Button>
                        <Button type="primary" style={{ "backgroundColor": "#4267b2", borderColor: "#4267b2", width: "30px", padding: "1%", margin: "6%" }} onClick={()=>{linkf("facebook")}}><Icon type="facebook" style={{ color: "#fff", fontSize: "20px" }} theme="filled" /></Button>
                        <Button type="primary" style={{ "backgroundColor": "#df0043", borderColor: "#df0043", width: "30px", padding: "1%", margin: "6%" }} onClick={()=>{linkf("instagram")}}><Icon type="instagram" style={{ color: "#fff", fontSize: "20px" }} theme="filled" /></Button>
                        <Modal
                            title="Basic Modal"
                            visible={modl}
                            onOk={() => { setmodl(!modl) }}
                            onCancel={() => { setmodl(!modl) }}
                        >
                            <Input placeholder={`${linkn}`}></Input>
                        </Modal>
                    </div>
                    <Button style={{ "backgroundColor": "#f2003c", width: "100%", borderRadius: "0px", color: "white", marginTop: "20px" }} onClick={() => { setdel(!del) }}><i class="fas fa-trash" style={{ color: "#fff", fontSize: "15px", marginRight: "10px" }} ></i>  DELETE PROFILE</Button>
                    <Modal
                        title="Basic Modal"
                        visible={del}
                        onOk={() => { setdel(!del) }}
                        onCancel={() => { setdel(!del) }}
                    >
                        <Input placeholder=""></Input>
                    </Modal>
                </Bottom>
            </Div4>)
        }



    })

    return (
        <Div3 style={{ position: "absolute" }}>
            <Div1 >
                <Divs >
                    <DivB></DivB>
                    <Search style={{ width: "80%", marginTop: "21px", marginRight:"20px", height: "30px"}}
                        placeholder="Search Name"
                        onSearch={value => console.log(value)}

                    />


                </Divs>
                <Divi>
                    <Radio.Group defaultValue="1" buttonStyle="solid">
                        {ArrayItems}
                    </Radio.Group>
                </Divi>
            </Div1>
            <Div2>

                <div type="text" style={{ width: "100%", height: '10%', borderRadius: "10px", fontSize: "12px", display: "flex", paddingLeft: "4%", paddingTop: "1%" }}>
                    <strong > Type Anonymously...</strong>
                    <Badge status="processing" color="green" style={{ marginLeft: "68%" }}></Badge>

                </div>

                <DivMiddle style={{ height: "78%" }}>
                   {messagesarray}
                
                </DivMiddle>
                <Divf>
                    <div style={{ boxShadow: "0px 0px 8px rgba(0,0,0,0.1)", marginTop: "0.5%", borderRadius: "20px", borderWidth: "thin", width: "95%" }}>
                        <Button shape="circle" style={{ borderColor: "#fff", marginLeft: "2%", marginTop: "0.3%" }} ><Icon type="smile" /></Button>
                        <Input type="text" placeholder="Type a message.." style={{ width: "75%", borderColor: "white", boxShadow: "none", marginLeft: "2.5%" }} />
                        <Button shape="circle" style={{ borderColor: "#fff", marginLeft: "4.5%", marginTop: "0.3%" }}><i class="fas fa-paper-plane" ></i></Button>
                    </div>

                </Divf>
            </Div2>


            {sectionfourth}





        </Div3>
    );
}

export default Box
