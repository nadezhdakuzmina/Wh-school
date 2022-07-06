import { Component, OnInit } from '@angular/core';
import { NUMBERS } from './paginatorFunction';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  numbers = NUMBERS;

  selectedNumber: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(number: number): void {
    this.selectedNumber = number;
  }
}
