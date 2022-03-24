import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import LoginContainer from '../src/containers/LoginContainer.jsx';
import store from '../src/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

//build a login container 
// within login container, we'll have our username/password fields, login and sign up buttons
//Make unit test for react componenets
describe('Unit testing for React components', () => {

  describe('login screen tests', () => {

    //want to test and ensure that it renders the username field
    test('Ensure that username field is rendered', async () =>{
      render(
        <Provider store={store}>
          <Router>
            <LoginContainer/>
          </Router>
        </Provider>
      );
      const userName = await screen.getByLabelText('username')
      expect(userName).toBeTruthy()
    });

    //ensure that app renders the password field
    test('Ensure that password field is rendered', async () =>{
      render(
        <Provider store={store}>
          <Router>
            <LoginContainer/>
          </Router>
        </Provider>
      );
      const password = await screen.getByLabelText('password')
      expect(password).toBeTruthy()
    });
    
    let buttons;
    //ensure that app renders the log in button
    test('Ensure that login button is rendered', async () =>{
      render(
        <Provider store={store}>
          <Router>
            <LoginContainer/>
          </Router>
        </Provider>
      );
      const login = await screen.getByLabelText('login')
      expect(login).toBeTruthy()
    });

    //ensure that we are rendering the sign up button
    test('Ensure that the sign up button is rendered', async () => {
      render(
        <Provider store={store}>
          <Router>
            <LoginContainer/>
          </Router>
        </Provider>
      );
      const SignUpButton = await screen.getByLabelText('SignUpButton')
      expect(SignUpButton).toBeTruthy()
    })
  })
})