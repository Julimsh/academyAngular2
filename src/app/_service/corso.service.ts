import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment'
import { Corso } from '../_model/corso';

@Injectable({
  providedIn: 'root'
})

export class CorsoService {

  constructor(private router: Router, private http: HttpClient) { }

  getAllCorsi(){
return this.http.get<any>(`${environment.apiUrl}/corso`);
  }

  createCorso(corso: Corso){
    return this.http.post(`${environment.apiUrl}/corso/nuovoCorso`, corso);
  }

  deleteCorso(id:any){
    return this.http.delete<any>(`${environment.apiUrl}/corso/${id}`);
  }

  updateDocente(corso: Corso){
  return this.http.put(`${environment.apiUrl}/corso/modificaCorso`, corso);
  }

}
