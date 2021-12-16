import * as React from 'react';
import {  Box, Toolbar, Typography, Container, Button, Grid, TextField } from '@mui/material';
import '../Css/Index.css'
import logo from '../Img/logo.png'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import G from '../Img/G.png'
import f1 from '../Img/f1.png'
import '../Css/Login.css'

function Menubarindex() {

    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
        setOpen2(true);
        setOpen1(false);
    };

    const handleClose2 = () => {
        setOpen2(false);
        
    };


    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (


        <div>

            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{textAlign:"center"}}>
                        <h3 variant="h5" >ลงชื่อเข้าใช้</h3>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" className="signin" style={{

                            display: "flex",
                            flexDirection: "column",
                            maxWidth: 400,
                            

                        }}>

                            <TextField label="Username" margin="normal" />
                            <TextField type="password" label="Password" margin="normal" />
                            <div style={{ height: 20 }} />

                            <Button variant="contained" href="/Forexweb/home" style={{ 
                                fontSize: "105%",
                                backgroundColor:"#333333",
                               
                                }}>
                                เข้าใช้งาน
                            </Button>

                            
                            <div style={{ height: 20 }} />

                            <hr style={{width:"100%",textAlign:"left",marginLeft:0}} /> 

                            <div style={{ height: 10 }} />
                            <Grid container spacing={1}>
                                <Grid item xs={6} style={{ textAlign: "center" }}>
                                    <Button variant="contained" style={{width:"100%",backgroundColor:"#ffffff",color:"#111111"}}><img src={G} className="imgj1"/>Google</Button>
                                </Grid>
                                <Grid item xs={6} style={{ textAlign: "center" }}>
                                    <Button variant="contained" style={{width:"100%",backgroundColor:"#3b5998"}}><img src={f1} className="imgj1"/>Facebook</Button>
                                </Grid>

                            </Grid>

                            <div style={{ height: 10 }} />

                            <Grid container>
                      

                                <Grid item xs={12} style={{ textAlign: "center" }}>
                                    <Button href="/Forexweb/Forgotpssword"><p className="Boutton1">คุณลืมรหัสใช่ไหม?</p></Button>
                                </Grid>

                            </Grid>
                       

                        </DialogContentText>
                    </DialogContent>


                </Dialog>
            </div>

            <div>
                <Dialog
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{textAlign:"center"}}>
                        <h3 variant="h5" >สร้างบัญชี</h3>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description"  className="signin" style={{

                            display: "flex",
                            flexDirection: "column",
                            maxWidth: 400,
                          

                        }}>

                            <TextField type="text" label="Username" margin="normal" />
                            <TextField type="password" label="Password" margin="normal" />
                            <TextField type="password" label="Confirm password" margin="normal" />
                            <TextField type="text"label="Email" margin="normal" />
                            <div style={{ height: 20 }} />

                            <Button variant="contained"  onClick={handleClickOpen2} style={{ 
                                fontSize: "105%",
                                backgroundColor:"#333333"
                                }}>
                                ยืนยัน
                            </Button>

                            

                            <div style={{ height: 50 }} />

                        </DialogContentText>
                    </DialogContent>


                </Dialog>
            </div>

            <div>
                <Dialog
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{textAlign:"center"}}>
                        <h3 variant="h5" >สำเร็จแล้ว</h3>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description"  className="signin" style={{

                            display: "flex",
                            flexDirection: "column",
                            maxWidth: 400,
                       

                        }}>


                            <Button variant="contained" href="/Forexweb" style={{ 
                                fontSize: "105%",
                                backgroundColor:"#333333"
                                }}>
                                ยืนยัน
                            </Button>

                            

                            <div style={{ height: 50 }} />

                        </DialogContentText>
                    </DialogContent>


                </Dialog>
            </div>

            <Box sx={{ flexGrow: 1 }} className="pdmenu">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img src={logo} className="logo" />
                        </Typography>
                        <Button variant="outlined"  onClick={handleClickOpen1} className="gg"
                            style={{
                                border: "1px solid #db2531",
                                padding: "10px 32px",
                                color: "#db2531",
                                marginLeft: "10px",
                                fontWeight: "bolder"
                            }}
                        >Signup</Button>
                        <Button variant="contained" onClick={handleClickOpen}
                            style={{
                                backgroundColor: "#db2531",
                                padding: "10px 32px",
                                marginLeft: "10px",
                                marginRight:"-25px",
                                fontWeight: "bolder",
                            }}>
                            Signin</Button>
                    </Toolbar>
                </Container>
            </Box>
        </div>
    );
}

export default Menubarindex;