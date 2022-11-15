import { Component, OnInit } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { CurrencyListService } from './currency-list.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css'],
  imports:[GridModule ],
  standalone:true
})
export class CurrencyListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}