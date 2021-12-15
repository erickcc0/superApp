import {
  Component,
  OnInit,
} from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-main-detalle-consultor',
  templateUrl: './main-detalle-consultor.component.html',
  styleUrls: ['./main-detalle-consultor.component.css']
})
export class MainDetalleConsultorComponent implements OnInit {

  constructor(public generalService: GeneralService) {
    console.log('this.generalService.globaVar:', this.generalService.generic_data)
  }

  ngOnInit(): void {
  }

}
