import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DummycomponentComponent } from './dummycomponent/dummycomponent.component';
import { StepComponent } from './step/step.component';
import { NgosComponent } from './ngos/ngos.component';
import { AdminComponent } from './admin/admin.component';

const routes:Routes = [
  { path:'step', component:StepComponent},
  { path:'ngos', component:NgosComponent},
  { path:'admin', component:AdminComponent},
  { path:'criteria', component:DummycomponentComponent},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
