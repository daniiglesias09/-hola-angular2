System.register(["@angular/plataform-browser-dynamic"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var plataform_browser_dynamic_1, HolaAngularComponent;
    return {
        setters: [
            function (plataform_browser_dynamic_1_1) {
                plataform_browser_dynamic_1 = plataform_browser_dynamic_1_1;
            }
        ],
        execute: function () {
            HolaAngularComponent = /** @class */ (function () {
                function HolaAngularComponent() {
                }
                HolaAngularComponent.prototype.contructor = function () {
                    this.saludo = '¡hola Angular 2!';
                };
                HolaAngularComponent = __decorate([
                    Component({
                        selector: 'hola-angular',
                        template: '<h1> {{saludo}} </h1>'
                    })
                ], HolaAngularComponent);
                return HolaAngularComponent;
            }());
            plataform_browser_dynamic_1.bootstrap(HolaAngularComponent); //componente es bootstrapped!
        }
    };
});
