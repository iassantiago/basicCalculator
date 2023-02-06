import { Component} from '@angular/core';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent {
  num1:number;
  num2:number;
  result:number;
  
Multiplicar(): void {
      this.result = this.num1 * this.num2;
    }
}
