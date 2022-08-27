import { VILLAIN_ENVIRONMENT } from './villains.token';
import { VillainEnvironment } from './villains.model';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(
    environment: VillainEnvironment
  ): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: VILLAIN_ENVIRONMENT,
          useValue: environment,
        },
      ],
    };
  }
}
