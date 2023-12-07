import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {

  // private readonly spreadsheetId = '1LsF7MYFY7jlv3BTC3ZiqfleMFW_8fviLfSW3eOhWiIc';
  // private readonly sheetName = 'Formulaire_de_contact';
  // private readonly apiKey = 'AIzaSyBihMAkixK9PZ-rmEQ5VNyBKJ6ybofMrwg';
  // private readonly addRowUrl = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${this.sheetName}:append?key=${this.apiKey}&valueInputOption=USER_ENTERED`;

  private readonly SHEET_ID = '1LsF7MYFY7jlv3BTC3ZiqfleMFW_8fviLfSW3eOhWiIc';
  private readonly API_KEY = 'AIzaSyB3D7kLg12DMLCMw1_M5p-VMx4jmhlMcko';

  constructor(private http: HttpClient ) { }

  public addContact(formData: any): Observable<any> {
    const values = [formData.nom, formData.prenom, formData.email, formData.sujet, formData.message];
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.SHEET_ID}/values/A1:append?valueInputOption=RAW&key=${this.API_KEY}`;
    // const values = Object.values(formData);
    const data = {
      values: [values]
    };

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // });

    return this.http.post(url, data);
  }
}