import { Injectable } from '@angular/core';

import {ServiceElement} from './serviceElement'
import {RdpElement} from './rdpElement'


const ELEMENTS: ServiceElement[] = [
  new RdpElement('10.0.0.1','mct','mct',"MCT","Remote connection to the MCT machine"),
  new RdpElement('10.0.0.10','gmp1','gmp1',"MU1","Remote connection to the MU1 machine"),
  new RdpElement('10.0.0.11','gmp2','gmp2',"MU2","Remote connection to the MU2 machine")
];


@Injectable({
  providedIn: 'root'
})

export class RepositoryService {

  constructor() { }

  getServiceElements() : ServiceElement[] {
    return ELEMENTS;
  }
}
