import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.page.html',
  styleUrls: ['./funcionarios.page.scss'],
})
export class FuncionariosPage {

  constructor(){
    this.getFuncionarios()
  }

  isLoading: boolean = false
  funcionarios: any = []

  getFuncionarios(){
    this.isLoading = true
    fetch('http://localhost/api/funcionarios/listar.php')
    .then(res => res.json())
    .then(dados => { this.funcionarios = dados['funcionarios'] })
    .catch(error => { console.log(error) })
    .finally(()=>{
      this.isLoading = false
      console.log('Funcionol!')
    })
  }
  
  removerFuncionario(CodFun: any){
    this.isLoading = true
    fetch('http://localhost/api/funcionarios/remover.php', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json',
      },
      body: JSON.stringify({ CodFun: CodFun }),

    })
    .then(res => res.json())
    .then(dados => { console.log(dados) })
    .catch(error => { console.log(error) }) 
    .finally(() => {
      this.isLoading = false
      console.log('Funcionol!')
    })
  }
}
