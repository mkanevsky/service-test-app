import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-asset-forwarder',
  templateUrl: './asset-forwarder.component.html',
  styleUrls: ['./asset-forwarder.component.css']
})
export class AssetForwarderComponent implements OnInit {

  staticFileContents : string = 'Hey!';

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code. The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }

  processResultFile(response) {
    this.staticFileContents = 'Done1';
    console.log('Entered!');
    //console.log(response);
    //this.staticFileContents = response;
  }

  constructor(private httpClient: HttpClient,
              private route: ActivatedRoute,
              private router: Router) {


    // This is a temporary placeholder to work around inconsistencies in documentation html paths
    // DO NOT USE THIS IN PRODUCTION!!!
    console.log("Route: " + this.router.url);
    console.log('Retrieving: /assets/documentation' + this.router.url);

    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8');

    httpClient.get('/assets/documentation' + this.router.url,  { responseType:'text', headers: httpHeaders}).subscribe(this.processResultFile);
    //.pipe(      map(this.processResultFile),      catchError(this.handleError));
  }


  ngOnInit() {
  }

}
