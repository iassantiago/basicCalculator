import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {
  num1:number;
  num2:number;
  result:number;

  ngOnInit(): void {
  }

  Restar(): void {
      this.result = this.num1 - this.num2;
    }

}
