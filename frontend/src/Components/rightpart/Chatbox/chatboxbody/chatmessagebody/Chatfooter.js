import React from 'react';
import { Box, styled, InputBase } from '@mui/material';
import {ChatFooterConfig} from '../../../../../config';

const { inputPlaceholder } = ChatFooterConfig;
// Styled components for styling the Chatfooter component
const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  border-radius: 18px;
  background-color: #FFFFFF;
  width: calc(94% - 100px);
  margin-left: 60px;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  font-size: 14px;
  height: 20px;
  width: 100%;
`;

// Functional component representing the chat footer
function Chatfooter({ sendtext, settext, textt }) {
  return (
    <Container>
      {/* Search box styling */}
      <Search>
        {/* Input field for typing the message */}
        <InputField
          placeholder={inputPlaceholder}
          onChange={(e) => settext(e.target.value)} // Update the text in the state when input changes
          onKeyPress={(e) => sendtext(e)} // Trigger the sendtext function when a key is pressed
          value={textt} // The current value of the input field
        />
      </Search>
    </Container>
  );
}

export default Chatfooter;
