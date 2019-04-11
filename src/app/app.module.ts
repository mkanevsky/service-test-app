import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { GoogleChartsModule } from 'angular-google-charts';
import { APP_INITIALIZER } from '@angular/core';
import {ConfigService} from './config.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { of, Observable, ObservableInput } from '../../node_modules/rxjs';
import { map, catchError } from 'rxjs/operators';
import { AssetForwarderComponent } from './asset-forwarder/asset-forwarder.component';
import {NgxChildProcessModule} from 'ngx-childprocess'
import {NgxElectronModule} from 'ngx-electron';
import { ChartsModule } from 'ng2-charts';
import {BackendService} from './backend.service';
import { IpmiComponent } from './ipmi/ipmi.component';
import { EsxiComponent } from './esxi/esxi.component';

function load(http: HttpClient, config: ConfigService): (() => Promise<boolean>) {
  return (): Promise<boolean> => {
    return new Promise<boolean>((resolve: (a: boolean) => void): void => {
      http.get('./assets/config.json')
        .pipe(
          map((x: ConfigService) => {
            config.ip_mct = x.ip_mct;
            config.ip_mu1 = x.ip_mu1;
            config.ip_ipc = x.ip_ipc;
            config.documentation_url = x.documentation_url;
            resolve(true);
          }),
          catchError((x: { status: number }, caught: Observable<void>): ObservableInput<{}> => {
            if (x.status !== 404) {
              resolve(false);
            }
            config.ip_mct = ConfigService.DEFAULT_IP_MCT;
            config.ip_mu1 = ConfigService.DEFAULT_IP_MU1;
            config.ip_ipc = ConfigService.DEFAULT_IP_IPC;
            config.documentation_url = "assets/documentation/Default.htm";

            resolve(true);
            return of({});
          })
        ).subscribe();
    });
  };
}


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AssetForwarderComponent,
    IpmiComponent,
    EsxiComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    NgxChildProcessModule,
    NgxElectronModule,
    GoogleChartsModule.forRoot(),
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    BackendService,
    {
      provide: APP_INITIALIZER,
      useFactory: load,
      deps: [
        HttpClient,
        ConfigService
      ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
