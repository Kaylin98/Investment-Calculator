import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  enteredInitialInvestment: string = '10000';
  enteredAnnualInvestment: string = '10';
  enteredExpectedReturn:string = '5';
  enteredDuration:string = '5'


  onSubmit(){
    this.calculate.emit(
      {
        initialInvestment: +this.enteredInitialInvestment,
        duration: +this.enteredDuration,
        expectedReturn: +this.enteredExpectedReturn,
        annualInvestment: +this.enteredAnnualInvestment
      }
    );
  }

}
