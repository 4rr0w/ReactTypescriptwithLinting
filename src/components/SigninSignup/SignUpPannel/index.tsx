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

export interface SignUpPannelProps {}

export const SignUpPannel: React.FC<SignUpPannelProps> = ({}) => {
  return (
    <div className={styles.container}>
      <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
        Welcome to Lorem
      </span>
      <span style={{}}>Lorem Ipsum</span>
      <div className={styles.signup}>
        <span style={{ fontSize: '25px', fontWeight: 'bold' }}>Sign up</span>
        <span>
          Already have an accounr?{' '}
          <Link to="/signup" style={{ color: '#0066FF' }}>
            Sign in
          </Link>
        </span>
        <CustomInput
          className={styles.input}
          placeholder="Display name*"
          type="text"
        />

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
        <CustomInput
          className={styles.input}
          placeholder="Confirm Password *"
          type="password"
        />
        <span className={styles.forgot}>
          <span>
            <input style={{ background: 'black' }} type="checkbox" /> I agree to
            the Terms of Services and Privacy Policy
          </span>
        </span>
        <br />
        <CustomButton text="Create your free account" />
      </div>
    </div>
  );
};
