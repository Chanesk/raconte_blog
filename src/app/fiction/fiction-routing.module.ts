import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SingleRaconteComponent } from "../raconte/components/single-raconte/single-raconte.component";
import { FictionComponent } from "./components/fiction/fiction.component";
import { ConnectGuard } from "../core/guards/connect.guard";

const routes: Routes=[
    {path:':id',component:SingleRaconteComponent},
    {path:'', component: FictionComponent, canActivate:[ConnectGuard]}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class FictionRoutingModule {}