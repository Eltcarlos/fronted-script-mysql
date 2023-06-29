import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { HistorySectionComponent } from './history-section/history-section.component';
import { TopCustomersComponent } from './top-customers/top-customers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule} from '@angular/material/paginator';
import { NgChartsModule } from 'ng2-charts';
import { HistoryClientComponent } from './history-client/history-client.component';



export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    BodyComponent,
    HistorySectionComponent,
    TopCustomersComponent,
    HistoryClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    JsonPipe,
    MatNativeDateModule,
    MatTableModule,
    HttpClientModule,
    MatTableModule,MatPaginatorModule,
    NgChartsModule,
  ],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
