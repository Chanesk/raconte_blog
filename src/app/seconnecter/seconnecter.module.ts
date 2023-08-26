import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeconnecterComponent } from './component/seconnecter/seconnecter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeconnecterRoutingModule } from './seconnecter-routing.module';



@NgModule({
  declarations: [
    SeconnecterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SeconnecterRoutingModule
  ],
  exports:[
    ReactiveFormsModule
  ]
})
export class SeconnecterModule { }
