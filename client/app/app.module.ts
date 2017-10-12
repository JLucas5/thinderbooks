import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LivroModule } from './livro/livro.module';
import { UsuarioModule } from './usuario/usuario.module';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { ListagemUsuarioComponent } from './listagemUsuario/listagemUsuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { routing }  from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotaoModule } from './botao/botao.module';
import { ModalModule } from './modal/modal.module';

@NgModule({
    imports: [ 
        BrowserModule, 
        LivroModule, 
        HttpModule, 
        PainelModule, 
        routing, 
        FormsModule, 
        ReactiveFormsModule,
        BotaoModule, 
        UsuarioModule,
        ModalModule
    ],
    declarations: [ AppComponent, CadastroComponent, ListagemComponent, ListagemUsuarioComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }