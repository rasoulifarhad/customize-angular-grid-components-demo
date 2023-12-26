import { Component, ViewChild } from '@angular/core';
import {
  CellValueChangedEvent,
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
  SelectionChangedEvent,
  ValueFormatterParams,
} from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { IRow } from '../model/irow';
import { CompanyLogoRenderer } from '../company-logo-renderer/company-logo-renderer.component';
import { MissionResultRenderer } from '../mission-result-renderer/mission-result-renderer.component';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-home-grid-custom-pagination',
  templateUrl: './home-grid-custom-pagination.component.html',
  styleUrls: ['./home-grid-custom-pagination.component.css'],
})
export class HomeGridCustomPaginationComponent {
  themeClass = 'ag-theme-quartz';

  private paginationPageSize = 5;
  private totalPages = 0;

  public gridApi!: GridApi<IRow>;

  // @ViewChild('myGrid') grid!: AgGridAngular;

  private rowData: IRow[] = [];

  get PaginationPageSize(): number {
    return this.paginationPageSize;
  }

  get TotalPages(): number {
    return this.totalPages;
  }

  get gridAPI(): GridApi {
    return this.gridApi;
    // r  eturn this.grid.api;
  }

  get RowData(): IRow[] {
    return this.rowData;
  }

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
      day: 'numeric',
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

  gridOptions: GridOptions = {
    defaultColDef: this.defaultColDef,
    columnDefs: this.colDefs,
    onGridReady: this.onGridReady,
    onSelectionChanged: this.onSelectionChanged,
  };

  get GridOptions() {
    return this.gridOptions;
  }

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<IRow>) {
    this.gridApi = params.api;
    console.log(this.gridApi);
    this.totalPages = this.gridApi.paginationGetTotalPages();
    this.http
      .get<any[]>(
        'https://www.ag-grid.com/example-assets/space-mission-data.json'
      )
      .subscribe((data) => (this.rowData = data));
  }

  onSelectionChanged(event: SelectionChangedEvent) {
    console.log('Row selected!');
  }

  // Handle cell editing event
  onCellValueChanged = (event: CellValueChangedEvent) => {
    console.log(`New Cell Value: ${event.value}`);
  };
}
