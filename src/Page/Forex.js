import * as React from 'react';
import { Avatar, Container, Grid, Paper } from '@mui/material';
import '../App.css';
import { height } from '@mui/system';
import BGM5 from '../Img/Forexbg.jpg';
import MSD1 from '../Img/Stock.png';
import MSD2 from '../Img/MSD2.jpg';
import MSD3 from '../Img/MSD3.jpg';
import Logo from '../Img/Logow.png';
import Greenlogo from '../Img/GreenW.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import X2 from '../Img/Profile.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import Navebar from './Navebar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';




const theme = createTheme({
  palette: {
    secondary: {
      main: '#11cb5f',
    },
  },
});

function Forex() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className='BGColor'>


      <Navebar />

      <div className='zin '>



        <section class="showcase5 ">

          <img src={BGM5} className="im" />
          <div class="overlay"></div>
          <div className="maincon mainconforex">

            <div class="text textcom-forexai">

              <h2 className='font'>Forex และการแนะนำ</h2>

              <p className='font Fontsize-forex1'>
                แนะนำ Forex ที่น่าสนใจที่ทำให้คุณไม่ควรพลาด<ThumbUpIcon className='ThumbUpIcon'/></p>

            </div>

            <div style={{ height: "20px" }} />

            <ThemeProvider theme={theme}>

              <Box sx={{ bgcolor: 'background.paper' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  indicatorColor="secondary"
                  textColor="secondary"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable force tabs example"
                >
                  <Tab label="M1" />
                  <Tab label="M5" />
                  <Tab label="M15" />
                  <Tab label="M30" />
                  <Tab label="H1" />
                  <Tab label="H4" />
                  <Tab label="D1" />
                  <Tab label="W1" />
                  <Tab label="MN" />

                </Tabs>
              </Box>
            </ThemeProvider>

            <div style={{ height: "20px" }} />
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <div className="SelectColor">

                  <h3 className="font" style={{ color: "#00920f" }}>EURUSD</h3>
                  <div style={{ height: "20px" }} />
                  <div>
                    <img src={MSD1} className="im2" /><br /><br />
                  </div>
                  <h3 className="positiontext-forex font">แนะนำ<span className="font" style={{ marginLeft: "50%" }}>ราคา</span></h3>
                  <div style={{ height: "7px" }} />
                  <h3 className="positiontext-forex font">แนวโน้มการผันตัว</h3>

                </div>
              </Grid>

              <Grid item xs={12} lg={6}>

                <div className="SelectColor">

                  <h3 className="font" style={{ color: "#00920f" }}>EURUSD</h3>
                  <div style={{ height: "20px" }} />
                  <div>
                    <img src={MSD1} className="im2" /><br /><br />
                  </div>
                  <h3 className="positiontext-forex font">แนะนำ<span className="font" style={{ marginLeft: "50%" }}>ราคา</span></h3>
                  <div style={{ height: "7px" }} />
                  <h3 className="positiontext-forex font">แนวโน้มการผันตัว</h3>

                </div>

              </Grid>

              <Grid item xs={12} lg={6}>
                <div className="SelectColor">

                  <h3 className="font" style={{ color: "#00920f" }}>EURUSD</h3>
                  <div style={{ height: "20px" }} />
                  <div>
                    <img src={MSD1} className="im2" /><br /><br />
                  </div>
                  <h3 className="positiontext-forex font">แนะนำ<span className="font" style={{ marginLeft: "50%" }}>ราคา</span></h3>
                  <div style={{ height: "7px" }} />
                  <h3 className="positiontext-forex font">แนวโน้มการผันตัว</h3>

                </div>
              </Grid>

              <Grid item xs={12} lg={6}>
                <div className="SelectColor">

                  <h3 className="font" style={{ color: "#00920f" }}>EURUSD</h3>
                  <div style={{ height: "20px" }} />
                  <div>
                    <img src={MSD1} className="im2" /><br /><br />
                  </div>
                  <h3 className="positiontext-forex font">แนะนำ<span className="font" style={{ marginLeft: "50%" }}>ราคา</span></h3>
                  <div style={{ height: "7px" }} />
                  <h3 className="positiontext-forex font">แนวโน้มการผันตัว</h3>

                </div>
              </Grid>

              <Grid item xs={12} lg={6}>
                <div className="SelectColor">

                  <h3 className="font" style={{ color: "#00920f" }}>EURUSD</h3>
                  <div style={{ height: "20px" }} />
                  <div>
                    <img src={MSD1} className="im2" /><br /><br />
                  </div>
                  <h3 className="positiontext-forex font">แนะนำ<span className="font" style={{ marginLeft: "50%" }}>ราคา</span></h3>
                  <div style={{ height: "5px" }} />
                  <h3 className="positiontext-forex font">แนวโน้มการผันตัว</h3>

                </div>
              </Grid>




            </Grid>
          </div>



          <div style={{ height: "20px" }} />
        </section>
      </div>

    </div >

  );
}

export default Forex;