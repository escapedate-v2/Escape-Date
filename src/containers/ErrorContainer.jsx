import React, { Component } from 'react';
import ErrorPage from '../components/errorPage/ErrorPage.jsx';

class ErrorContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='error-page-container'>
        <ErrorPage />
      </div>
    )
  }
}

export default ErrorContainer;