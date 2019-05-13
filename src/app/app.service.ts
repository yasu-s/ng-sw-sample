import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getVersion(): Observable<string> {
    return this.http.get<{ version: string }>('./api/data.json').pipe(map(d => d.version));
  }
}
