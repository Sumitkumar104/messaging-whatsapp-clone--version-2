import {React,useEffect, useContext ,useState} from 'react'
import { UserContext } from '../Contextapi/Userprovider'
import { AccountContext } from '../Contextapi/Accountprovider';
import { setconversation } from '../Apiservice/api';
import { getconversation } from '../Apiservice/api';
import { styled, Box, Typography } from "@mui/material";


const formatDate = (date) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}


const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
`;
    
const Image = styled('img') ({
    width: 50,
    height: 50,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;



const emptypicture='https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png';

function Singleuserdata({user}) {


    const url = user.picture||emptypicture;
    const {setperson}=useContext(UserContext);
    const {account,newMessageFlag}=useContext(AccountContext);
    const [message, setMessage] = useState({});


    useEffect(() => {
      const getConversationMessage = async() => {
          const data = await getconversation({ senderid: account.sub, receiverid: user.sub });
          setMessage({ text: data?.message, timestamp: data?.updatedAt });
      }
      getConversationMessage();
  }, [newMessageFlag]);

  const getUser = async () => {
    setperson(user);
    await setconversation({ senderid: account.sub, receiverid: user.sub });
}


  return (
   
    <Component onClick={() => getUser()}>
    <Box>
        <Image src={url} alt="display picture" />
    </Box>
    <Box style={{width: '100%'}}>
        <Container>
            <Typography>{user.name}</Typography>
            { 
                message?.text && 
                <Timestamp>{formatDate(message?.timestamp)}</Timestamp>        
            }
        </Container>
        <Box>
            <Text>{message?.text}</Text>
        </Box>
    </Box>
</Component>
  )
}

export default Singleuserdata
