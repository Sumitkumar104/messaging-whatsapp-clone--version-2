// import React from 'react'
// import "./Authpage.css";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Card,
//   CardContent,
//   Grid,
// } from "@mui/material";

// import logo from "./images/whatsapplogo1.jpg";
// import logo1 from "./images/scannerphoto.jpg";
// // import menu from "./images/menu.png";
// // import setting from "./images/settinglogo.png";
// const menu = "";
// const setting = "";

// let style = {
//   flexGrow: 1,
// };
// let style1 = {
//   height: "230px",
//   backgroundColor: "#00a884",
//   boxShadow: "none",
// };

// function signupfunction() {
//   const text = document.getElementById("login");
//   text.style.display = "none";
//   document.getElementById("signup-btn").style.display = "none";
//   const text2 = document.getElementById("signup");
//   text2.style.display = "block";
// }


// export default function Authpage() {
//   return (
//     <Box sx={style}>
//     <AppBar position="sticky" sx={style1}>
//       <Toolbar>
//         <Box className="nav-items">
//           <img className="Logo" src={logo} alt="logo" />
//           <h4 className="title">WHATSAPP WEB</h4>
//         </Box>
//         {/* code for card */}
  
//         <Card className="card">
//           <CardContent>
//             {/* Inside card code for top part of card */}
  
//             <Grid container spacing={{ xm: 1, md: 1, lg: 2 }} id="grid">
//               <Grid item xm={3.6} lg={1.8} md={2.7}>
//                 <img id="pic" src={logo1} alt="logo" />
//               </Grid>
//               <Grid item xm={6.7} lg={7.7} md={6.3}>
//                 <div>
//                   <p id="description">Download WhatsApp for Windows</p>
//                   <p id="info">
//                     Get calling, screen sharing and a faster experience with
//                     the new Windows app.
//                   </p>
//                 </div>
//               </Grid>
//               <Grid item xm={1.7} lg={2.5} md={3}>
//                 <button id="btn">
//                   <a
//                     target="_blank"
//                     id="link"
//                     rel="noreferrer"
//                     href="https://www.whatsapp.com/download"
//                   >
//                     Get the app
//                   </a>
//                 </button>{" "}
//               </Grid>
//             </Grid>
  
//             {/* login part */}
  
//             <Grid container spacing={{ xm: 1, md: 1, lg: 5 }} id="grid1">
//               <Grid item xm={6} lg={7} md={7.5}>
//                 <p id="title3">Use Whatsapp on your computer</p>
//                 <ol id="list1">
//                   <li className="list">Open WhatsApp on your phone</li>
//                   <li className="list">
//                     Tap{" "}
//                     <span className="bold">
//                       Menu <img id="menu" src={menu} alt="menu" />
//                     </span>{" "}
//                     or <span className="bold">Settings </span>
//                     <img id="settings" src={setting} alt="settings" /> and Select
//                     <span className="bold"> Linked Devices</span>{" "}
//                   </li>
//                   <li className="list">
//                     Tap on <span className="bold">Link a device</span>
//                   </li>
//                   <li className="list">
//                     Point your phone to this screen to capture the QR code
//                   </li>
//                 </ol>
//               </Grid>
//               <Grid item xm={6} lg={5} md={3.5}>
//                 <div id="login">
//                   <form>
//                     <input
//                       className="email"
//                       type="email"
//                       placeholder="Enter your Email"
//                     ></input>
//                     <input
//                       className="password"
//                       type="password"
//                       placeholder="Enter your password"
//                     ></input>
//                   </form>
  
//                   <button className="submit" id="login-btn" type="submit">
//                     Login
//                   </button>
//                 </div>
//                 <p className="create_acc">To create Account</p>
//                 <button
//                   className="submit"
//                   id="signup-btn"
//                   type="submit"
//                   onClick={signupfunction}
//                 >
//                   Sign Up
//                 </button>
//                 <div id="signup">
//                   <form>
//                     <input
//                       className="username"
//                       type="text"
//                       placeholder="Enter your name"
//                     ></input>
//                     <input
//                       className="email"
//                       type="email"
//                       placeholder="Enter your Email"
//                     ></input>
//                     <input
//                       className="password"
//                       type="password"
//                       placeholder="Enter your password"
//                     ></input>
//                     <input
//                       className="password"
//                       type="password"
//                       placeholder="Confirm your password"
//                     ></input>
//                   </form>
//                   <button className="submit" id="submit-btn" type="submit">
//                     Submit
//                   </button>
//                 </div>
//               </Grid>
//             </Grid>
  
