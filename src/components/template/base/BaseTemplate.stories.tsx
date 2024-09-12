import { Meta, StoryObj } from '@storybook/react';
import { JSX } from 'react';
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';

export default {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  tags: ['autodocs'],
  argTypes: {}
} as Meta<typeof BaseTemplate>;

type Story = StoryObj<typeof BaseTemplate>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Template: Story = {
  args: {} as JSX.IntrinsicAttributes & IBaseTemplate
};

// const Template: Story = (
//   args: JSX.IntrinsicAttributes & IBaseTemplate
// ) => <BaseTemplate {...args} />;

// export const Base = Template.bind({});

// Base.args = {
//   ...mockBaseTemplateProps.base
// } as IBaseTemplate;
