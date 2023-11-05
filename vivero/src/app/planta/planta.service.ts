import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planta } from './planta';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

constructor(private http: HttpClient) { }

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(environment.baseUrl)
  }
}
