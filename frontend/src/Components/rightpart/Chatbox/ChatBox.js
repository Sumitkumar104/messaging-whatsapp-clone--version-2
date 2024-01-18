import React, { useEffect, useState } from 'react'
import Chatheader from './chatboxbody/Chatheader'
import Chatmessage from './chatboxbody/Chatmessage'
import { Box } from '@mui/material';
import { UserContext } from '../../Contextapi/Userprovider';
import { AccountContext } from '../../Contextapi/Accountprovider';
import { useContext } from 'react';
import { getconversation } from '../../Apiservice/api';



function ChatBox() {

  const { person } = useContext(UserContext);
  const { account } = useContext(AccountContext);



  const [data, setdata] = useState({});


  // here "data" represent the data as modelschema conversationschema.js 
  useEffect(() => {
    const getconversationdetails = async () => {

      let dataa = await getconversation({ senderid: account.sub, receiverid: person.sub })
      // console.log(dataa);
      setdata(dataa);
    }
    getconversationdetails();
    // },[account.sub,person.sub]);
  }, [person.sub]);

  return (
    <Box style={{ height: '75%' }}>

      <Chatheader person={person} />
      <Chatmessage person={person} conversation={data} />
    </Box>
  )
}

export default ChatBox
