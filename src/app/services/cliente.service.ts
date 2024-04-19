import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }
// lista que virá da API
// nesse exemplo vem do Cliente.ts
  clientes:Cliente[] = [
    {id: "teste1", nome: "Thiago"},
    {id: "teste2", nome:"Teste 2", telefone:"551192756492"}
  ];


  listar():Cliente[]{
    return this.clientes;

  }
  remover(id:string){
    const cliente = this.clientes.find(c => c.id == id);

    if(cliente){
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);

    }

  }

  adicionar(cliente:Cliente){
    this.clientes.push(cliente);
    
  }
}
