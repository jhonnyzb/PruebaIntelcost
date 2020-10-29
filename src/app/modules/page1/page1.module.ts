import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Page1RoutingModule } from './page1-routing.module';
import { MainComponentComponent } from '../page1/main-component/main-component.component';


@NgModule({
  declarations: [MainComponentComponent],
  imports: [
    CommonModule,
    Page1RoutingModule,
    FormsModule
  ]
})
export class Page1Module { }
