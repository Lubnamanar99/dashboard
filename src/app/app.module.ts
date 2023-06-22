import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//button imported from angular material api
import {MatButtonModule} from '@angular/material/button';
//angular material side nav
import {MatSidenavModule} from '@angular/material/sidenav';
//toolbar
import {MatToolbarModule} from '@angular/material/toolbar';
//heart icon in nav
import {MatIconModule} from '@angular/material/icon';
//menu
import {MatMenuModule} from '@angular/material/menu';
//divider in footer
import {MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { TableComponent } from './table/table.component';
import { PichartComponent } from './pichart/pichart.component';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LeadsComponent } from './leads/leads.component';
import {MatCardModule} from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';
//
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    CardComponent,
    AreaChartComponent,
    TableComponent,
    PichartComponent,
    EmployeesComponent,
    GalleryComponent,
    ContactComponent,
    LeadsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, //above imported button name in brace is paste here
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    HighchartsChartModule,
    MatPaginatorModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
