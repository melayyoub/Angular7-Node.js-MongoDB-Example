import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginformComponent } from './shared/loginform/loginform.component';
import { AuthGuard } from './service/auth.guard';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';


const routes: Routes = [
  {
    path: '',
    component: LoginformComponent
  },
  {
    path: 'users/create',
    component: GstAddComponent
  },
  {
    path: 'edit/:id',
    component: GstEditComponent
  },
  {
    path: 'users',
    component: GstGetComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
