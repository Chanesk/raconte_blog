import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { RaconteRecenteComponent } from './components/raconte-recente/raconte-recente.component';
import { RaconteRecenteListComponent } from './components/raconte-recente-list/raconte-recente-list.component';
import { RaconteThirdRecenteComponent } from './components/raconte-third-recente/raconte-third-recente.component';
import { DependanceModule } from '../dependance/dependance.module';
import { SingleRaconteComponent } from './components/single-raconte/single-raconte.component';
import { RaconteRoutingModule } from './raconte-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SubscribeComponent,
    RaconteRecenteComponent,
    RaconteRecenteListComponent,
    RaconteThirdRecenteComponent,
    SingleRaconteComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DependanceModule,
    RaconteRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ], 
  exports:[
    SubscribeComponent,
    RaconteRecenteListComponent
  ]
})
export class RaconteModule { }
