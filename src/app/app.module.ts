import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, MatSortModule, MatTableModule, MatListModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule, routingComponents } from './app-routing-module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/EmployeeComponent';
import { HomeComponent } from './Home/homeComponent';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    routingComponents,
    HomeComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    AgGridModule.withComponents([]),
    LayoutModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
