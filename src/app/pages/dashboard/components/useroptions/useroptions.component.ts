import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-useroptions',
  templateUrl: './useroptions.component.html',
  styleUrls: ['./useroptions.component.css']
})
export class UseroptionsComponent implements OnInit {

  constructor(
      public generalService: GeneralService,
      private rendered2:Renderer2,
      private route: ActivatedRoute,
      private router: Router
    ) { }

  @ViewChild('lista') listarSupervisor: ElementRef | undefined;

  supervisor:any[] = [];

  ngOnInit(): void {
    this.getSupervisor();
    this.route.queryParams.subscribe(params => {
      console.log('params:', params)
      // this.name = params['name'];
    });
  }
  getSupervisor(){
    this.generalService.getConsultants()
        .subscribe(resp=>{
          this.supervisor = resp
        }, (err) =>{
          alert(err);
          this.supervisor = [];
        });
  }

  listar(){
    const listar:any = this.listarSupervisor?.nativeElement;
    if (document.querySelector('.unblock')) {
      this.rendered2.removeClass(listar, 'unblock');
    } else {
      this.rendered2.addClass(listar, 'unblock');
    }
  }

  getConsultant(item: any) {
    return this.generalService?.generic_data?.consultant_list?.find((consultant: any) => consultant.consultant === item.full_name);
  }

  selectItem(item: any) {
    var consultant = this.getConsultant(item);
    this.generalService.updateGlobalVars({
      consultant_list: this.generalService?.generic_data?.consultant_list,
      consultant: consultant,
    });
    this.router.navigate(["../../", item.user_name, "dashboard"], { relativeTo: this.route });
    const listar:any = this.listarSupervisor?.nativeElement;
    this.rendered2.removeClass(listar, 'unblock');
    location.reload();
  }

}

  // this._consultaNeosalud.ConsultaNeosaludById(this.generalService.generic_data.consultant?.consultant_data.user_name)
  // .subscribe(resp => {
  //   this.neosalud = resp;
  //   this.neosalud = this.neosalud.splice(0, 8);
  //   console.table(this.neosalud);


  // }, (err) => {
  //   //  console.log(err);
  //   this.neosalud = [];

  // });
