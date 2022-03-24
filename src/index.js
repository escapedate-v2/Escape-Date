import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from './store';
import styles from './stylesheets/style.scss'
import LoginContainer from './containers/LoginContainer.jsx';
import SignUpContainer from './containers/SignUpContainer.jsx';
import DateContainer from './containers/DateContainer.jsx';
import DateInstance from './components/datePage/DateInstance.jsx';
import ErrorContainer from './containers/ErrorContainer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from '../Images/Axolotl.png';


render(
  <Provider store={store}>
    <CookiesProvider>
      <div className='container'>
        <div className='logo'><img src={logo} alt='Logo' /></div>
        <h1>Escape Date</h1>
        <Router>
          <Routes>
            <Route path='/' element={<LoginContainer />} />
            <Route path='/newUser-Contacts' element={<SignUpContainer />} />
            <Route path='/newDate' element={<DateContainer />} />
            <Route path='/errorPage' element={<ErrorContainer />} />
          </Routes>
        </Router>
      </div>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);
