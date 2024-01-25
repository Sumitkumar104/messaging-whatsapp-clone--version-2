import React, { useContext } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { AccountContext } from '../../../../Contextapi/Accountprovider';

// Styled components for styling the Scrollchat component
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

// Function to format the date into HH:mm format
const formatDate = (date) => {
  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};

// Functional component representing the text message
const TextMessage = ({ message }) => {
  return (
    <>
      <Text>{message.text}</Text>
      <Time>{formatDate(message.createdAt)}</Time>
    </>
  );
};

// Functional component representing the scroll chat
function Scrollchat({ message }) {
  const { account } = useContext(AccountContext);

  return (
    <>
      {
        // Check if the message sender is the account holder, display the message on the right side
        account.sub === message.senderid ?
          <Own>
            {
              // Render the TextMessage component with the message details
              <TextMessage message={message} />
            }
          </Own>
          :
          // If the message sender is not the account holder, display the message on the left side
          <Wrapper>
            {
              // Render the TextMessage component with the message details
              <TextMessage message={message} />
            }
          </Wrapper>
      }
    </>
  );
}

export default Scrollchat;
