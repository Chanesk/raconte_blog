import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { SingleRaconteComponent } from "./components/single-raconte/single-raconte.component";
import { ConnectGuard } from "../core/guards/connect.guard";

const routes: Routes= [
    {path:':id', component:SingleRaconteComponent, canActivate:[ConnectGuard]}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RaconteRoutingModule {}