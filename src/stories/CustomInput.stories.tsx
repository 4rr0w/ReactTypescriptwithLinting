/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import '../App.css';
import { CustomInput, CustomInputProps } from '../components/CustomInput';

export default {
  title: 'components/CustomInput',
  component: CustomInput,
} as Meta;

const Template: Story<CustomInputProps> = (args) => <CustomInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onFocusColor: 'rgba(255, 215, 20, 1)',
  placeholder: 'Placeholder',
};
