
import { environment } from 'src/environments/environment'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { Docente } from '../_model/docente';

@Injectable({
  providedIn: 'root'
})

export class DocenteService {

  constructor(private router: Router, private http: HttpClient) { }

  getAllDocenti(){
    return this.http.get<any>(`${environment.apiUrl}/docente/getDocenti`);
  }

  createDocente(docente: Docente){
    return this.http.post(`${environment.apiUrl}/docente/nuovoDocente`, docente);
  }

  deleteDocente(id:any){
    return this.http.delete<any>(`${environment.apiUrl}/docente/${id}`);
  }

  updateDocente(docente:Docente){
return this.http.put(`${environment.apiUrl}/docente/modificaDocente`, docente);
  }

}
