import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './HomePage-Components/Footer';
import Navbar from './HomePage-Components/Navbar';
import Home from './pages/Home.jsx';
import SearchP from './pages/SearchP.jsx';
import SignUp from './pages/SignUp.jsx';
import Profile from './pages/profile.jsx';
import LogIn from './pages/LogIn.jsx';

const App = () => {
  return (
    <Router >
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/Search" element={< SearchP/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
