/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { CSSProperties, ReactNode } from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import styles from './styles.module.css';
import { CustomInput } from '../../CustomInput';
import { CustomButton } from '../../CustomButton';
import { ConnectWithTray } from '../ConnectWithTray';
import { Link } from 'react-router-dom';

export interface SignInPannelProps {}

export const SignInPannel: React.FC<SignInPannelProps> = ({}) => {
  return (
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

        <CustomInput
          className={styles.input}
          placeholder="Email *"
          type="email"
        />
        <CustomInput
          className={styles.input}
          placeholder="Password *"
          type="password"
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
        <CustomButton text="Sign in" />
        <br />
        <span style={{ alignSelf: 'center' }}>Or continue with</span>
        <br />
        <ConnectWithTray />
      </div>
    </div>
  );
};
