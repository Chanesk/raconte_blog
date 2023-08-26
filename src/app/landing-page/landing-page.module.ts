import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaconteModule } from '../raconte/raconte.module';
import { LandingPageComponent } from './landing-page.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    
  ],
  imports: [
    CommonModule,
    RaconteModule,
  ],
  exports:[
    LandingPageComponent
  ]

})
export class LandingPageModule { }
