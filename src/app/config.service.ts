import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {

  ip_mct: string;
  ip_mu1: string;
  ip_ipc: string;
  documentation_url: string;

  static get DEFAULT_IP_MCT() {
    return '192.168.1.1';
  }

  static get DEFAULT_IP_MU1() {
    return '192.168.1.1';
  }

  static get DEFAULT_IP_IPC() {
    return '192.168.1.1';
  }

  public getRemoteIp(machineName: string) : string {
    switch (machineName) {
      case 'mct':
        return this.ip_mct;
      case 'mu1':
        return this.ip_mu1;
      case 'ipc':
        return this.ip_ipc;
      default:
        throw throwError('Incorrect machine name');
    }
}


constructor() { }
}
