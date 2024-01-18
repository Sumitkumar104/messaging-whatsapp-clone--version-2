
// this is same as message

import React, { useContext } from 'react'
import { Box, styled, Typography } from '@mui/material';
import { AccountContext } from '../../../../Contextapi/Accountprovider';



const Wrapper = styled(Box)`
    background: #FFFFFF;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Own = styled(Box)`
    background: #dcf8c6;
    padding: 5px;
    max-width: 60%;
    width: fit-content;
    margin-left: auto;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`;

const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    margin-top: 6px;
    word-break: keep-all;
    margin-top: auto;
`;

const formatDate = (date) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}


function Scrollchat({ message }) {


  const { account } = useContext(AccountContext);

  return (
    <>
      {
        account.sub === message.senderid ?
          <Own>
            {
             <TextMessage message={message} />
            }
          </Own>
          :
          <Wrapper>
            {
              <TextMessage message={message} />
            }
          </Wrapper>
      }

    </>
  )
}
const TextMessage = ({ message }) => {
    
  return (
      <>
          <Text>{message.text}</Text>
          <Time>{formatDate(message.createdAt)}</Time>
      </>
  )
}

export default Scrollchat
