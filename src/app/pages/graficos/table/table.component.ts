import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table_data: any;

  constructor( private generalService:GeneralService) {
    this.generalService.getResultsLastMonth('ROJASAL').toPromise().then(
      (response: any) => {
        console.log('response++:', response)
        this.table_data = response;
      }
    );
  }

  requestHome(){
  }

  ngOnInit(): void {
  }
}
  

