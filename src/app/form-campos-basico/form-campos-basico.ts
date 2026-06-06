import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-campos-basico',
  imports: [FormsModule],
  templateUrl: './form-campos-basico.html',
  styleUrl: './form-campos-basico.scss',
})
export class FormCamposBasico {
 //signal vamos utilizar para relacionar um campo por exepmlo o nome
  nome = signal<string>("");
  sobrenome = signal<string>("");
  resultadoNomeCompleto: string = "";

  numero01= signal<number | null>(null);
  numero02= signal<number | null>(null);
  operacao = signal<string>("");

  apresentarNomeCompleto() : void {
  const nomeCompleto: string = `${this.nome()} ${this.sobrenome()}`;

  this.resultadoNomeCompleto = nomeCompleto;
  
}

realizarCalculo() : void {
  if (this.numero01() === null) {
    alert("Por favor, preencha o campo Número 1.");
    return;
  }
  if (this.numero02() === null) {
    alert("Por favor, preencha o campo Número 2.");
    return;
  }
  if (this.operacao() === "somar") {
    const soma: number = this.numero01()! + this.numero02()!;
    alert(`Resultado: ${soma}`);
  } else if (this.operacao() === "subtrair") {
    const subtrair = this.numero01()! - this.numero02()!;
    alert(`Subtração: ${subtrair}`);
  } else if (this.operacao() === "multiplicar") {
    const multiplicacao = this.numero01()! * this.numero02()!;
    alert(`Multiplicação: ${multiplicacao}`);
  } else if (this.operacao() === "dividir") {
    const divisao = this.numero01()! / this.numero02()!;
    alert(`Divisão: ${divisao}`);
  } else {
    alert("Por favor, selecione uma operação válida.");
  }
    
}
}
