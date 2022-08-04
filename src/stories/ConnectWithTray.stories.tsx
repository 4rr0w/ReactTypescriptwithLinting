/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import {
  ConnectWithTray,
  ConnectWithTrayProps,
} from '../components/LoginSignUp/ConnectWithTray';

export default {
  title: 'components/ConnectWithTray',
  component: ConnectWithTray,
} as Meta;

const Template: Story<ConnectWithTrayProps> = (args) => (
  <ConnectWithTray {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
