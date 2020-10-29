import { Component, OnInit } from '@angular/core';
import { ServicesComunicacionService } from '../../services/services-comunicacion.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
 textSearch: string = ''
 
  constructor(private comunicacion: ServicesComunicacionService) { }

  ngOnInit() {
  }


  callMethod(){
    this.comunicacion.callComponentMethod(this.textSearch);
  }

}
