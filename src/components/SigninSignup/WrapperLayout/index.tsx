/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { CSSProperties, ReactNode } from 'react';
import styles from './styles.module.css';
import posterImg from '../../../static/poster.jpg';

export interface WrapperLayoutProps {
  sidepannel: ReactNode;
}

export const WrapperLayout: React.FC<WrapperLayoutProps> = ({ sidepannel }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img alt="" className={styles.poster} src={posterImg} />
      </div>
      <div className={styles.pannel}>{sidepannel}</div>
    </div>
  );
};
