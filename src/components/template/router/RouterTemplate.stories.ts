import { Meta, StoryObj } from '@storybook/react';

import RouterTemplate from './RouterTemplate';

const meta: Meta<typeof IRouterTemplate> = {
  component: RouterTemplate
};
export default meta;

type Story = StoryObj<typeof IRouterTemplate>;

// If you have the actions addon,
// you can interact with the links and see the route change events there
export const Example: Story = {
  parameters: {
    nextjs: {
      router: {
        pathname: '/profile/[id]',
        asPath: '/profile/1',
        query: {
          id: '1'
        }
      }
    }
  }
};
