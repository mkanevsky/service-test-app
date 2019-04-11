import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DocumentationComponent} from './documentation/documentation.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RemoteRDPComponent} from './remote-rdp/remote-rdp.component';
import {AssetForwarderComponent} from './asset-forwarder/asset-forwarder.component';
import {IpmiComponent} from './ipmi/ipmi.component';
import {EsxiComponent} from './esxi/esxi.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'remote/:machine', component: RemoteRDPComponent },
  { path: 'vmware', component: EsxiComponent },
  { path: 'ipmi', component: IpmiComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: '**', component: AssetForwarderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, DocumentationComponent, RemoteRDPComponent]
