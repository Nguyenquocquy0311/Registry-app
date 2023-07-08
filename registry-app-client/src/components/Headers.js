import React from 'react';
import '../style/Headers.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import News from './Pages/News';
// import Login from './Login';
import Footer from './Footer';

class Headers extends React.Component {
  render() {
    return (
      <div className='menu'>
        <div className='logo'>
          <a>LOGO</a>
        </div>
        <ul>
          <li><a href='/'><i className="fa-solid fa-house" />Home</a></li>
          <li><a href='/Services'><i className="fa-solid fa-pager"></i>Services</a></li>
          <li><a href='/News'><i className="fa-solid fa-newspaper"></i>News</a></li>
          <li><a href='/Contact'><i className="fa-solid fa-phone"></i>Contact</a></li>
          {/* <li><a href='/Login'><i className="fa-solid fa-right-to-bracket"></i></a></li> */}
        </ul>
      </div>
    )
  }
}

export default Headers;


