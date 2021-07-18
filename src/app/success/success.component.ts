import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  //styleUrls: ['./success.component.css']
  styles:[`
    p{
      background-color: palegreen;
      border : 1px solid green;
      padding : 20px;
      margin: 30px;
    }
  `]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
