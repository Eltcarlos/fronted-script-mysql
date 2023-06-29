import { Component, inject, ViewChild } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {FormGroup, FormControl, } from '@angular/forms';
import { History_by_section } from '../models/histoty';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

   


@Component({
  selector: 'app-history-client',
  templateUrl: './history-client.component.html',
  styleUrls: ['./history-client.component.scss']
})
export class HistoryClientComponent {
  http = inject(HttpClient)
  dataSource!: MatTableDataSource<History_by_section[]>
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
 @ViewChild(MatSort) sort !: MatSort;
  posts: any
  range = new FormGroup({
     start: new FormControl<Date | null>(null),
     end: new FormControl<Date | null>(null),
   });


   transformDate(event: MatDatepickerInputEvent<Date>) {
     const date = event.value;
     if (date) {
       const formattedDate = this.formatDate(date);
       console.log(formattedDate);
     }
   }
 
   formatDate(date: Date): string {
     const year = date.getFullYear();
     const month = this.padNumber(date.getMonth() + 1);
     const day = this.padNumber(date.getDate());
     return `${year}/${month}/${day}`;
   }
 
   padNumber(number: number): string {
     return number.toString().padStart(2, '0');
   }

 displayedColumns: string[] = ['Linea', 'Cliente', 'Fecha', 'Consumo', 'Perdidas', 'Costo'];

 sendRequest(){
   const startDate = this.range.controls.start.value;
   const endDate = this.range.controls.end.value;

   if (startDate && endDate) {
     const formattedStartDate = this.formatDate(startDate);
     const formattedEndDate = this.formatDate(endDate);
 
     const requestData = {
       startDate: formattedStartDate.toString(),
       endDate: formattedEndDate.toString()
     };

   this.http.post<History_by_section[]>('http://localhost:5000/api/user/history_by_client', {
     startDate: requestData.startDate,
     endDate: requestData.endDate
   }).subscribe((data)=> {
     this.posts = data
     this.dataSource = new MatTableDataSource(this.posts)
     this.dataSource.paginator = this.paginatior;
     this.dataSource.sort = this.sort;

   })
 }
 
}
}
