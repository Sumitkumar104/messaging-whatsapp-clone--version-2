import React, { useContext, useEffect } from 'react'
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import Chatdialog from './Chatdialog';
import { AccountContext } from './Contextapi/Accountprovider';
import Signinpage from './Authpage_v2_component/signinpage';


const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
    background: #00bfa5;
    height: 200px;
    box-shadow: none;
`;

const Messenger = () => {


    const { account } = useContext(AccountContext);

    return (


        account ?
            <>
                <Component>

                    <Header>
                        <Toolbar></Toolbar>
                    </Header>
                    <Chatdialog />

                </Component>
            </>
            :
            <>
               <Signinpage/>
            </>





    )
}

export default Messenger;


/* <LoginHeader>
                <Toolbar></Toolbar>
            </LoginHeader> */
/* <Authpage_v2 /> */
/* <Authpage /> */