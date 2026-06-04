import { Routes } from '@angular/router';
import { Indaial } from './indaial/indaial';
import { CidadeBlumenau } from './cidade-blumenau/cidade-blumenau';

export const routes: Routes = [
    {path: "cidade/blumenau", loadComponent: () => CidadeBlumenau },
    {path: "cidade/indaial", loadComponent: () => Indaial }
];
