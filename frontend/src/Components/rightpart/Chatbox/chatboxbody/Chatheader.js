import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../../../Contextapi/Accountprovider';

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
    
const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})

const Name = styled(Typography)`
    margin-left: 12px !important;
`;



const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;
const emptyimage='https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png';
const Chatheader = ({person}) => {
    
        
    const url = person.picture||emptyimage;
    
    const { activeUsers } = useContext(AccountContext);

    return (
        <Header>
            <Image src={url} alt="display picture" />     
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>    
            </Box>   
        </Header>
    )
    
};

export default Chatheader;
