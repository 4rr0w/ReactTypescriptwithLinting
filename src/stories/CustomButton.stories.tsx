/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { CustomButton, CustomButtonProps } from '../components/CustomButton';

export default {
  title: 'components/CustomButton',
  component: CustomButton,
} as Meta;

const Template: Story<CustomButtonProps> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};
