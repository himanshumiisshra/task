import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = 'https://54.169.128.208:8390/api/user/login';

  constructor(private http: HttpClient) {}

 myData() {
  return this.http.post<ProductComponent[]>;
}


  
}
