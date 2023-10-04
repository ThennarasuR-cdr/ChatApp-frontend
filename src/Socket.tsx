import React, { useState } from 'react'
import { socket } from './App';
import { useNavigate } from 'react-router';

const Socket = () => {
    const [name,setName] = useState("default");
    const navigate = useNavigate();

  return (
    <div>
        Name: <input 
            type='text'
            value={name} 
            onChange={(e)=>setName(e.target.value)}
            />
        <button onClick={()=>{
            socket.emit("connect_user",{
                userId: new Date().getMilliseconds().toString(),
                name: name
            });
            navigate('/chat');
        }}>
            Submit
        </button>
    </div>
  );
}

export default Socket;