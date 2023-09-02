import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RaconteComponent } from './components/raconte/raconte.component';
import { RaconteListComponent } from './components/raconte-list/raconte-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DependanceModule } from '../dependance/dependance.module';
import { RaconteModule } from '../raconte/raconte.module';



@NgModule({
  declarations: [
    LandingPageComponent,
    RaconteComponent,
    RaconteListComponent,
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule, 
    DependanceModule, 
    RaconteModule
  ],
  exports:[
    LandingPageComponent
  ]

})
export class LandingPageModule { }
