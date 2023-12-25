import { ColDef } from 'ag-grid-community';
import { Component } from '@angular/core';
// import { AgGridAngular } from 'ag-grid-angular';


@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [AgGridAngular],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'customize-angular-grid-components-demo';

  rowData = [
    {
      mission: 'Voyager',
      company: 'NASA',
      location: 'Cape Canaveral',
      date: '1977-09-05',
      rocket: 'Titan-Centaur ',
      price: 86580000,
      successful: true,
    },
    {
      mission: 'Apollo 13',
      company: 'NASA',
      location: 'Kennedy Space Center',
      date: '1970-04-11',
      rocket: 'Saturn V',
      price: 3750000,
      successful: false,
    },
    {
      mission: 'Falcon 9',
      company: 'SpaceX',
      location: 'Cape Canaveral',
      date: '2015-12-22',
      rocket: 'Falcon 9',
      price: 9750000,
      successful: true,
    },
  ];

  colDefs: ColDef[] = [
    { field: 'mission' },
    { field: 'company' },
    { field: 'location' },
    { field: 'date' },
    { field: 'rocket' },
    { field: 'price' },
    { field: 'successful' },
  ];
}
