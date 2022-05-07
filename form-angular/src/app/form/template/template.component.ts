import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  formulario: FormGroup

  /* uma forma de iniciar a variavel form
  constructor() { 
    this.formulario = new FormGroup({
      name: new FormControl(''),
      email:new FormControl('')
    })
  }
*/

constructor(private form: FormBuilder) { 
  this.formulario = this.form.group({
    name: [''],
    email:['']
  })
}
  ngOnInit(): void {
  }

}
