import react from 'react';
import './index.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import StartHere from "./components/StartHere.jsx";
import Teams from "./components/Teams.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Home from "./components/Home.jsx";

function App() {

  return (
    <>
        < Navbar />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path='/get-started' element = {<StartHere />} />
        <Route path='/teams' element = {<Teams />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/signup' element = {<Signup />} />
      </Routes>
    </>
  )
}

export default App
