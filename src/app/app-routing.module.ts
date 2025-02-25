import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [{
  path: '',
  component:LoginComponent
},{
  path: 'home',
  component:HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}),BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
