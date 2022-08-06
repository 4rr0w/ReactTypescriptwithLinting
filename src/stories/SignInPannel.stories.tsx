/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import {
  SignInPannel,
  SignInPannelProps,
} from '../components/SigninSignup/SignInPannel';

export default {
  title: 'components/SignInPannel',
  component: SignInPannel,
} as Meta;

const Template: Story<SignInPannelProps> = (args) => <SignInPannel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
