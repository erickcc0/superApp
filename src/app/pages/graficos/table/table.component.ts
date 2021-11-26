import { Component, OnInit } from '@angular/core';
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';
import { DxDataGridModule } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  ngOnInit(): void {
  }

  dataSource: any;

  connectionStarted: boolean;

  constructor() {
    this.connectionStarted = false;

    const hubConnection = new HubConnectionBuilder()
      .withUrl('https://js.devexpress.com/Demos/NetCore/liveUpdateSignalRHub', {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();

    const store = new CustomStore({
      load: () => hubConnection.invoke('getAllStocks'),
      key: 'symbol',
    });

    hubConnection
      .start()
      .then(() => {
        hubConnection.on('updateStockPrice', (data: any) => {
          store.push([{ type: 'update', key: data.symbol, data }]);
        });
        this.dataSource = store;
        this.connectionStarted = true;
      });
  }

}
