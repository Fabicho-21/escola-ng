import { Routes } from '@angular/router';
import { Indaial } from './indaial/indaial';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';
import { FormCamposBasico } from './form-campos-basico/form-campos-basico';

export const routes: Routes = [
    { path: "cidade/blumenau", loadComponent: () => CidadeBlumenau },
    { path: "cidade/indaial", loadComponent: () => Indaial },
    { path: "formulario/campos-basico", loadComponent: () => FormCamposBasico}
];
