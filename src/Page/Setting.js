import '../Css/Home.css'
import {Container, Button, Grid,  Paper } from '@mui/material';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import Buttonmenu from './Buttonmebu';
import Switch from '@mui/material/Switch';
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import MenubarHome from '../Page/MenubarHome';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Setting() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [age, setAge] = React.useState('');

    const Change = (event) => {
        setAge(event.target.value);
    };


    return (

        <div >
    
            <MenubarHome/>

            <div style={{backgroundColor:"#db2531",color:"#ffffff",padding:"1px"}}>
                <Container>
                    <h3>การคั้งค่าและการจัดการ</h3>
                </Container>
            </div>
            <div style={{ height: 55 }} />

            <Container >

                <Grid container spacing={1}>
                    
                    <Grid item xs={3} style={{marginRight:"10px"}}>
                    
                        <div style={{ backgroundColor: "#eeeeee", marginRight: "10px", display: "inline" }} >
                        <Paper elevation={3} >
                            <div style={{ padding: "15px", height: "50px" }} className="menu">
                                <PersonIcon style={{ marginTop: "10px" }} />
                                <p style={{ marginTop: "-27px", marginLeft: "30px" }}>การตั้งค่าทั่วไปและธีม</p>
                            </div>
                            <div style={{ padding: "15px",  height: "50px" }} className="menu">
                                <VpnKeyIcon style={{ marginTop: "10px" }} />
                                <p style={{ marginTop: "-27px", marginLeft: "30px" }}>ความปลอดภัย</p>
                            </div>
                            </Paper >
                        </div>
                        
                    </Grid>
                    <Grid item xs={8} style={{ backgroundColor: "#fcfcfc",marginTop:"7px"}} >
                        <div style={{ padding: "4%",marginTop:"-20px" }}>
                            <h3>การตั้งค่าทั่วไป</h3>
                            <p>จัดการรายละเอียดบัญชีที่คุณแชร์กับ GreenGraph รวมถึงชื่อของคุณ ข้อมูลติดต่อ เป็นต้น</p>
                            <div style={{ height: 10 }} />
                            <h3>รายละเอียดส่วนตัว</h3>
                            <p>จัดการชื่อและข้อมูลติดต่อของคุณ รายละเอียดส่วนตัวดังกล่าวเป็นความลับ และผู้ใช้รายอื่นจะไม่เห็นข้อมูลของคุณ</p>
                            <div style={{ height: 10 }} />
                            <Avatar  style={{ width: 130, height: 130 }} />
                            <div>
                                <p>Name: CHAKPHET WONGMANEE Email: King33130hex@gmail.com</p>

                            </div>

                            <div style={{ height: 10 }} />
                            <h3>ธีมโหมด</h3>
                            <p>ธีมโหมดมีสองโหมดคือโหมดกลางวันและกลางคืนโดยค่าเริ่มจะถูกตั้งไว้เป็นโหมดกลางวัน</p>

                            <FormControl fullWidth >
                                <Switch {...label} />
                            </FormControl><br />



                            <div style={{ height: 10 }} />
                            <h3>ภาษา</h3>
                            <p>เลือกภาษาสำหรับการแสดงผลบนหน้าเว็บไซต์ของคุณโดยจะมีให้เลือกทั้งหมด2ภาษาคือภาษาไทยและอังกฤษ</p>

                            <FormControl fullWidth >
                                <InputLabel id="demo-simple-select-label">เลือก</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={Change}
                                    style={{ marginBottom: "20px", width: "50%" }}
                                    size="small"
                                    margin="normal"
                                >
                                    <MenuItem value={10}>ภาษาไทย</MenuItem>
                                    <MenuItem value={20}>
                                        English</MenuItem>
                                </Select>
                            </FormControl><br />

                            <Button variant="contained" style={{ width: "50%" }}> ยืนยัน</Button>

                        </div>
                    </Grid>


                </Grid>

            </Container>

            <div style={{ marginTop: 100 }} />

            <Buttonmenu />




        </div>


    );
}

export default Setting;