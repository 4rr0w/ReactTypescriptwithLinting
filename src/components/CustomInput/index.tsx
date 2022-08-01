/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { CSSProperties, ReactNode } from 'react';
import classnames from 'classnames';
import { Input, InputProps } from '@mui/material';
import styles from './styles.module.css';

export interface CustomInputProps extends InputProps {
  placeholder?: string;
  backgroundColor?: string;
  className?: string;
  width?: string;
  containerStyle?: CSSProperties;
  onFocusColor?: string;
  error?: boolean;
  textcolor?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  placeholder = '',
  error = false,
  backgroundColor = 'rgba(0, 0, 0, 0.98)',
  textcolor = 'rgba(255,255,255, 1)',
  className = '',
  width = '100%',
  containerStyle = {},
  onFocusColor = '#fff',

  ...props
}) => {
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  return (
    <div
      className={classnames(styles.inputContainer, className)}
      style={{
        ...containerStyle,
        backgroundColor,
        border: `1px solid ${focused ? onFocusColor : backgroundColor}`,
      }}
    >
      <Input
        disableUnderline
        placeholder={placeholder}
        className={styles.input}
        style={{ width, color: textcolor }}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
    </div>
  );
};
