import * as React from 'react';
import '../App.css';
import Logo from '../Img/Logo.png';
import Greenlogo from '../Img/Greenlogo.png'
import TextField from '@mui/material/TextField';
import BGL from '../Img/BGL.png';
import Fb from '../Img/Fb.png';
import Google from '../Img/Google.png'


function Reset() {

    return (

        <div >
            <img src={BGL} className="BGL" />
            <div class="center" >

                <img src={Logo} className="imx" />
                <img src={Greenlogo} className="imx2" />

                <div style={{height:"30px"}}/>

                <div style={{ marginLeft: "25px" }}>
                    <h3>Reset Password</h3><br />
                    <p className='P1'>Enter your username
                        to change your password</p><br/>
                    <TextField id="standard-basic" label="Email" variant="standard" style={{ width: "90%" }} /><br /><br />
                    <div >
                        <button className="Btsignin">
                            Continue
                        </button><br />




                    </div>


                </div>


            </div>

        </div>
    );
}


export default Reset;