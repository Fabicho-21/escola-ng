import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoasVindas } from './boas-vindas/boas-vindas';
import {CidadeBlumenau} from "./cidade-blumenau/cidade-blumenau";
import {Indaial} from "./indaial/indaial";
import {RouterLink} from "@angular/router";
import {Navbar} from "./navbar/navbar"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, BoasVindas,CidadeBlumenau,Indaial,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('escola-ng');
}
