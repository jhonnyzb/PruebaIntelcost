import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesComunicacionService {


  private componentMethodCallSource = new Subject<any>();
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();


  constructor() { }

  callComponentMethod(text: string ) {
    this.componentMethodCallSource.next(text);
  }

 

}
