import * as React from 'react';
import '../App.css';
import Avatar from '@mui/material/Avatar';
import Logo from '../Img/Logo.png';
import Greenlogo from '../Img/Greenlogo.png'
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import X2 from '../Img/Profile.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import '../Navbar.css';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import DnsIcon from '@mui/icons-material/Dns';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';


function Navebar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  return (

    <div>

      <>
        <IconContext.Provider value={{ color: '#fff' }}>

          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'  onClick={showSidebar} >

              <div style={{ height: "100px" }} />
              <div>
                <Link to="/Index/Profile" className='Hoverline'>
                  <button className='bbt Nix'><Avatar src={X2} style={{width:"37px",height:"37px"}}>H</Avatar><h3 className="dot2">Chakphet</h3><div><h2 className="dot">...</h2></div></button>
                </Link>
              </div>
              <div style={{ height: "10px" }} />
              <Link to="/Index/Home" className='Hoverline'>
                <div >
                  <button className='bbt Nix Nix2'><h3 className="dot3">Home</h3></button>
                </div>
              </Link>

              <div>
                <hr className='line'/>

                
                <p className='All-Services'><h4>All Services</h4></p>
                <div className='Services'>
                  <Link to="/Index/Home" style={{ textDecoration: "none" }}><p className='font ser1 hover-services'><DnsIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>บริการข่าวสารหุ้น</span></p></Link>
                  <Link to="/Index/Forex" style={{ textDecoration: "none" }}><p className='font ser1 hover-services' style={{ marginTop: "-15px" }}><EqualizerIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>Forexและการแนะนำ</span></p></Link>
                  <Link to="/Index/Forexai" style={{ textDecoration: "none" }}><p className='font ser1 hover-services' style={{ marginTop: "-15px" }}><SmartToyIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>Ai Forex</span></p></Link>
                  <Link to="/Index/Home" style={{ textDecoration: "none" }}><p className='font ser1 hover-services' style={{ marginTop: "-15px" }}><AutoAwesomeMotionIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>บริการเพิ่มเติม</span></p></Link>
                  <Link to="/Index/Home" style={{ textDecoration: "none" }}><p className='font ser1 hover-services' style={{ marginTop: "-15px" }}><AutoAwesomeMotionIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>บริการเพิ่มเติม</span></p></Link>
                  <Link to="/Index/Home" style={{ textDecoration: "none" }}><p className='font ser1 hover-services' style={{ marginTop: "-15px" }}><AutoAwesomeMotionIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>บริการเพิ่มเติม</span></p></Link>
                  <Link to="/Index/Home" style={{ textDecoration: "none" }}><p className='font ser1 hover-services' style={{ marginTop: "-15px" }}><AutoAwesomeMotionIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>บริการเพิ่มเติม</span></p></Link>


                </div>


              </div>


            </ul>
          </nav>

        </IconContext.Provider>

      </>

      <div className='Navebar zinx' >

        <div >
        <button className='MB' onClick={showSidebar}><MenuIcon /></button>
          <img src={Logo} className=" x10" />
          <img src={Greenlogo} className="LogoHome" />

        </div>

        <div>
        
          <button className='bbt bbt2'><Avatar src={X2}>H</Avatar></button>
          <Link to="/Index/Profile" className='Hoverline'>
            <button className='bbt bbt3'><SettingsIcon /></button>
          </Link>
          <Link to="/" className='PDX'>
            <button className='Button5'>
              <div >
                <p style={{ position: "relative", top: "6px", width: "60px", height: "30px" }}> LOG OUT </p>
              </div>
            </button>
          </Link>
        </div>
      </div>

    </div>

  );
}

export default Navebar;