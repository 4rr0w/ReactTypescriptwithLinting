/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import {
  WrapperLayout,
  WrapperLayoutProps,
} from '../components/SigninSignup/WrapperLayout';
import { SignInPannel } from '../components/SigninSignup/SignInPannel';
import { SignUpPannel } from '../components/SigninSignup/SignUpPannel';
import { BrowserRouter, Router } from 'react-router-dom';

export default {
  title: 'components/WrapperLayout',
  component: WrapperLayout,
} as Meta;

const Template: Story<WrapperLayoutProps> = (args) => (
  <WrapperLayout {...args} />
);

export const SignIn = Template.bind({});
SignIn.args = {
  sidepannel: (
    <BrowserRouter>
      <SignInPannel />
    </BrowserRouter>
  ),
};

export const SignUp = Template.bind({});
SignUp.args = {
  sidepannel: (
    <BrowserRouter>
      <SignUpPannel />
    </BrowserRouter>
  ),
};
