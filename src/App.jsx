
import Footer from './HomePage-Components/Footer';
import Navbar from './HomePage-Components/Navbar';
import Home from './pages/Home.jsx';
import SearchP from './pages/SearchP.jsx';
import SignUp from './pages/SignUp.jsx';
import profile from './pages/profile.jsx';
import log_in from './pages/LogIn.jsx';



const App = () => {
  console.log(window.location.pathname)
  let Page
  switch(window.location.pathname){
    case "/":
      Page = SearchP
      break
      case "/Search":
      Page = Home
      break
      case "/SignUp":
      Page = SignUp
      break
      case "/Profile":
        Page = profile
        break
      case "/add_book":
        Page = add_book
        break
      case "/LogIn":
        Page = log_in
        break
  }
  if(Page === SignUp || Page === log_in){
    return(<Page />)
  }
  else{
  return (

    <div className='App'>
      <Navbar />
      <Page />
      <Footer />
    </div>
  );
}

}

export default App;


