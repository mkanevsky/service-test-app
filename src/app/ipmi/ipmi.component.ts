import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-ipmi',
  templateUrl: './ipmi.component.html',
  styleUrls: ['./ipmi.component.css']
})
export class IpmiComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

}
