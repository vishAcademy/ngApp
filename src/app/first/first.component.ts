import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
 
linkUrl:string = "https://www.vishAcademy.com"
linkName:string = "vishAcademy.com"
setProps:boolean = true;

labelName:string = "Email Address";
inputValue:string = "vinay@vishacademy.com"

  constructor() { }

  ngOnInit(): void {
  }

}
