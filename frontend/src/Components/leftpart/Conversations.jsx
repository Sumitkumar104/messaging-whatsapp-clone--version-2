import { useState, useEffect, useContext } from 'react';
import { Box, styled, Divider } from '@mui/material';
import {AccountContext} from '../Contextapi/Accountprovider';

//components
import Singleuserdata from './Singleuserdata';
import { getuser } from '../Apiservice/api';



const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;
const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;




const Conversations =  () => {
    const [users, setUsers] = useState([]);       // it represents all users present in our users database in mongoDB .
    
    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let data = await getuser();         // it fetch all emails id which are added in our database and store in "Users".
            setUsers(data);                 
        }
        fetchData();
    }, [users]);

    useEffect(() => {
        socket.current.emit('addUser', account);      // set the connection of admin (account holder ) with socket.io
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <Component>
            {
                users && users.map((user, index) => (
                    user.sub !== account.sub && 
                        <>
                            <Singleuserdata user={user} />
                            {
                                users.length !== (index + 1)  && <StyledDivider />
                            }
                        </>
                ))
            }
        </Component>
    )
}

export default Conversations;