import { Injectable } from '@angular/core';

export type PaginationPagesType = {
  currentPage?: number;
  totalPages?: number;
  startPage?: number;
  endPage?: number;
  pages?: number;
};


const range = (start: number, stop: number, step: number) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
@Injectable({
  providedIn: 'root'
})
export class PagerService {

  constructor() { }

  getPager(totalPages: number, currentPage: number = 0) {
    let startPage: number = 0 ;
    let endPage: number = 0 ;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        if ((totalPages - (currentPage -2)) === 5) {
          startPage = currentPage - 1;
          endPage = currentPage + 3;
        } else {
          startPage = currentPage - 2;
          endPage = currentPage + 2;
        }
      }
    }

    const pages = range(startPage, endPage, 1);

    return {
      currentPage,
      totalPages,
      startPage,
      endPage,
      pages
    } ;
  }
}
