import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Activity } from '../data/dashboard-data';

@Injectable({
  providedIn: 'root',
})
export class ProfileServiceService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<any> {
    return this.httpClient.get('./assets/data.json');
    }

}
