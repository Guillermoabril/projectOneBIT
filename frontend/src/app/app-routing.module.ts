import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CarsComponent } from './components/cars/cars.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"clients", component: ClientsComponent, canActivate: [authGuard]},
  {path:"products", component: ProductsComponent},
  {path:"contact", component: ContactUsComponent},
  {path:"about", component: AboutUsComponent},
  {path:"**", component: PageNotFoundComponent},
  {path:"cars", component: CarsComponent}, // ruta de consulta url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
