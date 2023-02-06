import { Component} from '@angular/core';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent {
  num1:number;
  num2:number;
  result:number;

  Restar(): void {
      this.result = this.num1 - this.num2;
    }

}
