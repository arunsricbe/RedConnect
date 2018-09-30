import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()

export class Service {

    constructor(private http: Http){}
    // getNotification(params) {
    //     let endpoint = "Users/ProfileSummaries";
    //     let headers = new Headers({
    //       'enctype': 'multipart/form-data',
    //     });
    //     let options = new RequestOptions({ headers: headers });
    //     return this.http.post(endpoint, params, options).map(response => {
    //       console.log("response",response)
    //     })
    //       .catch((error: any) => {
    //         return Observable.throw(error || 'Server error')
    //       }
    //       );
    //   }
    //   requestBlood() {     
    //     let endpoint = "http://ee8c86b1.ngrok.io/api/notification/1"; ///Taggable";
    //     let headers = new Headers({
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json',
    //    });
    //     let options = new RequestOptions({ headers: headers });
    //     return this.http.get(endpoint, options).map(response => {
    //      console.log("response",response)
    //     })
    //       .catch((error: any) => {
    //         console.log(error);
    //         return Observable.throw(error || 'Server error')
    //       }
    //       );
    //   }
}