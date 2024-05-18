import React, { useEffect, useState } from 'react';
import Footer from './HomePage-Components/Footer';
import Navbar from './HomePage-Components/Navbar';
import Home from './pages/Home.jsx';
import SearchP from './pages/SearchP.jsx';
import SignUp from './pages/SignUp.jsx';
import Profile from './pages/profile.jsx';
import LogIn from './pages/LogIn.jsx';
// import NotFoundPage from './pages/NotFoundPage.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  let Page;
  switch(currentPage) {
    case "/":
      Page = Home ;
      break;
    case "/Search":
      Page = SearchP;
      break;
    case "/SignUp":
      Page = SignUp;
      break;
    case "/Profile":
      Page = Profile;
      break;
    case "/add_book":
      Page = AddBook; // Make sure to define/import AddBook
      break;
    case "/LogIn":
      Page = LogIn;
      break;
    default:
      Page = NotFoundPage; // Fallback for undefined routes
  }

  const isAuthPage = Page === SignUp || Page === LogIn;

  return (
    <div className='App'>
      {!isAuthPage && <Navbar />}
      <Page />
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default App;
