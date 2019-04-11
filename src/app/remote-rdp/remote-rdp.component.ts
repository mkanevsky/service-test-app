import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';
import {ActivatedRoute} from '@angular/router';
import {AllElectron} from 'electron';

import {throwError, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BackendService} from '../backend.service';

;

//import { ElectronService } from 'ngx-electron';
//const {Electron, ipcRenderer} = require('electron');
//let ipcRenderer = require('electron');

@Component({
  selector: 'app-remote-rdp',
  templateUrl: './remote-rdp.component.html',
  styleUrls: ['./remote-rdp.component.css']
})
export class RemoteRDPComponent implements OnInit {

  private ip_address: string;
  private username: string;
  private password: string;


  constructor(
    private backendService: BackendService,
    private configService: ConfigService,
    private route: ActivatedRoute) {
    //const machine: Observable<string> = route.params.pipe(map(p => p));

    route.params.subscribe(value => this.ip_address = configService.getRemoteIp(value['machine']));
    this.username = "Administrator";
    this.password = "Nova";


    /*
    switch (route.params['machine']) {
      case 'mct':
        this.ip_address =configService.ip_mct;
      case 'mu1':
        this.ip_address =configService.ip_mu1;
      case 'ipc':
        this.ip_address =configService.ip_ipc;
      default:
        throw throwError('Incorrect machine name');
    }
    */
  }

  ngOnInit() {

  }

  ngAfterContentChecked(): void {

  }

  public runrDpClient() {
    console.log("reached 1");
    //if (this._electronService.isElectronApp) {
    const rdpParam = {
      hostName: this.ip_address,
      username: this.username,
      password: this.password
    };

    console.log("reached 2");
    this.backendService.runRdpClient(this.ip_address, this.username, this.password);
    //ipcRenderer.send('rdp', rdpParam);
  }

  //}


}
