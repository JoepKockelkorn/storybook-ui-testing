import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FancyButtonComponent } from './fancy-button.component';

export default {
  title: 'FancyButtonComponent',
  component: FancyButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FancyButtonComponent>;

const Template: Story<FancyButtonComponent> = (args: FancyButtonComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}