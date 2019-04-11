import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service';
import {config} from 'rxjs';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})

export class DocumentationComponent implements OnInit {

  docUrlBase: string;

  constructor(private configService: ConfigService)
  {
    this.docUrlBase = configService.documentation_url;
    console.log('using documentation url root of: ' + this.docUrlBase);
  }

  ngOnInit() {
  }

}
