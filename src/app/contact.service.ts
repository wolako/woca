import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  saveClient(client: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.url}/contact`, client)
    .pipe (
      catchError(error => {
        console.error('Erreur lors de l\'envoie du formulaire :', error);
        throw error;
      })
    );
  }
}
