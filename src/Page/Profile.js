import * as React from 'react';
import { Avatar, Container, Grid, Paper } from '@mui/material';
import '../App.css';
import BGM5 from '../Img/BGM6.jpg';
import { Link } from 'react-router-dom';
import X2 from '../Img/Profile.jpg';
import Navebar from './Navebar';
import TextField from '@mui/material/TextField';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Button from '@mui/material/Button';

function Profile() {

  return (

    <div className='BGColor'>


      <Navebar />

      <div className='zin'>


        <section class="showcase3" >

          <img src={BGM5} className="imc" />


        </section>

        <div style={{ height: "30px" }} />

        <div className="maincon maincon2">

          <div >

            <Grid container>
              <Grid item xs={12} md={12} lg={12}>
                <div className='MBD'>
                  <Avatar style={{ width: "110px", height: "110px" }} className="MB2" src={X2}></Avatar>
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={12}  >
                <h2 className='NameSetting ' style={{marginTop:"-20px"}}>CHAKPHET WONGMANEE</h2>
              </Grid>
              <Grid item xs={12} md={12} lg={12} >
                <p className='EmailSetting ' style={{marginTop:"-2px"}}><MailOutlineIcon className='IconSetting' />
                  <span>King33130h@gmail.com</span></p>
              </Grid>
            </Grid>


          </div>


          <div style={{ height: "10px" }} />
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <div className="BG2" >
                <h3 className='font'>การตั้งค่าโปรไฟล์</h3>
                <p className="positiontext">จัดการชื่อและข้อมูลติดต่อของคุณ รายละเอียดส่วนตัวดังกล่าวเป็นความลับ และผู้ใช้รายอื่นจะไม่เห็นข้อมูลของคุณ</p>
                <div style={{ height: "10px" }} />


                <div style={{ height: "20px" }} />

                <p className='font'>เปลี่ยน Email</p><br />
                <TextField id="filled-basic" label="Email" variant="filled" className='MPP' /><br /><br />
                <Button variant="contained">ยืนยันการเปลี่ยนแปลง</Button>


              </div>
            </Grid>
          </Grid>
          <div style={{ height: "20px" }} />

          <div style={{ height: "10px" }} />
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <div className="BG2" >

                <h3 className='font'>ความปลอดภัย</h3>
                <p className="positiontext">เปลี่ยนรหัสผ่านใหม่เพื่อความปลอดภัยของบัญชีของคุณ</p>

                <div style={{ height: "20px" }} />
                <p className='font'>เปลี่ยนรหัสผ่าน</p>


                <div style={{ height: "20px" }} />


                <TextField id="filled-basic" label="Enter the password again." variant="filled" className='MPP' /><br /><br />
                <TextField id="filled-basic" label="Enter the password again." variant="filled" className='MPP' /><br /><br />
                <Button variant="contained">ยืนยันการเปลี่ยนแปลง</Button>


              </div>
            </Grid>
          </Grid>
          <div style={{height:"20px"}}/>
          <Link to="/" style={{textDecoration:"none"}}>
            <button variant="contained" className='Close'>ออกจากระบบ</button>
          </Link>
        </div>






        <div style={{ height: "150px" }} />
      </div>

    </div>

  );
}

export default Profile;