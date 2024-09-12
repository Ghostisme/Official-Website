import { ComponentMeta, ComponentStory } from '@storybook/react';
import { JSX } from 'react';
import BaseTemplate, { IBaseTemplate } from './BaseTemplate';
import { mockBaseTemplateProps } from './BaseTemplate.mocks';

export default {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  argTypes: {}
} as ComponentMeta<typeof BaseTemplate>;

const Template: ComponentStory<typeof BaseTemplate> = (
  args: JSX.IntrinsicAttributes & IBaseTemplate
) => <BaseTemplate {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockBaseTemplateProps.base
} as IBaseTemplate;
