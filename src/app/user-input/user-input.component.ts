import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  //calculate = output<InvestmentInput>();
  enteredInitialInvestment = signal('1010');
  enteredAnnualInvestment = signal('12000');
  enteredExpectedReturn = signal('2');
  enteredDuration = signal('5');

  constructor(private investmentService: InvestmentService){}


  onSubmit(){
    this.investmentService.CalculateInvestmentResults(
      {
        initialInvestment: +this.enteredInitialInvestment(),
        duration: +this.enteredDuration(),
        expectedReturn: +this.enteredExpectedReturn(),
        annualInvestment: +this.enteredAnnualInvestment()
      }
    );

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredDuration.set('0');

  }

}
