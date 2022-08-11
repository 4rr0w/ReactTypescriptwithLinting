import React from 'react';
import { WrapperLayout } from '../../components/SigninSignup/WrapperLayout';
import { SignUpPannel } from '../../components/SigninSignup/SignUpPannel';

export interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = () => {
  return <WrapperLayout sidepannel={<SignUpPannel />} />;
};
