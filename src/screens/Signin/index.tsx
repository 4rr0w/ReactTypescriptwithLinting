import React from 'react';
import { WrapperLayout } from '../../components/SigninSignup/WrapperLayout';
import { SignInPannel } from '../../components/SigninSignup/SignInPannel';

export interface SignInProps {}

export const SignIn: React.FC<SignInProps> = () => {
  return <WrapperLayout sidepannel={<SignInPannel />} />;
};
