import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAlbumService {

  constructor(private http : HttpClient) { }

  getAllAlbumData() : Observable<any> {
    const endpoint = 'environment.imageServicePrefixUri + createAlbum';
    return this.http.get(endpoint);
  }
}
