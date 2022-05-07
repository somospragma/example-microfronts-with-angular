import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRouting } from './dashboard.routing';
import { ModuleFederationToolsModule } from '@angular-architects/module-federation-tools';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ModuleFederationToolsModule,
    DashboardRouting
  ]
})
export class DashboardModule { }
