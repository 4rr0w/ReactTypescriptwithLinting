/* eslint-disable react/no-children-prop */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import './App.css';
import { Dashboard } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignIn } from './screens/Signin';
import { SignUp } from './screens/Signup';
import PrivateRoute from './utils/PrivateRoute';
import AuthProvider from './context/AuthContext';

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
    <div className="App">
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        <Route element={<SignIn />} path="/signin" />
        <Route element={<SignUp />} path="/signup" />
      </Routes>
    </div>
  );
}

export default wrapRouter(App);
