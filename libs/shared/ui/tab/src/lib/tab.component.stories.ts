import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { TabComponent } from './tab.component';

export default {
  title: 'TabComponent',
  component: TabComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TabComponent>;

const Template: Story<TabComponent> = (args: TabComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.play = async ({ canvasElement }) => {
  const root = within(canvasElement);

  const p = root.getByText(/tab/);
  expect(p).toBeTruthy();
};
