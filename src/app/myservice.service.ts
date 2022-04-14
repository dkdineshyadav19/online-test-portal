import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { 
    
  }
  url="assets/question.json";
    getdata()
    {
      return this.http.get(this.url);
    }
}
