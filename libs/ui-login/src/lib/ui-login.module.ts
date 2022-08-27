import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildComponent } from './wild/wild.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@villains/material';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [WildComponent, LoginComponent, ToolbarComponent],
  exports: [WildComponent, LoginComponent, ToolbarComponent],
})
export class UiLoginModule {}
