import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  user: any = {
    name: '',
    email:'',
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
   
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user)
  }

  consultaCEP(){
    console.log(this.user.cep)
    this.http.get(`https://viacep.com.br/ws/${this.user.cep}/json/`)
    .pipe(map((r:any) => r.json)).subscribe(r => console.log(r))
  }

}
