import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  {
    path:"todos",
    component:TodosComponent
  },
  
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
