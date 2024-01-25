
// this is same as messages

// this is our part which show below the Chat header
import React, { useContext, useState, useEffect, useRef } from 'react'
import { Box, Container, styled } from "@mui/material";
import Chatfooter from './chatmessagebody/Chatfooter';
import Scrollchat from "./chatmessagebody/Scrollchat";
import { AccountContext } from '../../../Contextapi/Accountprovider';
import { sendmessageindatabase } from '../../../Apiservice/api';
import { getmessagefromdatabase } from '../../../Apiservice/api';

const Wrapper = styled(Box)`
     background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
   
`;

const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;



function Chatmessage({ person, conversation }) {

    const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);
    const [incomingMessage, setIncomingMessage] = useState(null);
    const [textt, settext] = useState('');    // sane as [vlaue , setvalue].   it reprersent the text enter in footer input field .
    const [messages, setmessages] = useState([]);  // this object which contain messages .

    const scrollRef = useRef();

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, []);


    // this render when conversation id or person id or messages object change and fetch the chat from backend through the getmessagefromdatabase.
    useEffect(() => {
        const getMessageDetails = async () => {
            // console.log("qwerty",conversation)
            let data = await getmessagefromdatabase(conversation._id);
            
            setmessages(data);
        }
        getMessageDetails();
    }, [conversation._id, person._id, newMessageFlag]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [messages]);



    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderid) &&
            setmessages((prev) => [...prev, incomingMessage]);

    }, [incomingMessage, conversation]);

    // const receiverId = conversation?.members?.find(member => member !== account.sub);


    // here sendtext is a function which take text from the footer and send it in 'testt'
    const sendtext = async (e) => {
        const code = e.keycode || e.which;

        // if user press the enter key its keycode is 13.
        if (code === 13) {
            let message = {
                senderid: account.sub,
                receiverid: person.sub,
                conversationid: conversation._id,
                type: 'text',
                text: textt,

            }

            socket.current.emit('sendMessage', message);

            console.log(message);
            await sendmessageindatabase(message);     // send the message in database with the help of API define in function sendmessageindatabase.
            settext('');                   // set the text as empty after sending it .
            setNewMessageFlag(state => !state)    // toggle the state .

        }

    }

    return (
        <Wrapper>

            <Component>
                {
                    messages && messages.map(message => (     /* extracting messages from database and putting in the components */
                        <Container ref={scrollRef} >
                            <Scrollchat message={message} />
                        </Container>

                    ))
                }

            </Component>
            <Chatfooter sendtext={sendtext} settext={settext} textt={textt} />
        </Wrapper>
    )
}

export default Chatmessage
