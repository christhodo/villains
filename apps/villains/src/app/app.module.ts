import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VillainsComponent } from './villains/villains.component';
import { VillainsListComponent } from './villains/villains-list/villains-list.component';
import { VillainDetailsComponent } from './villains/villain-details/villain-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    VillainsComponent,
    VillainsListComponent,
    VillainDetailsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
