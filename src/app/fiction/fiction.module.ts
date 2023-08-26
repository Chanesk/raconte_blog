import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FictionComponent } from './components/fiction/fiction.component';
import { FictionArticleComponent } from './components/fiction-article/fiction-article.component';
import { RaconteModule } from '../raconte/raconte.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DependanceModule } from '../dependance/dependance.module';
import { FictionRoutingModule } from './fiction-routing.module';



@NgModule({
  declarations: [
    FictionComponent,
    FictionArticleComponent
  ],
  imports: [
    CommonModule,
    RaconteModule,
    FontAwesomeModule,
    DependanceModule,
    FictionRoutingModule
  ]
})
export class FictionModule { }
