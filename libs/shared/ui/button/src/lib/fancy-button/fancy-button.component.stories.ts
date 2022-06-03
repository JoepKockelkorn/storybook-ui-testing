import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { within, userEvent } from '@storybook/testing-library';

import { colors, FancyButtonComponent } from './fancy-button.component';

export default {
  title: 'FancyButtonComponent',
  component: FancyButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<FancyButtonComponent>;

const Template: Story<FancyButtonComponent> = (args: FancyButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.play = async ({ canvasElement }) => {
  const root = within(canvasElement);

  let button = root.getByRole('button');
  expect(button).toHaveStyle({ backgroundColor: colors[0] });

  userEvent.click(button);
  button = root.getByRole('button');
  expect(button).toHaveStyle({ backgroundColor: colors[1] });

  userEvent.click(button);
  button = root.getByRole('button');
  expect(button).toHaveStyle({ backgroundColor: colors[2] });

  // circle back to first color
  userEvent.click(button);
  button = root.getByRole('button');
  expect(button).toHaveStyle({ backgroundColor: colors[0] });
};
