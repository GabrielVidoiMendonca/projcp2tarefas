import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';


@Injectable({
  providedIn: 'root'
})
export class TarefaServiceService {

  constructor() { }

  tarefas:Tarefa[] = [
    
  ];


  listar():Tarefa[]{
    return this.tarefas;

  }
  remover(id:string){
    const tarefa = this.tarefas.find(t => t.id == id);

    if(tarefa){
      const index = this.tarefas.indexOf(tarefa);
      this.tarefas.splice(index, 1);

    }

  }

  adicionar(tarefa:Tarefa){
    this.tarefas.push(tarefa);

  }
}
