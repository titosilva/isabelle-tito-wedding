import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateContactCommand } from '../models/contact';
import { environment } from '../../environments/environment';

const apiRoute = 'contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private http: HttpClient,
  ) { }

  createContact(command: CreateContactCommand): Observable<void> {
    return this.http.post<void>(`${environment.api.server}/${apiRoute}`, command);
  }
}
