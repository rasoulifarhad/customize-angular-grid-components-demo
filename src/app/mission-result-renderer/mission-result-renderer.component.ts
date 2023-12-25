import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-mission-result-renderer',
  templateUrl: './mission-result-renderer.component.html',
  styleUrls: ['./mission-result-renderer.component.css']
})
export class MissionResultRenderer implements ICellRendererAngularComp {

  public value!: string;

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value ? 'tick-in-circle' : 'cross-in-circle';
  }

  refresh(params: ICellRendererParams<any, any, any>): boolean {
    this.value = params.value;
    return true;
  }

}
