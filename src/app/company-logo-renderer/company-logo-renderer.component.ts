import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-company-logo-renderer',
  templateUrl: './company-logo-renderer.component.html',
  styleUrls: ['./company-logo-renderer.component.css'],
})
export class CompanyLogoRenderer implements ICellRendererAngularComp {
  public value!: string;

  // Init Cell Value
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value;
  }

  // Return Cell Value
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    this.value = params.value;
    return true;
  }
}
