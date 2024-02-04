// Chatmessage.js
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Box, Container, styled } from "@mui/material";
import Chatfooter from './chatmessagebody/Chatfooter';
import Scrollchat from "./chatmessagebody/Scrollchat";
import { AccountContext } from '../../../Contextapi/Accountprovider';
import { sendmessageindatabase } from '../../../Apiservice/api';
import { getmessagefromdatabase } from '../../../Apiservice/api';
import {ChatMessageConfig} from '../../../../config';

const { backgroundUrl } = ChatMessageConfig;

const Wrapper = styled(Box)`
  background-image: url(${backgroundUrl});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

function Chatmessage({ person, conversation }) {
  const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);
  const [incomingMessage, setIncomingMessage] = useState(null);
  const [textt, settext] = useState('');
  const [messages, setmessages] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current.on('getMessage', data => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now()
      })
    })
  }, []);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getmessagefromdatabase(conversation?._id);
      setmessages(data);
    }
    getMessageDetails();
  }, [conversation?._id, person?._id, newMessageFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages]);

  useEffect(() => {
    incomingMessage && conversation?.members?.includes(incomingMessage.senderid) &&
      setmessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);

  const sendtext = async (e) => {
    const code = e.keyCode || e.which;

    if (code === 13) {
      let message = {
        senderid: account.sub,
        receiverid: person.sub,
        conversationid: conversation?._id,
        type: 'text',
        text: textt,
      }

      socket.current.emit('sendMessage', message);
      await sendmessageindatabase(message);
      settext('');
      setNewMessageFlag(state => !state)
    }
  }

  return (
    <Wrapper>
      <Component>
        {messages && messages.map(message => (
          <Container ref={scrollRef} key={message._id}>
            <Scrollchat message={message} />
          </Container>
        ))}
      </Component>
      <Chatfooter sendtext={sendtext} settext={settext} textt={textt} />
    </Wrapper>
  )
}

export default Chatmessage;
