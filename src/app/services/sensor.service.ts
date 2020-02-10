import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ConfigService } from './config/config.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders()
  .set('Content-Type', 'application/json; charset=utf-8')
  .set('Access-Control-Allow-Origin-Type', '*');

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  sensorUrl: string;

  constructor(
    private http_s: HttpClient,
    private urlService: ConfigService
    ) {
    this.sensorUrl = this.urlService.getUrl() ;
    console.log('this.sensorUrl', this.sensorUrl)
  }
  getSensorbyzone(zone:string,camera:string,sensor:string): Observable<any> {
    let url = `${this.sensorUrl}/sensor?`;
    console.log('la url', url)
    if (zone) { url += `zone=${zone}`;}
    if (camera) {  url += `&camera=${camera}`;}
    if (sensor) {  url += `&sensor=${sensor}`;}
    
    return this.http_s.get(url, { headers }).pipe(map((res: any) => res as any));
  }
}
