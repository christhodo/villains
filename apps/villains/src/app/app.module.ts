import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VillainsComponent } from './villains/villains.component';
import { VillainsListComponent } from './villains/villains-list/villains-list.component';
import { VillainDetailsComponent } from './villains/villain-details/villain-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@villains/material';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@villains/environment';
import { UiLoginModule } from '@villains/ui-login';
import { CoreDataModule } from '@villains/core-data';
import { CoreStateModule } from '@villains/core-state';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    VillainsComponent,
    VillainsListComponent,
    VillainDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RoutingModule,
    EnvironmentModule.withEnvironment(environment),
    UiLoginModule,
    CoreDataModule,
    CoreStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
