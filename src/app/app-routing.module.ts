import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DecouvrirComponent } from './decouvrir/decouvrir/decouvrir.component';

const routes: Routes = [
  {path:'seconnecter', loadChildren:()=> import('./seconnecter/seconnecter.module').then(s=>s.SeconnecterModule)},
  {path:'reel', loadChildren:()=> import('./reel/reel.module').then(re=>re.ReelModule)},
  { path: 'fiction', loadChildren:()=> import('./fiction/fiction.module').then(f=>f.FictionModule)},
  { path: 'horreur', loadChildren:()=> import('./horreur-page/horreur-page.module').then(h=>h.HorreurPageModule) },
  {path:'raconte', loadChildren: ()=> import('./raconte/raconte.module').then(r=> r.RaconteModule)},
  {path:'decouvrir', component: DecouvrirComponent},
  { path: '', component: LandingPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
