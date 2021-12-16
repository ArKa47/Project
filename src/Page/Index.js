import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Container, Button, Grid, Paper } from '@mui/material';
import '../Css/Index.css'
import M1 from '../Img/M1.png'
import computer from '../Img/computer.jpg'
import bgindex from '../Img/bgindex.jpg'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AirplayIcon from '@mui/icons-material/Airplay';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CloudIcon from '@mui/icons-material/Cloud';
import Buttonmenu from './Buttonmebu';
import tradsmaet from '../Img/tradsmaet.jpg'
import M15 from '../Img/M15.jpg'
import bowser from '../Img/bowser.png'
import Menubarindex from '../Page/Menubarindex'


function Index() {

    return (


        <div className="font1">

            <Menubarindex />

            <div>
                <img src={bgindex} className="bgindex" />
            </div>

            <div className="texttitle">
                <Container>
                    <h1>MAKE PROFIT EVEVRY DAY<br />
                        WITH GREENGRAPH</h1>
                    <img src={bowser} style={{ width: "150px" }} />
                </Container>
            </div>
            <div style={{ height: 200 }} />
            <Container className="text1">
                <Typography variant="h5">ทำให้การเทรดเป็นเรื่องง่าย ไม่ซับซ้อน <br /> พร้อมระบบที่ช่วยให้ผู้เล่นเข้าถึงการเทรดได้ง่ายขึ้น</Typography>
                <div style={{ height: 60 }} />
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={3}>
                        <VerifiedUserIcon style={{ fontSize: "2.5em" }} className="icon" />
                        <p className="texts1">เทรดด้วยความปลอดภัย</p>
                        <p className="texts2">เทรดด้วยความปลอดภัยมีระบบต่างๆที่ทำให้คุณมั่นใจในการเทรด</p>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <EqualizerIcon style={{ fontSize: "2.5em" }} className="icon" />
                        <p className="texts1">ระบบผู้ช่วยเล่นหรือAI</p>
                        <p className="texts2">มีระบบAIหรือBotที่ช่วยให้คุณเทรดและสร้างกำไรได้มากขึ้น</p>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <AirplayIcon style={{ fontSize: "2.5em" }} className="icon" />
                        <p className="texts1">บริการข้อมูลหุ้น</p>
                        <p className="texts2">บริการข้อมูลหุ้นแบบเบร็จเสร็จที่จะช่วยให้คุณตัดสินใจในการซื้อขาย</p>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <CloudIcon style={{ fontSize: "2.5em" }} className="icon" />
                        <p className="texts1">การบริการ</p>
                        <p className="texts2">บริการการติดต่อสื่อสารทุกๆ 24 ชั่วโมง ไม่มีวันหยุดราชการ</p>
                    </Grid>
                </Grid>
            </Container>


            <div style={{ backgroundColor: "#f8f7f6" }} className="title4" >

                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={4} className="x1">
                            <Paper elevation={5}>
                                <img src={computer} className="img1" />
                                <h3 >ONE STOCK DATA - SERVICE WEB </h3>
                                <div style={{ paddingLeft: "6%", paddingRight: "6%" }}>

                                    <p className="texts2">เว็บบริการข้อมูลหุ้นที่ช่วยให้คุณตัดสินใจในการซื้อขายได้ดีมากยิ่งขึ้น</p>

                                </div>
                                <div style={{ height: 40 }} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} lg={4} className="x1">
                            <Paper elevation={5} >
                                <img src={tradsmaet} className="img1" />
                                <h3>FOREX ที่หน้าสนใจ</h3>
                                <div style={{ paddingLeft: "6%", paddingRight: "6%" }}>
                                    <p className="texts2">แสดงอันดับของ Forex ที่น่าสนใจและการแนะนำเพื่อช่วยให้คุณตัดสินใจได้ดีขึ้น</p>
                                </div>
                                <div style={{ height: 40 }} />


                            </Paper>
                        </Grid>
                        <Grid item xs={12} lg={4} className="x1">
                            <Paper elevation={5} >
                                <img src={M15} className="img1" />
                                <h3>ระบบสนับสนุนสำหรับผู้เล่นใหม่</h3>
                                <div style={{ paddingLeft: "6%", paddingRight: "6%" }}>
                                    <p className="texts2">ระบบผู้ช่วยที่จะช่วยอำนวยความสะดวกในการเทรดและเพิ่มกำไรให้กับคุณ</p>
                                </div>
                                <div style={{ height: 40 }} />


                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div style={{ height: 30 }} />
            <div>
                <Container>
                    <h3>เกี่ยวกับเราทั้งหมด</h3>
                    <p className="texts2" style={{paddingRight:"0px",paddingLeft:"0px"}}>เว็บไซต์ GreenGraph เป็นเว็บไซต์ที่จะคอยให้บริการต่างๆเช่นข้อมูลหุ้นข้อมูลForexและระบบต่างๆที่พัฒนาให้ผู้ใช้ได้ลองเล่นและจะเป็นตัวช่วยให้คุณสร้างกำไรให้มากขึ้น
                        ซึ่งเว็บไซต์นี้เป็นหนึ่งในโปรเจคที่กำลังพัฒนาดังนั้นบางระบบอาจยังใช้งงานไม่ได้</p>
                    <Grid container className="AB2">
                        <Grid item xs={12} lg={6}>
                            <h2 className="AB">WELLCOME TO WEBSITE <br /> GET STARTED</h2>
                            <Button variant="outlined"
                                style={{
                                    border: "1px solid #db2531",
                                    padding: "10px 32px",
                                    color: "#db2531",
                                    marginLeft: "10px",
                                    fontWeight: "bolder"
                                }}
                            >Signup</Button>
                            <Button variant="contained"
                                style={{
                                    backgroundColor: "#db2531",
                                    padding: "10px 32px",
                                    marginLeft: "10px",
                                    fontWeight: "bolder"
                                }}>
                                Signin</Button>

                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <img src={M1} className="mid" />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div style={{ height: 70 }} />
            <div>

                <Buttonmenu />
            </div>
        </div>


    );
}

export default Index;