import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(private http: HttpClient) { }


  getProducts(){
    return this.http.get('https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&q=tecnologia&lang=es');
  }

  getProductsSearch(textSearch: string){
    return this.http.get(`https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&q=${textSearch}&lang=es`);
  }

  getProductsCategory(CategorySearch: string){
    return this.http.get(`https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25&category=${CategorySearch}&lang=es`);
  }

}
