import { Box, styled, Typography, Divider } from '@mui/material';

// Styled component for the main container
const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100%;
`;

// Styled component for the content container
const Container = styled(Box)`
    padding: 0 200px;
`;

// Styled component for the image
const Image = styled('img')({
    marginTop: 100,
    width: 400
});

// Styled component for the title
const Title = styled(Typography)`
    font-size: 32px;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
    margin-top: 25px 0 10px 0;
`;

// Styled component for the subtitle
const SubTitle = styled(Typography)`
    font-size: 14px;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
`;

// Styled component for the divider
const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
`;

// Default image URL
const imageurl = "https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg";

// Component for displaying an empty chat message
const EmptyChat = () => {
    return (
        <Component>
            <Container>
                <Image src={imageurl} alt="empty" />
                <Title>WhatsApp Web</Title>
                <SubTitle>Now send and receive messages without keeping your phone online.</SubTitle>
                <SubTitle>Use WhatsApp on up to 4 linked devices and 1 phone at the same time. </SubTitle>
                <StyledDivider />
            </Container>
        </Component>
    );
}

export default EmptyChat;
