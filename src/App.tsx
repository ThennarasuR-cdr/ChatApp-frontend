import {io} from 'socket.io-client';
import './App.css';
import Socket from './Socket';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Chat from './components/Chat';

export const socket = io("http://localhost:3000");

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/chat' element={<Chat/>} />
        <Route path='/' element={<Socket/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
