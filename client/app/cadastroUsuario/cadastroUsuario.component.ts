import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
    moduleId: module.id,
    selector: 'cadastroUsuario',
    templateUrl: './cadastroUsuario.component.html'
})
export class CadastroUsuarioComponent { 

    usuario: UsuarioComponent = new UsuarioComponent();
    meuForm: FormGroup;
    service: UsuarioService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(service: UsuarioService, fb: FormBuilder, route: ActivatedRoute, router: Router){

            this.service = service; 

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

        this.service
            .cadastra(this.usuario)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.usuario = new UsuarioComponent();
                if(!res.inclusao) this.router.navigate(['']);
            }, erro => console.log(erro));
       
    }

}