import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://reqres.in/api/users?';

  buscarUsuarios(page: number){
    return this.http.get(`${this.url}?page=${page}`);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private http: HttpClient) {}


}
