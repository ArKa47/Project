import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Container, Button, Grid, Paper, TextField } from '@mui/material';
import '../Css/Index.css'
import '../Css/Login.css'
import { useEffect, useState } from 'react'


function Forgotpssword() {

    const [Login, setUser] = useState(0);

    if (Login === 0) {
        return (
            <div style={{ backgroundColor: "#22252a" }}>

                


                <Container style={{

                    height: "100vh",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"

                }}>

                    

                    <Paper

                        elevation={5}
                        style={{ padding: "5%", backgroundColor: "#eeeeee" }

                        }>


                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: 400,
                            minWidth: 400,

                        }}>




                            <div style={{ height: 20 }} />

                            <div style={{ textAlign: "center" }}>
                                <Typography variant="h5" >เปลี่ยนรหัสผ่าน</Typography>
                            </div>

                            <div style={{ height: 40 }} />

                            <Typography style={{ color: "#6d6f73" }}>กรอก Email ที่ใช้ในการสมัครเพื่อส่งโค้ดในการเปลี่ยนระหัสผ่านไปยัง Email ของคุณ</Typography>
                            <TextField label="Email" margin="normal" style={{ color: "#6d6f73" }} />

                            <div style={{ height: 20 }} />

                            <Button onClick={() => setUser(1)} style={{ color: "#ffffff", fontSize: "105%", backgroundColor: "#333333" }} variant="contained">
                                ยืนยัน
                            </Button>

                            <div style={{ height: 40 }} />

                            <Grid container>
                                <Grid item xs={12} style={{ textAlign: "center" }}>
                                    <Button href="/Forexweb"><Typography variant="h7" style={{ fontSize: "120%" }}>กลับไปหน้าหลัก</Typography></Button>
                                </Grid>

                            </Grid>
                        </div>
                    </Paper>
                    
                </Container>
            </div>

        );
    }

    else if (Login === 1) {
        return (

            <div style={{ backgroundColor: "#22252a" }}>

                <Container style={{

                    height: "100vh",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"

                }}>

                    <Paper

                        elevation={5}
                        style={{ padding: "5%", backgroundColor: "#eeeeee" }

                        }>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: 400,
                            minWidth: 400,

                        }}>


                            <div style={{ height: 20 }} />
                            <div style={{ textAlign: "center" }}>
                                <Typography variant="h5" >เปลี่ยนรหัสผ่าน</Typography>
                            </div>
                            <div style={{ height: 40 }} />
                            <Typography variant="h7" style={{ color: "#6d6f73" }}>กรอกโค้ดที่ได้จากEmailของท่าน</Typography>
                            <div style={{ height: 20 }} />
                            <Grid container spacing={1}>
                                <Grid item xs={3}>
                                    <TextField id="outlined-basic" variant="outlined" />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField id="outlined-basic" variant="outlined" />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField id="outlined-basic" variant="outlined" />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField id="outlined-basic" variant="outlined" />
                                </Grid>
                            </Grid>
                            <div style={{ height: 20 }} />
                            <Button onClick={() => setUser(4)} style={{ fontSize: "105%", backgroundColor: "#333333" }} variant="contained">
                                ยืนยัน
                            </Button>
                            <div style={{ height: 40 }} />
                        </div>
                    </Paper>
                </Container>

            </div>
        );
    }

    else if (Login === 4) {
        return (
            <div style={{ backgroundColor: "#22252a" }}>
                <Container style={{

                    height: "100vh",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"

                }}>

                    <Paper

                        elevation={10}
                        style={{ padding: "5%", backgroundColor: "#eeeeee" }

                        }>

                        <div style={{

                            display: "flex",
                            flexDirection: "column",
                            maxWidth: 400,
                            minWidth: 400

                        }}>
                            <div style={{ height: 20 }} />

                            <div style={{ textAlign: "center" }}>

                                <Typography variant="h5">สำเร็จแล้ว</Typography>
                            </div>

                            <p style={{ color: "#6d6f73" }}>เราได้ทำการเปลี่ยนรหัสผ่านของคุณเป็นที่เรียบร้อยแล้วกดตกลงเพื่อกลับไปยังหน้าหลัก</p>

                            <div style={{ height: 20 }} />

                            <Button href="/Forexweb" style={{ fontSize: "105%", backgroundColor: "#333333" }} variant="contained">
                                ตกลง
                            </Button>

                            <div style={{ height: 40 }} />

                            <Grid container>
                            </Grid>
                        </div>
                    </Paper>
                </Container>


            </div>
        );
    }


}

export default Forgotpssword