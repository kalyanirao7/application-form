import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDataComponent } from './app-data/app-data.component';
import { AppFormComponent } from './app-form/app-form.component';

const routes: Routes = [
  { path: '', component: AppFormComponent },
  { path: 'appdata', component: AppDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
