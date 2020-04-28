import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from '../routes';
import '../styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
