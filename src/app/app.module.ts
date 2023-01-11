import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { YesNoButtonGroupModule } from './shared/components/yes-no-button-group/yes-no-button-group.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, YesNoButtonGroupModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
