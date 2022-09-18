import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageModuleRoutingModule } from './landing-page-module-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { HomeComponent } from './home/home.component';
import {SharedModuleModule} from "../shared/shared-module.module";


@NgModule({
  declarations: [
    LandingPageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LandingPageModuleRoutingModule,
    SharedModuleModule
  ]
})
export class LandingPageModuleModule { }
