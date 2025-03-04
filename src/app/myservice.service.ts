import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor(private http: HttpClient) {}

  login(data: any) {
    return this.http.post(
      'https://freeapi.miniprojectideas.com/api/User/Login',
      data
    );
  }
}
