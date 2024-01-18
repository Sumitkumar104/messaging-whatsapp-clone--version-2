import React from 'react'
import { Box, styled, InputBase } from '@mui/material';


const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
    margin-left:60px;
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
`;

function Chatfooter({sendtext,settext,textt}) {

   
  return (
    <Container>
   
    <Search>
        <InputField
            placeholder="Type a message"
            onChange={(e) => settext(e.target.value)}     // here we copy the content of input field in settext 
            onKeyPress={(e) => sendtext(e)}   
            value={textt}             // after prrssing the key on keyboard call the function sendtext(e).
            
        />
    </Search>
    
</Container>
  )
}

export default Chatfooter
