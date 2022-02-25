import * as React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import '../App.css';
import { height } from '@mui/system';
import BGM5 from '../Img/BGM6.jpg';
import MSD1 from '../Img/MSD1.jpg';
import MSD2 from '../Img/MSD2.jpg';
import MSD3 from '../Img/MSD3.jpg';
import Logo from '../Img/Logo.png';
import Greenlogo from '../Img/Greenlogo.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <div>

      <div className='Navebar zinx'>
        <div>
          <img src={Logo} className="Logo " />
          <img src={Greenlogo} className="Logoindex " />
        </div>

        <Link to="/Index/Login" className='linklogin'>
          <button className='Button1'>

            <div >


              <p style={{ position: "relative", top: "-5px" }}><PersonOutlineIcon className="Personicon"
               /> SIGN IN </p>

            </div>

          </button>
        </Link>




      </div>
      <section class="showcase">
        
        <img src={BGM5} className="im" />
        <div class="overlay"></div>
        <div class="text">
          <h2>Start trading </h2>
          <h3>and enjoy new things.</h3>
          <p>
          Increase your income anywhere with our services.</p>
          <a href="#">Get started</a>
        </div>


      </section>


      

      <div className="maincon">
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4}>
            <div className="BGX" style={{borderRadius:"0px"}}>

              <img src={MSD1} className="im2" /><br /><div style={{height:"10px"}}/>
              <h3 className='font size'>รวมข้อมูลข่าวสารของหุ้น</h3>
              <p className="positiontext font">มีบริการข้อมูลข่าวสารของหุ้นครบวงจรเพื่อช่วยให้คุณตัดสินใจในการซื้อขายหุ้นหรือ Forex ได้ดีขึ้น</p>

              <p className="positiontext positiontext2">GET STARTED  {">"}</p>

            </div>
          </Grid>

          <Grid item xs={12} lg={4}>

            <div className="BGX" style={{borderRadius:"0px"}} >
              <img src={MSD2} className="im2" /><br />
              <div style={{height:"10px"}}/>
              <h3 className='font size'>เพิ่มการตัดสินใจในการซื้อขายของคุณ</h3>
              <p className="positiontext font">มีระบบการแนะนำในการซื้อขายค่าเงิน Forex และบริการข้อมูลหุ้นที่จะช่วยการตัดสินใจในการซื้อขายของคุณให้ดีขึ้น</p>

              <p className="positiontext positiontext2">GET STARTED {">"}</p>

            </div>
          </Grid>

          <Grid item xs={12} lg={4} >
            <div className="BGX" style={{borderRadius:"0px"}}>
              <img src={MSD3} className="im2" /><br /><div style={{height:"10px"}}/>
              <p><h3 className='font size'>ระบบ Ai ช่วยเทรด</h3>
                <p className="positiontext font">มีระบบการเทรดด้วย Ai เพื่ออำดวยความสะดวกให้กับคุณทำให้คุณสามารถเข้าถึงการเทรดได้ทุกที่ทุกเวลา</p>

                <p className="positiontext positiontext2">GET STARTED  {">"}</p></p>
            </div>
          </Grid>
        </Grid>

      </div>

      <div style={{ height: "50px" }} />

    </div>



  );
}

export default Index;