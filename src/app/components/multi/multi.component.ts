import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent implements OnInit {
  num1:number;
  num2:number;
  result:number;

  ngOnInit(): void {
  }

Multiplicar(): void {
      this.result = this.num1 * this.num2;
    }
}
