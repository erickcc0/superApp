import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private _opened: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

}
