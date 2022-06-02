import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'storybook-ui-testing-fancy-button',
  template: ` <p>fancy-button works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FancyButtonComponent {}
