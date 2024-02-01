import React, { useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { AccountContext } from '../../../Contextapi/Accountprovider';
import {ChatHeaderConfig} from '../../../../config'; 

const { defaultImageURL, onlineStatus, offlineStatus } = ChatHeaderConfig;

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
});

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

const emptyimage = defaultImageURL;

const Chatheader = ({ person }) => {
    const url = person.picture || emptyimage;
    const { activeUsers } = useContext(AccountContext);

    return (
        <Header>
            <Image src={url} alt="display picture" />     
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user => user.sub === person.sub) ? onlineStatus : offlineStatus}</Status>    
            </Box>   
        </Header>
    );
};

export default Chatheader;
