import { useState } from 'react'
// import ReactDOM from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ChatRoom from './Pages/ChatRoom'
import ChatList from './Pages/ChatList';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
            <Route path="chat" element={<ChatRoom/>}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path ="chatlist" element={<ChatList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
