import { Component } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { IRow } from '../model/irow';

@Component({
  selector: 'app-home-grid-option-cell-format',
  templateUrl: './home-grid-option-cell-format.component.html',
  styleUrls: ['./home-grid-option-cell-format.component.css'],
})
export class HomeGridOptionCellFormatComponent {
  themeClass = 'ag-theme-quartz';
  rowData: IRow[] = [];

  defaultColDef: ColDef = {
    filter: true,
  };
  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { field: 'mission' },
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    {
      field: 'price',
      valueFormatter: params => { return '£' + params.value.toLocaleString(); }
    },
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
