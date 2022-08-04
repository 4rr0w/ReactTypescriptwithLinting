/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { CSSProperties, ReactNode } from 'react';
import { Button, ButtonProps } from '@mui/material';
import styles from './styles.module.css';

export interface CustomButtonProps extends ButtonProps {
  backgroundColor?: string;
  className?: string;
  width?: string;
  block?: boolean;
  textcolor?: string;
  text?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  backgroundColor = 'rgba(255, 255, 255, 0.98)',
  textcolor = 'rgba(0,0,0,1)',
  block = false,
  className = '',
  width = '100%',
  text = 'button',
  ...props
}) => {
  return (
    <Button
      className={styles.customButton}
      style={{ width, color: textcolor, backgroundColor }}
      {...props}
    >
      {text}
    </Button>
  );
};
