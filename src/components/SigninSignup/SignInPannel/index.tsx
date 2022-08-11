/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { CustomInput } from '../../CustomInput';
import { CustomButton } from '../../CustomButton';
import { ConnectWithTray } from '../ConnectWithTray';
import AuthContext from '../../../context/AuthContext';

export interface SignInPannelProps {}

export const SignInPannel: React.FC<SignInPannelProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const { loginUser, user } = React.useContext(AuthContext);

  const onChangeUsername = (e: any) => {
    const userN = e.target.value;
    setUsername(userN);
  };
  const onChangePassword = (e: any) => {
    const pass = e.target.value;
    setPassword(pass);
  };

  return user ? (
    <>{navigate('/')}</>
  ) : (
    <div className={styles.container}>
      <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
        Welcome to Lorem
      </span>
      <span style={{}}>Lorem Ipsum</span>
      <div className={styles.signin}>
        <span style={{ fontSize: '25px', fontWeight: 'bold' }}>Sign in</span>
        <span>
          Do you have an accounr?{' '}
          <Link to="/signup" style={{ color: '#0066FF' }}>
            Sign up
          </Link>
        </span>
        <form onSubmit={loginUser}>
          <CustomInput
            className={styles.input}
            placeholder="Email *"
            type="text"
            value={username}
            onChange={onChangeUsername}
          />
          <CustomInput
            className={styles.input}
            placeholder="Password *"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          <span className={styles.forgot}>
            <span>
              <input style={{ background: 'black' }} type="checkbox" /> Remember
              me
            </span>
            <Link to="/forgotpassword" style={{ color: '#0066FF' }}>
              Forgot password?
            </Link>
          </span>
          <br />
          <CustomButton text="Sign in" type="submit" />
        </form>

        <br />
        <span style={{ alignSelf: 'center' }}>Or continue with</span>
        <br />
        <ConnectWithTray />
      </div>
    </div>
  );
};
