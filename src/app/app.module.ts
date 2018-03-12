import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ResetComponent } from "./reset-password/reset-password.component";
import { OutletComponent } from "./outlet/outlet.component";
import { NotFoundComponent } from "./404/404.component";
import { ProductServices } from './Products/services/product.service';
import { DetailsComponent } from './Products/details/details.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ItemListComponent } from './Products/item-list/item-list.component';
import { ItemDetailsComponent } from './Products/item-details/item-details.component';
import { ItemEditComponent } from './Products/edit/item-edit.component';
import { UsersComponent } from './admin/users/users.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { PermissionsComponent } from './admin/permissions/permissions.component';
import { LoginUserComponent } from './login/login-user/login-user.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './Products/products.component';
import { LoggedInGuard } from './services/logged-in.guard';
import { PerSavedGuardGuard } from './services/per-saved-guard.guard';

const appRoutes: Routes = [
  { path: '', component: InstructionsComponent },
  {
    path: 'login', component: LoginComponent, children: [
      { path: '', component: LoginUserComponent },
      { path: 'login', component: LoginUserComponent },
      { path: 'forgot', component: ResetPasswordComponent }
    ]
  },
  {
    path: 'products', component: ProductsComponent, children: [
      { path: '', component: InstructionsComponent },
      { path: 'details/:id', component: DetailsComponent }
    ]
  },
  {
    path: 'admin', component: AdminComponent, canActivate: [
      LoggedInGuard

    ],
    children: [
      { path: '', component: UsersComponent },
      { path: 'user-list', component: UsersComponent },
      { path: 'add', component: AddUserComponent },
      { path: 'permissions', component: PermissionsComponent, canDeactivate: [PerSavedGuardGuard] },
    ]
  },
  // { path: 'details/:id/:name', component: DetailsComponent }
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'reset-password', component: ResetComponent },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ItemListComponent,
    ItemDetailsComponent,
    ItemEditComponent,
    AddUserComponent,
    EditUserComponent,
    PermissionsComponent,
    ProductsComponent,
    LoginUserComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DetailsComponent,
    InstructionsComponent,
    OutletComponent,
    LoginComponent,
    ResetComponent,
    NotFoundComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductServices, LoggedInGuard, PerSavedGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
