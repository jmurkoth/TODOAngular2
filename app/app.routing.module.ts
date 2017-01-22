import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactRoutes} from './contactus/contact.routes';
import {AboutRoutes} from './about/about.routes';
// Array of all the routes of the application

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AboutRoutes, ContactRoutes],
  exports: [RouterModule]
})
export class AppRoutingModule {}


