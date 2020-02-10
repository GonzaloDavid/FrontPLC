import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  initApp() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`[WAIT]`);
        resolve();
      }, 1);
    });
  }
  
  configApiBaseUrl() {
    return new Promise((resolve, reject) => {
      if (environment.production) {
        console.log('[PROD]');
        this.http.get('/assets/config.json').subscribe((res: any) => {
          const config = res;
          localStorage.setItem('apiBaseUrl', config.apiBaseUrl);
          resolve();
        });
      } else {
        console.log('[DEV]');
        localStorage.setItem('apiBaseUrl', environment.apiBaseUrl);
        resolve();
      }
    });
  }

  getUrl() {
    return localStorage.getItem('apiBaseUrl');
  }
}
