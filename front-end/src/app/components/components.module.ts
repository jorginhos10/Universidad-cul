import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, HomeComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [LoginComponent, RegisterComponent],
})
export class ComponentsModule {}
