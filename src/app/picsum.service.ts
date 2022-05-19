import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PicsumService {
  constructor(private httpClient: HttpClient) {

  }
  getPicsum(pageno: number): Observable<any> {
    return this.httpClient.get('https://picsum.photos/v2/list?page='+ pageno+'&limit=8');
  }
}