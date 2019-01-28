import {ServiceElement} from './serviceElement';
import { setupRouter } from '@angular/router/src/router_module';

export class RdpElement extends ServiceElement {
    remoteIp: string;
    username: string;
    password: string;
    label: string;
    description: string;
    
    constructor(ip: string,u: string,p: string,label: string, description: string ) {
        super();

        this.remoteIp = ip;
        this.username = u;
        this.password = p;
        this.label = label;
        this.description = description;
    }
}