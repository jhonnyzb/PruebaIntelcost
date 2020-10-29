import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./Layout/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "Home",
        loadChildren: () =>
          import("./modules/page1/page1.module").then((m) => m.Page1Module),
      },
      {
        path: "Servicios",
        loadChildren: () =>
          import("./modules/page2/page2.module").then((m) => m.Page2Module),
      },
      {
        path: "**",
        redirectTo: "Home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
