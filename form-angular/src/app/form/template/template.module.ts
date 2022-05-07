import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TemplateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TemplateModule { }
