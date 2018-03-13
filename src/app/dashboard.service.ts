import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions, Http, Headers, Response} from '@angular/http';
import {Router} from "@angular/router";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class GraphService {
    constructor(private _http: HttpClient, private router: Router) {

    }
  
     storeData(data: any) {
     const header = new Headers(
      {
        'Content-Type': 'application/json'
      });
     const datas=JSON.stringify(data);
            console.log("IN SERVICE",datas)
            return this._http.post('http://localhost:3000/storeData',{somekey:datas})
            
  }

     fetchData() {
        return this._http.get("http://localhost:3000/getInfo").map( data => {
            
            console.log("After Get()", data);
           // data.json();
           
            return data
        });
     }


}


 