import { Component, computed, input } from '@angular/core';
import { InvestmentResult } from './investment-results.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // @Input() results?: InvestmentResults[];
  //results = input<InvestmentResult[] | undefined>();

  constructor(private investmentService: InvestmentService){}

  // get results(){
  //   return this.investmentService.investmentResults;
  // }

  results = computed(() => this.investmentService.investmentResults());


}
