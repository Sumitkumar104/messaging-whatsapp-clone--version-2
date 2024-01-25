import React, { useContext, useEffect } from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Chatdialog from "./Chatdialog";
import { AccountContext } from "./Contextapi/Accountprovider";
import Signinpage from "./Authpage_v2_component/signinpage";

const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const Header = styled(AppBar)`
  background-color: #00a884;
  height: 125px;
  box-shadow: none;
`;


const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    //  if account exist then redirect to chat page else signin page
    account ? (
      <>
        <Component>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <Chatdialog />
        </Component>
      </>
    ) : (
      <>
        <Signinpage />
      </>
    )
  );
};

export default Messenger;

