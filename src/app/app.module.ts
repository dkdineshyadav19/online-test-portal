import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './MyComponent/quiz/quiz.component';
import { QuesComponent } from './MyComponent/ques/ques.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './MyComponent/user/user.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuesComponent,
    UserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
