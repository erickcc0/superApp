import { Component } from '@angular/core';

@Component({
  selector: 'app-neosalud',
  templateUrl: './neosalud.component.html',
  styleUrls: ['./neosalud.component.css']
})
export class NeosaludComponent {

  grossProductData: any[] = [{
    state: 'Illinois',

    year2017: 823,
    year2018: 863,
  }, {
    state: 'Indiana',

    year2017: 332,
    year2018: 332,
  }, {
    state: 'Michigan',

    year2017: 459,
    year2018: 470,
  }, {
    state: 'Ohio',

    year2017: 642,
    year2018: 675,
  }, {
    state: 'Wisconsin',

    year2017: 294,
    year2018: 301,
  }];
  constructor() {
  }

  onPointClick(e:any) {
    e.target.select();
  }

}
