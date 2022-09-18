import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';



@NgModule({
  declarations: [
    MainNavbarComponent
  ],
  exports: [
    MainNavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModuleModule { }
