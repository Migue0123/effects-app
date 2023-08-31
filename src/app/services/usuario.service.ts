import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Usuario } from '../models/usuarios.model';

interface Res {
  data: Usuario[];
  page: number;
  per_page: number;
  support?: {};
  total: number;
  total_pages: number;
}

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Res> {
    return this.http.get<Res>(`${this.url}/users`).pipe(map((res) => res));
  }
}
