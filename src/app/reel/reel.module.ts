import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReelComponent } from './components/reel/reel.component';
import { RaconteModule } from '../raconte/raconte.module';
import { DependanceModule } from '../dependance/dependance.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReelArticleComponent } from './components/reel-article/reel-article.component';
import { ReelRoutingModule } from './reel-routing.module';



@NgModule({
  declarations: [
    ReelComponent,
    ReelArticleComponent,
  ],
  imports: [
    CommonModule,
    RaconteModule,
    DependanceModule,
    FontAwesomeModule,
    ReelRoutingModule
  ]
})
export class ReelModule { }
