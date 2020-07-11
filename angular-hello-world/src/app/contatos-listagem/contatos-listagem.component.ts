import { Component, OnInit } from '@angular/core';
import { ContatoService } from  '../contato.service';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {


  contatos: Array<any>;

  //contatos = [
  //  { id: 1, nome: 'Alexandre', email: 'alexandre@gmail.com'},
  //  { id: 2, nome: 'Thiago', email: 'thiago@gmail.com'}
  //]

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.listar()
  }

  listar(){
    this.contatoService.listar().subscribe(dados => this.contatos = dados);

  }

}
