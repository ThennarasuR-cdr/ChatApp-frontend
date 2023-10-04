import React, { useEffect, useState } from 'react'
import { socket } from '../App';

interface message {
    from: string,
    content: string,
    time: string
}

interface User{
    [key:string]:{
        name:string,
        userId:string
    }
}

const Chat = () => {
    const [users,setUsers] = useState<User>({});
    const [message,setMessage] = useState("");
    const [messages,setMessages] = useState<message[]>([]);

    useEffect(()=>{
        socket.on("update_users_list",(data)=>{
            setUsers(data);
        });
        socket.on("send_messages_list",(data)=>{
            setMessages(data);
        })
    },[]);

    const handleSend = () =>{
        socket.emit("send_message",{
            message: message,
        });
        setMessage("");
    }

  return (
    <div>
        <div>
            {
                Object.values(users).map((user,index)=>{
                    return <div key={index}>
                        {
                        user?.name
                        }
                        </div>
                })
            }
        </div>
        <div>
            <>
            {
                messages.map((message,index)=>{
                    return <div key={index}>
                        {users[message.from]?.name}
                        <br/>
                        {message.time}
                        <br/>
                        {message.content}
                        </div>
                })
            }
            </>
            <div>
                <input 
                type='text'
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Chat