import { Injectable } from '@angular/core';
import {ChildProcessService} from 'ngx-childprocess';
import { ElectronService } from 'ngx-electron';
import {ipcRenderer} from 'electron';


@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor(private _electronService: ElectronService) {
    console.log("ElectronService: " + this._electronService);
  }

  openUrl(url: string) {

    if (this._electronService.isElectronApp) {
      this._electronService.ipcRenderer.send('url', url);
    }
  }

  runRdpClient(host: string, u: string, p: string) {

    if (this._electronService.isElectronApp) {
      const rdpParam = {
        hostName: host,
        username: u,
        password: p
      };

      console.log('sending: ' + rdpParam);
      this._electronService.ipcRenderer.send('rdp', rdpParam);
    }

    //const { ipcRenderer } = require('electron');

    //ipcRenderer.send('rdp');

    // const options: string[] = [host];
    // console.log(require.resolve('electron'));
    // const child = require('child_process');

    // child.spawn('rdesktop', [host]);

    // this._childProcessService.childProcess.exec('rdesktop ' + host,
    //                                           options,
    //                                           (data) => {console.log(data); });
  }

}
