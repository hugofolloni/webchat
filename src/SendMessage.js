import React, { useState } from "react"
import TextareaAutosize from 'react-textarea-autosize';

const SendMessage = () => {

    const [ username, setUsername ] = useState("");
    const [ message, setMessage ] = useState("");

    const appendMessage = (e) => {
        if(username === ""){
            window.alert("You can't send messages with an empty username!")
        }
        else if(message === ""){
            window.alert("You can't send empty messages!")
        }
        else{
            e.preventDefault();
            const singleMessage = { username, message }
            fetch('http://localhost:8000/messages', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(singleMessage)
            })
            .then(() => {
                console.log("Task added")
            })
            setMessage("");
        }
    }

    return (
        <div className="sendmessage-div">
            <input type="text" placeholder="Your username" className="username-input-field" value = { username } onChange = { (e) => setUsername(e.target.value) }/>
            <TextareaAutosize placeholder="Your message" minRows='3' maxRows='3' className="message-input-field" value = { message } onChange = { (e) => setMessage(e.target.value) }/>
            <button onClick={ appendMessage }>Send</button>
        </div>
     );
}
 
export default SendMessage;