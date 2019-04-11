import { Component } from '@angular/core';
import {ChildProcessService} from 'ngx-childprocess';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nova-util-angular';
  ip_mct = '192.168.1.72';
  ip_mu1 = '192.168.1.72';
  ip_ipc = '192.168.1.72';

  constructor(private _childProcessService: ChildProcessService) { }
}
