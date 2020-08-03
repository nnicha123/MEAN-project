import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';
import 'rxjs/operator/map';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}
  getContacts() {
    return this.http.get('http//localhost:3000/api/contact');
  }
  addContacts(newContact) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    });
    return this.http.post('http//localhost:3000/api/contact', newContact, {
      headers,
    });
  }
  deleteContact(id) {
    return this.http.delete('http//localhost:3000/api/contact/' + id);
  }
}
