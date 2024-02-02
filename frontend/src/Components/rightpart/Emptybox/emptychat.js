import { Box, styled, Typography, Divider } from '@mui/material';
import {EmptyChatConfig} from '../../../config'; 

const {
    image,
    title,
    subtitle1,
    subtitle2
  } = EmptyChatConfig;

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

// Component for displaying an empty chat message
const EmptyChat = () => {
    return (
        <Component>
            <Container>
                <Image src={image}  alt="empty" />
                <Title>{title}</Title>
                <SubTitle>{subtitle1}</SubTitle>
                <SubTitle>{subtitle2}</SubTitle>
                <StyledDivider />
            </Container>
        </Component>
    );
}

export default EmptyChat;
