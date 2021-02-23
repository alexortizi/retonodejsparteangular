import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Persona } from 'src/app/models/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  API_URL='http://localhost:3000'
  constructor(
    private http:HttpClient
  ) { }

  getPersonas(){
    return this.http.get(`${this.API_URL}/personas`);
  }

  getPersona(id:number){
    return this.http.get(`${this.API_URL}/personas/${id}`);
  }

  deletePersona(id:number){
    return this.http.delete(`${this.API_URL}/personas/${id}`);
  }

  savePersona(game:Persona){
    return this.http.post(`${this.API_URL}/personas/create/`,game);
  }

  updatePersona(id:number, updatedPersona:Persona):Observable<any>{
    return this.http.put(`${this.API_URL}/personas/${id}`,updatedPersona);
  }

  
}

