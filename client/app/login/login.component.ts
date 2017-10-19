import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';
import { CustomValidation } from '../helper/CustomValidator';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent { 

    usuario: UsuarioComponent = new UsuarioComponent();
    meuForm: FormGroup;
    service: UsuarioService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(service: UsuarioService, fb: FormBuilder, route: ActivatedRoute, router: Router){
        this.meuForm = fb.group({
            usuario: [''],
            senha: ['']
        });
    }
    

}