//             {/* Divider div for dividing login part tutorial part */}
  
//             <div id="divider"></div>
//           </CardContent>
  
//           {/* Link with your phone number */}
//           <div className="linkwithno">or link your phone number</div>
  
//           {/* Tutorial part of the code */}
//           <div className="Tutorial">
//             <h2 id="T-title">Tutorial</h2>
//             <a
//               id="help"
//               target="_blank"
//               rel="noreferrer"
//               href="https://faq.whatsapp.com/1317564962315842/?cms_platform=web&lang=en"
//             >
//               Need help to get started?
//             </a>
//             <video id="video" controls>
//               <source src="" type="video/mp4" />
//             </video>
//           </div>
  
//           {/* end of card */}
//         </Card>
//       </Toolbar>
//     </AppBar>
//   </Box>
  
//   );
// }


// // import { adduser } from '../services/api'
// // when user click on sign up button then  we call the adduser function
// // const clickhandlerforsignup= async (data)={
// //     await adduser(data);

// // show a pop up which contain user is successfully created login with same details and redirect to sign in page.
// // }




import { useContext } from 'react';
import { Dialog, Typography, List, ListItem, Box, styled } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode as decode } from "jwt-decode";

import { AccountContext } from './Contextapi/Accountprovider';
import { adduser } from './Apiservice/api';

const Component = styled(Box)`
    display: flex; 
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
    marginTop: '12%',
    height: '95%',
    width: '60%',
    maxWidth: '100',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}



function Authpage() {

  const { setAccount,showloginButton, setShowloginButton, setShowlogoutButton } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    let decoded = decode(res.credential);
    setAccount(decoded);
    setShowloginButton(false);
    setShowlogoutButton(true);
    await adduser(decoded);
};

const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
};

const QRCOde = styled('img')({
    margin: '50px 0 0 50px',
    height: 264,
    width: 264
});

const qrCodeImage='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';

  return (
//     <Dialog
//     open={true}
//     BackdropProps={{style: {backgroundColor: 'unset'}}}
//     maxWidth={'md'}
//     PaperProps={{ sx: dialogStyle }}
// >
//     <Component>
//         <Container>
//             <Title>To use WhatsApp on your computer:</Title>
//             <StyledList>
//                 <ListItem> login through email id </ListItem>
//                 <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem> 
//                  <ListItem>3. Point your phone to this screen to capture the code</ListItem>
//             </StyledList>
//         </Container>
//         * <Box style={{position:'relative'}}>
//             <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)'}}>
//                 { showloginButton ?
//                     <GoogleLogin
//                         buttonText=""
//                         onSuccess={onLoginSuccess}
//                         onError={onLoginFailure}
//                     /> : null}
//             </Box> 
//              { showloginButton ?
//                     <GoogleLogin
//                         buttonText=""
//                         onSuccess={onLoginSuccess}
//                         onError={onLoginFailure}
//                     /> : null}
//          </Box> 
//     </Component>
// </Dialog>
<Dialog
open={true}
BackdropProps={{style: {backgroundColor: 'unset'}}}
maxWidth={'md'}
PaperProps={{ sx: dialogStyle }}
>
<Component>
    <Container>
        <Title>To use WhatsApp on your computer:</Title>
        <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
        </StyledList>
    </Container>
    <Box style={{position:'relative'}}>
        <QRCOde src={qrCodeImage} alt="QR Code" />
        <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)'}}>
            { showloginButton ?
                <GoogleLogin
                    buttonText=""
                    onSuccess={onLoginSuccess}
                    onError={onLoginFailure}
                /> : null}
        </Box>
    </Box>
</Component>
</Dialog>
      
    
  )
}

export default Authpage
