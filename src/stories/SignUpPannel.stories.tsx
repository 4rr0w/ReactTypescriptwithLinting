/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import {
  SignUpPannel,
  SignUpPannelProps,
} from '../components/SigninSignup/SignUpPannel';

export default {
  title: 'components/SignUpPannel',
  component: SignUpPannel,
} as Meta;

const Template: Story<SignUpPannelProps> = (args) => <SignUpPannel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
