import { Component } from '@angular/core';
import { CellValueChangedEvent, ColDef, GridReadyEvent, SelectionChangedEvent, ValueFormatterParams } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { IRow } from '../model/irow';
import { CompanyLogoRenderer } from '../company-logo-renderer/company-logo-renderer.component';
import { MissionResultRenderer } from '../mission-result-renderer/mission-result-renderer.component';

@Component({
  selector: 'app-home-grid-events',
  templateUrl: './home-grid-events.component.html',
  styleUrls: ['./home-grid-events.component.css'],
})
export class HomeGridEventsComponent {
  themeClass = 'ag-theme-quartz';
  rowData: IRow[] = [];

  defaultColDef: ColDef = {
    filter: true,
    editable: true,
  };

  // Return formatted date value
  dateFormatter(params: ValueFormatterParams) {
    return new Date(params.value).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef[] = [
    {
      field: 'mission',
      width: 150,
      checkboxSelection: true,
      // cellRenderer: MissionResultRenderer
    },
    {
      field: 'company',
      width: 150,
      cellRenderer: CompanyLogoRenderer, // Render a custom component
    },
    {
      field: 'location',
      width: 225,
    },
    {
      field: 'date',
      valueFormatter: this.dateFormatter,
    },
    {
      field: 'price',
      valueFormatter: (params) => {
        return '£' + params.value.toLocaleString();
      },
    },
    {
      field: 'successful',
      width: 120,
      cellRenderer: MissionResultRenderer,
    },
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

  onSelectionChanged = (event: SelectionChangedEvent) => {
    console.log('Row selected!');
  };

  // Handle cell editing event
  onCellValueChanged = (event: CellValueChangedEvent) => {
    console.log(`New Cell Value: ${event.value}`);
  };
}
