import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-esxi',
  templateUrl: './esxi.component.html',
  styleUrls: ['./esxi.component.css']
})
export class EsxiComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

}
