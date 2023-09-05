import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecouvrirComponent } from './decouvrir/decouvrir.component';



@NgModule({
  declarations: [
    DecouvrirComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DecouvrirComponent
  ]
})
export class DecouvrirModule { }
