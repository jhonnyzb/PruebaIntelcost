import { Component, OnInit } from '@angular/core';
import { ServicesComunicacionService } from '../../services/services-comunicacion.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
 textSearch: string = ''
 valid: string = 'noError'
  constructor(private comunicacion: ServicesComunicacionService) { }

  ngOnInit() {
  }


  clearValid(){
    this.valid = 'noError'
  }

  callMethod(){
    if (this.textSearch === "") {
      this.valid = 'Error'
      return
    }
    this.comunicacion.callComponentMethod(this.textSearch);
  }

}
