import { Component } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { IRow } from '../model/irow';

@Component({
  selector: 'app-home-def-col-definition',
  templateUrl: './home-def-col-definition.component.html',
  styleUrls: ['./home-def-col-definition.component.css'],
})
export class HomeDefColDefinitionComponent {
  themeClass = 'ag-theme-quartz';
  rowData: IRow[] = [];

  defaultColDef: ColDef = {
    filter: true
  }
  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { field: 'mission'},
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    { field: 'price' },
    { field: 'successful' },
    { field: 'rocket' },
  ];

  constructor(private http: HttpClient) {}

  onGrigReady($event: GridReadyEvent<any, any>) {
    this.http
      .get<any[]>(
        'https://www.ag-grid.com/example-assets/space-mission-data.json'
      )
      .subscribe((data) => (this.rowData = data));
  }
}
