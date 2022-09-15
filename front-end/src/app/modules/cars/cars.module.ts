import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CarsRoutingModule } from './cars-routing.module';
import { CarPageComponent } from './pages/car-page/car-page.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    CarPageComponent,
    CarFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarsRoutingModule,
    FlexLayoutModule,
  ],
  exports: [FlexLayoutModule],
  providers: [],
  bootstrap: [],
})
export class CarsModule { }
