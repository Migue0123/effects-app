import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuarios.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(public usuaService: UsuarioService) {}

  ngOnInit(): void {
    this.usuaService.getUsers().subscribe((users) => {
      console.log(users.data);
      this.usuarios = users.data;
    });
  }
}
