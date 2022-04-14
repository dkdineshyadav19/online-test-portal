import { Component, OnInit,Input } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';


@Component({
  selector: 'app-ques',
  templateUrl: './ques.component.html',
  styleUrls: ['./ques.component.css']
})
export class QuesComponent implements OnInit {
 
 public data:any=[];
 dis=false;
 totalMarks=0;
 yourAnswer='No Option Selected Yet'
 i=0;
 username="";
 
  constructor(public user:MyserviceService ) { 
    // console.log(this.i)
    const x=localStorage.getItem("Login");
    this.username=x;
    // console.log(x);
    this.user.getdata().subscribe(
      data=>{
        this.data=data;
        // console.warn(data)
        // console.log(this.data)
        // console.log(this.data[0]) 
        // console.log(this.data[0].name)
      },
    );
  }

  ngOnInit(): void {
  }
  CheckAnswer(i:number)
  {
    if(this.data[i].answer == this.yourAnswer)
    {
      this.totalMarks+=1;
    }
    else
    this.totalMarks+=0;
    // console.log(this.yourAnswer , this.totalMarks);
  }
  nextques()
  {
    if(this.i<10)
    {
     this.CheckAnswer(this.i);
    this.i+=1;
    this.yourAnswer='No Option Selected Yet'
    // console.log(this.i)
    }
    else
    {
     this.dis=true;
    }
  }
}
