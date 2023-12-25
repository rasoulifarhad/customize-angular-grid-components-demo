import { Component } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { IRow } from '../model/irow';
import { CompanyLogoRenderer } from '../company-logo-renderer/company-logo-renderer.component';

@Component({
  selector: 'app-home-grid-option-cell-renderer',
  templateUrl: './home-grid-option-cell-renderer.component.html',
  styleUrls: ['./home-grid-option-cell-renderer.component.css'],
})
export class HomeGridOptionCellRendererComponent {
  themeClass = 'ag-theme-quartz';
  rowData: IRow[] = [];

  defaultColDef: ColDef = {
    filter: true,
  };
  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    { field: 'mission' },
    {
      field: 'company',
      cellRenderer: CompanyLogoRenderer, // Render a custom component
    },
    { field: 'location' },
    { field: 'date' },
    {
      field: 'price',
      valueFormatter: (params) => {
        return '£' + params.value.toLocaleString();
      },
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
