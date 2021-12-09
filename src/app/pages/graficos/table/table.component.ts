import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../dashboard/services/home.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  home:any[] = [];

  constructor(private _HomeService:HomeService) { }

  requestHome(){
    this._HomeService.ResultLastMont()
    .subscribe(resp=>{
      this.home = resp;
      console.log(this.home);
             
    },(err) =>{
      console.log(err);
      this.home=[];
      
    });
  }

  ngOnInit(): void {
    this.requestHome();
  }

}
  

