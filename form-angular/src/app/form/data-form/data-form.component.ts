import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  user: any = {
    name: '',
    email:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user)
  }

}
