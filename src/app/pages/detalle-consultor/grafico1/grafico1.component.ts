import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico1',
  templateUrl: './grafico1.component.html',
  styleUrls: ['./grafico1.component.css']
})
export class Grafico1Component{

  productionData: any[] = [{
    year: 1970,
    country: 'Saudi Arabia',
    oil: 192.2,
  }, {
    year: 1970,
    country: 'USA',
    oil: 533.5,
  }, {
    year: 1970,
    country: 'Iran',
    oil: 192.6,
  }, {
    year: 1970,
    country: 'Mexico',
    oil: 24.2,
  }, {
    year: 1980,
    country: 'Mexico',
    oil: 107.2,
  }, {
    year: 1990,
    country: 'Russia',
    oil: 515.9,
  }, {
    year: 2000,
    country: 'Iran',
    oil: 191.3,
  }, {
    year: 2000,
    country: 'Mexico',
    oil: 171.2,
  }, {
    year: 2000,
    country: 'Russia',
    oil: 323.3,
  }, {
    year: 2008,
    country: 'Saudi Arabia',
    oil: 515.3,
  }, {
    year: 2008,
    country: 'USA',
    oil: 304.9,
  }, {
    year: 2008,
    country: 'Iran',
    oil: 209.9,
  }, {
    year: 2008,
    country: 'Mexico',
    oil: 157.7,
  }, {
    year: 2008,
    country: 'Russia',
    oil: 488.5,
  }, {
    year: 2009,
    country: 'Saudi Arabia',
    oil: 459.5,
  }, {
    year: 2009,
    country: 'USA',
    oil: 325.3,
  }, {
    year: 2009,
    country: 'Iran',
    oil: 202.4,
  }, {
    year: 2009,
    country: 'Mexico',
    oil: 147.5,
  }, {
    year: 2009,
    country: 'Russia',
    oil: 494.2,
  },
  ];

  constructor() {
    //this.productionData = service.getProductionData();
  }

  customizeSeries(valueFromNameField: number) {
    return valueFromNameField === 2009
      ? { type: 'line', label: { visible: true }, color: '#4E80BD' } : {};
  }
}
