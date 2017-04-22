import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DaneService {
  constructor (private http: Http) {}
  getCurDane(val){
    return this.http.get('https://api.fixer.io/latest?base='+val)
                    .map(res => res.json());
  }

}
