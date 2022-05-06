import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './form/template/template.component';
import { DataFormComponent } from './form/data-form/data-form.component';

const routes: Routes = [
  {path:'templateForm', component:TemplateComponent},
  {path:'dataForm', component:DataFormComponent},
  {path:'', redirectTo:'templateForm', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
