import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ordenar: string[] = ['Evo mayor a menor', 'Evo menor a mayor'];
  seleccionado:string[]=[];


  summary: any = {};

  constructor(private generalService: GeneralService) {
    this.generalService.getSummary().toPromise().then(
      (response: any) => {
        // console.log('response:', response)
        this.summary = response;
      }
    );
  }




  ngOnInit(): void {

  }

}
