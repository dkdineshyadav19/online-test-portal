import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuesComponent } from './MyComponent/ques/ques.component';
import { QuizComponent } from './MyComponent/quiz/quiz.component';
import { UserComponent } from './MyComponent/user/user.component';

const routes: Routes = [
   {
    path:'',
    component:QuizComponent
    
   },
  // {
  //   path:'quiz',
  //   component:QuizComponent
  // },
  {
    path:'ques',
    component:QuesComponent
  },
  // {
  //   path:'user',
  //   component:UserComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
