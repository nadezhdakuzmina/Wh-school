import { Component, Input } from '@angular/core';
import { NUMBERS } from '../paginator/paginatorFunction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() numbers = NUMBERS;

  constructor () {
  }

  ngOnInit(): void {
  }

}
