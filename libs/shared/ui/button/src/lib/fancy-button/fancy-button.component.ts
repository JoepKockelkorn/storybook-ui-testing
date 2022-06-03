import { Component, ChangeDetectionStrategy } from '@angular/core';

export const colors = [
  'rgb(30, 113, 69)',
  'rgb(238, 17, 17)',
  'rgb(45, 137, 239)',
];

@Component({
  selector: 'storybook-ui-testing-fancy-button',
  template: `<button
    [style.background]="colors[colorIndex]"
    (click)="onClick()"
  >
    My fancy button 🦄
  </button>`,
  styles: [
    `
      button {
        padding: 0.5em 1em;
        color: white;
        font-size: 16px;
        border: 1px solid;
        cursor: pointer;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FancyButtonComponent {
  readonly colors = colors;
  colorIndex = 0;

  onClick(): void {
    const nextIndex = this.colorIndex + 1;
    const maxIndex = this.colors.length - 1;
    this.colorIndex = nextIndex > maxIndex ? 0 : nextIndex;
  }
}
