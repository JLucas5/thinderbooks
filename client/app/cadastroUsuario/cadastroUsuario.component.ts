import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastroUsuario',
    templateUrl: './cadastroUsuario.component.html'
})
export class CadastroUsuarioComponent { 

    usuario: UsuarioComponent = new UsuarioComponent();
    meuForm: FormGroup;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(fb: FormBuilder, route: ActivatedRoute, router: Router){
            this.meuForm = fb.group({
            nome: ['', Validators.required],
            sobrenome: ['', Validators.required],
            email: ['', Validators.required],
            dataNascimento: ['', Validators.required]
        });
    }

    cadastrar(event) {

        event.preventDefault();

        console.log(this.usuario);
       
    }

}