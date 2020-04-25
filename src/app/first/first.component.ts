import { Component, OnInit } from '@angular/core';
import {DayService} from '../services/days.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [DayService]
})
export class FirstComponent implements OnInit {
 
linkUrl:string = "https://www.vishAcademy.com"
linkName:string = "vishAcademy.com"
setProps:boolean = true;

labelName:string = "Email Address";
inputValue:string = "vinay@vishacademy.com"

days:any;

  constructor(private dayService: DayService) { 
    this.days = this.dayService.getData();
  }

  ngOnInit(): void {
  }

}
