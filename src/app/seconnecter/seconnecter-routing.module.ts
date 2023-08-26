import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeconnecterComponent } from './component/seconnecter/seconnecter.component';

const routes: Routes = [{ path: '', component: SeconnecterComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeconnecterRoutingModule {}
