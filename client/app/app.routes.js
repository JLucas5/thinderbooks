"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var cadastro_component_1 = require("./cadastro/cadastro.component");
var cadastroUsuario_component_1 = require("./cadastroUsuario/cadastroUsuario.component");
var listagem_component_1 = require("./listagem/listagem.component");
var listagemUsuario_component_1 = require("./listagemUsuario/listagemUsuario.component");
var appRoutes = [
    { path: '', component: listagem_component_1.ListagemComponent },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: 'cadastro/:id', component: cadastro_component_1.CadastroComponent },
    { path: 'usuario', component: listagemUsuario_component_1.ListagemUsuarioComponent },
    { path: 'cadastroUsuario', component: cadastroUsuario_component_1.CadastroUsuarioComponent },
    { path: '**', component: listagem_component_1.ListagemComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map