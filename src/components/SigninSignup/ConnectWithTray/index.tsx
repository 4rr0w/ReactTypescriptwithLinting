/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { CSSProperties, ReactNode } from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import styles from './styles.module.css';

export interface ConnectWithTrayProps {}

export const ConnectWithTray: React.FC<ConnectWithTrayProps> = ({}) => {
  return (
    <div className={styles.container}>
      <FaFacebook className={styles.fb} />
      <FcGoogle className={styles.google} />
      <GoMarkGithub className={styles.github} />
    </div>
  );
};
