import '../Css/Home.css'
import { Typography, Container, Grid  } from '@mui/material';
import * as React from 'react';

function Buttonmenu() {
    return (


        <div style={{ backgroundColor: "#f8f7f6", height: "100px", padding: "1.5%",color:"#111111" }}>
            <Container  >
                <Grid container >
                    <Grid item  lg={6} xs={6}>
                        <Typography variant="h7" style={{ fontWeight: "bolder" }}>Green Graph</Typography>

                    </Grid>
                    <Grid item lg={2} xs={6}>
                        <Typography variant="h7">เกี่ยวกับเรา</Typography>
                    </Grid>
                    <Grid item lg={2} xs={6}>
                        <Typography variant="h7">ช่องทางการติดต่อ</Typography>
                    </Grid>

                    <Grid item lg={2} xs={6}>
                        <Typography variant="h7">ข้อกำหนดการใช้งาน</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>


    );
}


export default Buttonmenu;