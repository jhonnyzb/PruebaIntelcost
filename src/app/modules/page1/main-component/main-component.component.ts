import { Component, OnInit, OnDestroy } from "@angular/core";
import { AllServicesService } from "../../../services/all-services.service";
import { Subscription } from "rxjs";
import { ServicesComunicacionService } from "../../../services/services-comunicacion.service";

@Component({
  selector: "app-main-component",
  templateUrl: "./main-component.component.html",
  styleUrls: ["./main-component.component.css"],
})
export class MainComponentComponent implements OnInit, OnDestroy {
  products: any;
  textSearch: string = "";
  SubscriptionGetProducts: Subscription;
  SubscriptionGetSearch: Subscription;
  SubscriptionGetCategory: Subscription;
  SubscriptionGet: Subscription;
  categorySelect: string = "science";
  idProduct: number = 0;
  imgPreview: string = "";
  reviews: number = 0;
  tags: string = "";
  views: number = 0;
  favorites: number = 0;
  likes: number = 0;
  price: number = 0;
  show: boolean = false;

  constructor(
    private services: AllServicesService,
    private comunicacion: ServicesComunicacionService
  ) {
    this.SubscriptionGet = this.comunicacion.componentMethodCalled$.subscribe(
      (res: any) => {
        this.textSearch = res;
        this.searchProducts();
      }
    );
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.SubscriptionGetProducts = this.services.getProducts().subscribe(
      (res: any) => {
        this.products = res.hits;
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchProducts() {
    if (this.textSearch === "") {
      this.textSearch = "tecnologia";
    }
    this.SubscriptionGetSearch = this.services.getProductsSearch(this.textSearch).subscribe(
        (res: any) => {
          if(res.hits.length === 0){
            this.show = true;
            this.products = res.hits;
          }else{
            this.show = false;
            this.products = res.hits;
          }
         
        },
        (erro) => {
          console.log(erro);
        }
      );
  }

  ChangingValue(event: any) {
    this.SubscriptionGetCategory = this.services
      .getProductsCategory(event.target.value)
      .subscribe(
        (res: any) => {
          this.products = res.hits;
          this.textSearch = "";
          this.show = false;
        },
        (erro) => {
          console.log(erro);
        }
      );
  }

  dataModal(product: any) {
    this.idProduct = product.id;
    this.imgPreview = product.webformatURL;
    this.reviews = product.comments;
    this.tags = product.tags;
    this.views = product.views;
    this.favorites = product.favorites;
    this.likes = product.likes;
    this.price = product.favorites + 10;
  }

  ngOnDestroy() {
    this.SubscriptionGetProducts.unsubscribe();
    this.SubscriptionGet.unsubscribe();
  }
}
