import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class N8nCommunicationService {
  private apiUrl = 'http://localhost:5678/webhook-test/e3369e1f-055e-4a12-a717-8c9e6ca32187';
  recipes: any = [];

  constructor(private http: HttpClient) {}

  sendIngredients(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
