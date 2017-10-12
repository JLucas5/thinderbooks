import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { ListagemUsuarioComponent } from './listagemUsuario/listagemUsuario.component';

const appRoutes: Routes = [

    { path: '', component: ListagemComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastro/:id', component: CadastroComponent },
    { path: 'usuario', component: ListagemUsuarioComponent },
    { path: '**', component: ListagemComponent }
];

export const routing = RouterModule.forRoot(appRoutes);