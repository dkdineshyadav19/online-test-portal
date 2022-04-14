import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor ( private rout:Router) { }
  username="";
  ngOnInit(): void {
  }
  StartTest()
  {
    if(this.username == "")
    {
      alert("ENTER YOUR FULL NAME");
      this.rout.navigate(['']);
    
    }
    else
    {
    console.log(this.username);
    localStorage.setItem("Login",this.username);
    this.rout.navigate(['/ques']);
    }
  }
}
