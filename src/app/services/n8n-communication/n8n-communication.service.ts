import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class N8nCommunicationService {
  // private apiUrl = 'http://localhost:5678/webhook-test/generate-recipe';
  private apiUrl = 'http://localhost:5678/webhook-test/3ef0fda8-06e9-467f-acbc-4aca5ab63544';

  constructor(private http: HttpClient) {}

  sendIngredients(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
