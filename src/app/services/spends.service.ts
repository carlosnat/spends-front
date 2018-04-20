import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpendsService {

  private baseUrl = 'https://spends-api.herokuapp.com/';
  // private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getFamilies () {
    return this.http.get(`${this.baseUrl}family`);
  }

  createFamily (family) {
    return this.http.post(`${this.baseUrl}family`, family);
  }

  createGroup(idFamily, group) {
    const apiUrl = `${this.baseUrl}family/spendgroup/${idFamily}`;
    return this.http.post(apiUrl, group);
  }

  createCategory(idFamily, category) {
    const apiUrl = `${this.baseUrl}family/spendcategory/${idFamily}`;
    return this.http.post(apiUrl, category);
  }

  createSpend(idFamily, spend) {
    const apiUrl = `${this.baseUrl}family/spend/${idFamily}`;
    return this.http.post(apiUrl, spend);
  }

}
