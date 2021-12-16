import '../Css/Home.css'
import {  Container, Grid  } from '@mui/material';
import bgindex from "../Img/bgindex.jpg"
import WebIcon from '@mui/icons-material/Web';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TimelineIcon from '@mui/icons-material/Timeline';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import * as React from 'react';
import Bottonmenu from './Buttonmebu';
import MenubarHome from '../Page/MenubarHome';


function Home() {


    return (


        <div>

            <MenubarHome />


            <div>
                <img src={bgindex} style={{ height: "25em" }} className="bgindex" />
            </div>

            <div className="titlehome">

                <Container>
                    
                    <div style={{height:40}}/>

                    <h2 style={{ fontSize: "2.0em" }} >FUNCTION AND USAGE<span className="titlehome2">All-File/Funtion</span></h2>
                    
                </Container>
            </div>
            <div className="tap">
                <Container>
                    <div style={{ height: 30 }} />
                </Container>
            </div>

            <div style={{ height: 45 }} />
            <div>
                <Container>

                    <Grid container spacing={2} >
                        
                        <Grid item xs={6} md={4} lg={4} style={{ marginTop: "1%" }} >
                        <a>
                            <div className="eliment">
                                <div style={{ textAlign: "center" }}>
                                    <WebIcon style={{ fontSize: "50px" }} className="TimelineIcon1" />
                                </div>
                                <h3 variant="h6" style={{ fontWeight: "bolder" }}>ONESTOCKDATA- SERVICE WEB </h3>
                                <p className="title1">รวมข้อมูลข่าวสารของหุ้นและFoxrex แบบเบร็จเสร็จในที่เดียว</p>
                            </div>
                            </a>
                        </Grid>
                        

                        <Grid item xs={6} md={4} lg={4} style={{ marginTop: "1%" }}>
                            <a href="/Forexweb/forex">
                            <div className="eliment">
                                <div style={{ textAlign: "center" }}>
                                    <EqualizerIcon style={{ fontSize: "50px" }} className="TimelineIcon1" />
                                </div>
                                <h3 variant="h6" style={{ fontWeight: "bolder" }}>FOREX ที่น่าสนใจและการแนะนำ</h3>
                                <p className="title1">อันดับและการแนะนำของFOREXที่น่าสนใจที่จัดลำตามสถิติ</p>

                            </div>
                            </a>
                        </Grid>

                        <Grid item xs={6} md={4} lg={4} style={{ marginTop: "1%" }}>
                            <div className="eliment">
                                <div style={{ textAlign: "center" }}>
                                    <TimelineIcon style={{ fontSize: "50px" }} className="TimelineIcon1" />
                                </div>
                                <h3 variant="h6" style={{ fontWeight: "bolder" }}>ระบบผู้ช่วยเล่น AI Forex</h3>
                                <p className="title1">ระบบผู้ที่จะช่วยสร้างกำไรได้มากขึ้นด้วยBotที่ออกแบบโดยเว็บไซต์เรา</p>

                            </div>
                        </Grid>

                        <Grid item xs={6} md={4} lg={4} className="item1" style={{ marginTop: "1%" }}>
                            <div className="eliment">
                                <DeveloperBoardIcon style={{ fontSize: "50px" }} className="TimelineIcon1" />
                                <h3 variant="h6" style={{ fontWeight: "bolder" }}>MUDUlE ที่ 4</h3>
                                <p className="title1">เป็นระะบบที่อยู่ระหว่างการพัฒนา</p>

                            </div>
                        </Grid>

                        <Grid item xs={6} md={4} lg={4} className="item1" style={{ marginTop: "1%" }}>
                            <div className="eliment">
                                <DeveloperBoardIcon style={{ fontSize: "50px" }} className="TimelineIcon1" />
                                <h3 variant="h6" style={{ fontWeight: "bolder" }}>MUDUlE ที่ 4</h3>
                                <p className="title1">เป็นระะบบที่อยู่ระหว่างการพัฒนา</p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={4} lg={4} className="item1" style={{ marginTop: "1%" }}>
                            <div className="eliment">
                                <DeveloperBoardIcon style={{ fontSize: "50px" }} className="TimelineIcon1" />
                                <h3 variant="h6" style={{ fontWeight: "bolder" }}>MUDUlE ที่ 4</h3>
                                <p className="title1">เป็นระะบบที่อยู่ระหว่างการพัฒนา</p>
                            </div>
                        </Grid>

                        <Grid item xs={6} md={4} lg={4} className="item1" style={{ marginTop: "1%" }}>
                            <div className="eliment">
                                <DeveloperBoardIcon style={{ fontSize: "50px" }} className="TimelineIcon1" />
                                <h3 variant="h6" style={{ fontWeight: "bolder" }}>MUDUlE ที่ 4</h3>
                                <p className="title1">เป็นระะบบที่อยู่ระหว่างการพัฒนา</p>

                            </div>
                        </Grid>

                    </Grid>

                </Container>

            </div>

            <div style={{ height: 100 }} />

            <div>
                <Bottonmenu />
            </div>


        </div>
    );
}

export default Home