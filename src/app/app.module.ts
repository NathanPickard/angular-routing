import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ResetComponent } from "./reset-password/reset-password.component";
import { OutletComponent } from "./outlet/outlet.component";
import { NotFoundComponent } from "./404/404.component";
import { ProductServices } from './services/product.service';
import { DetailsComponent } from './details/details.component';
import { InstructionsComponent } from './instructions/instructions.component';

const appRoutes: Routes = [
  { path: '', component: InstructionsComponent },
  { path: 'details/:id/:name', component: DetailsComponent }
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'reset-password', component: ResetComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    InstructionsComponent,
    OutletComponent,
    // LoginComponent,
    ResetComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
