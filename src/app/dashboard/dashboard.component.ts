import { Component, OnInit } from '@angular/core';
import { ServiceElement } from '../serviceElement';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  elements: ServiceElement[];

  constructor(private repoService: RepositoryService) { }
  
  ngOnInit() {
    this.getElements();
  }

  getElements() : void {
    this.elements = this.repoService.getServiceElements();
  }

}
