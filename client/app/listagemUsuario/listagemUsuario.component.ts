import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
    moduleId: module.id,
    selector: 'listagemUsuario',
    templateUrl: './listagemUsuario.component.html'
})

export class ListagemUsuarioComponent {

    usuario: UsuarioComponent = new UsuarioComponent();

    constructor() {
        this.usuario.nome = "Natalia";
        this.usuario.sobrenome = "Marufuji aoki";
        this.usuario.email = "testeteste";
        this.usuario.dataNascimento = new Date();
        this.usuario._id = "1";
    }
 }