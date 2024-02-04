import React from 'react'
import { styled, Box, Typography } from "@mui/material";
import { DefaultPictureURL } from '../../config';
import { useContext } from 'react';
import { AccountContext } from '../Contextapi/Accountprovider';

// Styled components for UI elements
const Component = styled(Box)`
  height: 25px;
  display: flex;
  padding: 13px 0; 
  cursor: pointer;
  background: #215C54;
`;

const Image = styled('img')({
    width: 30,
    height: 30,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
  });
  
  const Container = styled(Box)`
    
    
    display: flex;
  `;



function Accountinfo() {
   
    const {account}=useContext(AccountContext);

  return (
    <Component>
      <Box>
        <Image src={DefaultPictureURL} alt="display picture" />
      </Box>
   
      <Box style={{ width: '100%' }}>
        <Container>
          <Typography style={{ color: 'white' }} >{account?.name} - Welcome to WhatsApp!</Typography>
        </Container>
      </Box>
    </Component>
      )
}

export default Accountinfo
