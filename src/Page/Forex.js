import '../Css/Forex.css'
import { AppBar, Box, Toolbar, Typography, IconButton, Container, Button, Grid, Paper, TextField } from '@mui/material';
import * as React from 'react';
import ForexAll from './ForexAll';
import axios from 'axios';
import { useState, useEffect } from 'react'
import Bottonmenu from './Buttonmebu';
import MenubarHome from '../Page/MenubarHome';
import bgindex from "../Img/bgindex.jpg"

function Forex() {




    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [age, setAge] = React.useState('');

    const Change = (event) => {
        setAge(event.target.value);
    };


    return (

        <div className="font">



            <MenubarHome />


            <div>
                <img src={bgindex} style={{ height: "12em" }} className="bgindex" />
            </div>

            <div className="titlehome">

                <Container>

                    <div style={{ height: 40 }} />

                    <h2 style={{ fontSize: "2.0em" }} >FOREX RANKINGS</h2>

                </Container>
            </div>
            <div className="tap">
                <Container>
                    <div style={{ height: 30 }} />
                </Container>
            </div>

            <div style={{ height: 10 }} />

            <Container style={{}}>



                <h3 style={{ fontWeight: "inherit" }}>การจัดอันดับ Forex นี่จัดโดยเว็บไซต์เราโดยใช้ผลจากสถิติย้อนหลังของหุ้นแต่ละตัวนำมาเรียงลำดับในแต่ละทรามเฟรมเพื่อเป็นอีกทางเลือกหนึ่งสำหรับการประกอบการตัดสินใจของคุณ</h3>
                <div style={{ marginTop: 30 }} />

                <ForexAll />


            </Container>

            <div style={{ marginTop: 93 }} />

            <Bottonmenu />


        </div>


    );
}

export default Forex;