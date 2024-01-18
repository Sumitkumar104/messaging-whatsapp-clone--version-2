import { createContext, useState } from 'react';

export const UserContext = createContext(null);

const UserProvider = ({children}) => {

    const [ person, setperson ] = useState({});     //  here Person represent the object  which contain the details of that user with which acount holder want to chat. 
    
    return (
        <UserContext.Provider value={{ person, setperson }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;