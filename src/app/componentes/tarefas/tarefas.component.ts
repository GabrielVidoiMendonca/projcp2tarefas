import { Component } from '@angular/core';
import { Tarefa } from '../../interfaces/Tarefa';
import { TarefaServiceService } from './../../services/tarefa-service.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {
  tarefas:Tarefa[] = [];
  tarefaForm: FormGroup = new FormGroup({});

    constructor(private TarefaServiceService:TarefaServiceService, private formBuilder: FormBuilder){
      this.tarefaForm = this.formBuilder.group({
        titulo: ['', Validators.required],
        descricao: ['', Validators.required],
        data: ['', Validators.required]
      })
    }
    generateRandomString(length: number): string  {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }



    inserir(){
      if(this.tarefaForm.valid){
        const tarefaNovo: Tarefa = {
          titulo: this.tarefaForm.value.titulo,
          descricao: this.tarefaForm.value.descricao,
          data: this.tarefaForm.value.data,
          id: this.generateRandomString(6)
      }

      this.tarefaForm.reset()
      this.TarefaServiceService.adicionar(tarefaNovo)
      alert('Cadastrado com sucesso!')
    }
    else{
      alert('Preencha os campos corretamente!')
    }
    }

    listar():void{
      this.tarefas = this.TarefaServiceService.listar();
    }

  remover(id:string):void{
  this.TarefaServiceService.remover(id)
  alert('removido com sucesso')
  }

    ngOnInit():void{
      this.listar();
    }
  }

