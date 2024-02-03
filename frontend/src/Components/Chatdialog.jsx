import React, { useContext } from 'react'
import { Dialog, styled, Box, AppBar } from '@mui/material';

// Components
import Conversations from './leftpart/Conversations';
import EmptyChat from "./rightpart/Emptybox/emptychat"
import ChatBox from './rightpart/Chatbox/ChatBox.js';
import { UserContext } from './Contextapi/Userprovider';

// Styled components for styling the Chatdialog component
const Component = styled(Box)`
    display: flex;
`;

const LeftComponent = styled(Box)`
    min-width: 450px;
`;

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

// Style for the Dialog component
const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
};

const Componentforback = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const Header = styled(AppBar)`
  background-color: #00a884;
  height: 125px;
  box-shadow: none;
`;

// Functional component representing the Chatdialog
function Chatdialog() {
    const { person } = useContext(UserContext);

    return (
        <Componentforback>
            <Header>
        <Dialog
            open={true}
            BackdropProps={{ style: { backgroundColor: 'unset' } }}
            PaperProps={{ sx: dialogStyle }}
            maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                    <Conversations /> {/* Left part (Conversations component) */}
                </LeftComponent>

                <RightComponent>
                    {Object.keys(person).length ? <ChatBox /> : <EmptyChat />} {/* Right part (ChatBox or EmptyChat based on whether there's a selected user) */}
                </RightComponent>
            </Component>
        </Dialog>
        </Header>
        </Componentforback>
    )
}

export default Chatdialog;
