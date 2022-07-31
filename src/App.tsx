/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const wrapRouter = (Component: React.FC) => {
  const WrappedComponent: React.FC<{}> = () => (
    <Router>
      <Component />
    </Router>
  );
  return WrappedComponent;
};

function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      Hello
    </div>
  );
}

export default wrapRouter(App);
