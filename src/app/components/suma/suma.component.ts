import { Component} from '@angular/core';
import { __importDefault } from 'tslib';


@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})

export class SumaComponent{
  num1:number;
  num2:number;
  result:number;

  Sumar(): void {
    this.result = this.num1 + this.num2;
  }
}
