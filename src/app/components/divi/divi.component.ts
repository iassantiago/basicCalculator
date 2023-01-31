import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divi',
  templateUrl: './divi.component.html',
  styleUrls: ['./divi.component.css']
})
export class DiviComponent implements OnInit {
    num1:number;
    num2:number;
    result:number;

  ngOnInit(): void {
  }
Dividir(): void {
      this.result = this.num1 / this.num2;
    }
}
