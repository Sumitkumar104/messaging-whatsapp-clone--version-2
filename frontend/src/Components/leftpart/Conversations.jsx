import { useState, useEffect, useContext } from 'react';
import { Box, styled, Divider } from '@mui/material';
import { AccountContext } from '../Contextapi/Accountprovider';

// Components
import Singleuserdata from './Singleuserdata';
import { getuser } from '../Apiservice/api';
import Accountinfo from './Accountinfo';

// Styled component for the main container
const Component = styled(Box)`
    overflow: overlay;
    height: 88vh;
`;

// Styled component for the divider
const StyledDivider = styled(Divider)`
    margin: 0 0 0 80px;
    background-color: #e9edef;
    opacity: .7;
`;
// Component for displaying conversations
const Conversations = () => {
    const [users, setUsers] = useState([]); // Represents all users present in the users database.
    const { account, socket, setActiveUsers } = useContext(AccountContext);

    // Fetch user data from the API on component mount or when users state changes
    useEffect(() => {
        const fetchData = async () => {
            let data = await getuser();
            setUsers(data);
        }
        fetchData();
    }, [users]);

    // Set up socket.io connection when the account changes
    useEffect(() => {
        socket.current.emit('addUser', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <>
        <Accountinfo/>
        <Component>
            {
                users && users.map((user, index) => (
                    user.sub !== account.sub && // If the user is not the current account, display the conversation
                        <>
                            <Singleuserdata user={user} />
                            {
                                users.length !== (index + 1) && <StyledDivider />
                            }
                        </>
                ))
            }
        </Component>
        </>
    )
}

export default Conversations;
