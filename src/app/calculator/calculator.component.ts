import { Component } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  showValue: string = "";
  currentNumber: string = "";
  operator: string | null = null;


showScreen(value: string){
  this.showValue += value;
  this.currentNumber += value;
}

setOperator(operator: string){
  this.showScreen(operator);
  if (this.currentNumber !== ""){
    this.operator = operator; 
    this.currentNumber = "";
  }
}

calculate(){
  if(this.operator && this.currentNumber !== ""){
    const number1 = parseFloat(this.showValue);
    const number2 = parseFloat(this.currentNumber);
    
    switch (this.operator){
      case '+':
        this.showValue = (number1 + number2).toString();
        break;
      case '-':
        this.showValue = (number1 - number2).toString();
        break;
      case '*':
        this.showValue = (number1 * number2).toString();
        break;
      case '/':
        this.showValue = (number1 / number2).toString();
        break;
    }

    this.currentNumber = ""; 
    }    
    
  }

clear(){
  this.showValue = "";
  this.currentNumber = "";
  this.operator = null;
}
}

