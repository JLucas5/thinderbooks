"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var usuario_component_1 = require("../usuario/usuario.component");
var ListagemUsuarioComponent = /** @class */ (function () {
    function ListagemUsuarioComponent() {
        this.usuario = new usuario_component_1.UsuarioComponent();
        this.usuario.nome = "Natalia";
        this.usuario.sobrenome = "Marufuji aoki";
        this.usuario.email = "testeteste";
        this.usuario.dataNascimento = new Date();
        this.usuario._id = "1";
    }
    ListagemUsuarioComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listagemUsuario',
            templateUrl: './listagemUsuario.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], ListagemUsuarioComponent);
    return ListagemUsuarioComponent;
}());
exports.ListagemUsuarioComponent = ListagemUsuarioComponent;
//# sourceMappingURL=listagemUsuario.component.js.map