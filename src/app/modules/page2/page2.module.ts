import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { MainComponentComponent } from '../page2/main-component/main-component.component';


@NgModule({
  declarations: [MainComponentComponent],
  imports: [
    CommonModule,
    Page2RoutingModule
  ]
})
export class Page2Module { }
