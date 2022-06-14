import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedUiButtonModule } from '@storybook-ui-testing/shared/ui/button';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, SharedUiButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
