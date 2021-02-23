import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import {PersonaFormComponent}from './components/persona-form/persona-form.component';
import {PersonaListComponent}from './components/persona-list/persona-list.component';
import {SignupComponent}from './components/signup/signup.component'
import {SigninComponent}from './components/signin/signin.component'
//proteger ruta guard
import {AuthGuard} from './auth.guard'
const routes: Routes = [
  {
    path:'',
    redirectTo:'/personas',
    pathMatch:'full'
  },{
    path:'personas',
    component:PersonaListComponent,
    canActivate:[AuthGuard]
   
  },{
    path:'personas/add',
    component:PersonaFormComponent,
    canActivate:[AuthGuard]
  },{
    path:'personas/edit/:id',
    component:PersonaFormComponent
  },{
    path:'signup',
    component:SignupComponent
  },{
    path:'signin',
    component:SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
