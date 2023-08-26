import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SingleRaconteComponent } from "../raconte/components/single-raconte/single-raconte.component";
import { ReelComponent } from "./components/reel/reel.component";
import { ConnectGuard } from "../core/guards/connect.guard";

const routes: Routes =[
    {path: ':id', component: SingleRaconteComponent},
    {path:'', component: ReelComponent, canActivate:[ConnectGuard]}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[]
})
export class ReelRoutingModule {}