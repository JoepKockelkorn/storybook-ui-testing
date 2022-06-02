import { Component, ChangeDetectionStrategy } from '@angular/core';

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
  readonly colors = ['#1e7145', '#ee1111', '#2d89ef'];
  colorIndex = 0;

  onClick(): void {
    const nextIndex = this.colorIndex + 1;
    const maxIndex = this.colors.length - 1;
    this.colorIndex = nextIndex > maxIndex ? 0 : nextIndex;
  }
}
