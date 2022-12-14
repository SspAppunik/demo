import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<any>("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
  }
}
