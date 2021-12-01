import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any[] = [
    {
      personas: 284,
      categoria: 'Consultores'
    },
    {
      personas: 11,
      categoria: 'Vacantes'
    },
    {
      personas: 21,
      categoria: 'T.Remoto'
    },
    {
      personas: '4%',
      categoria: 'Rotacion'
    },
    {
      personas: 37,
      categoria: 'Permisos'
    },
    {
      personas: 50,
      categoria: 'V.Acomp'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
