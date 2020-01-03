import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-item-editar',
  templateUrl: './item-editar.component.html',
  styleUrls: ['./item-editar.component.css']
})
export class ItemEditarComponent implements OnInit {

  itemForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.itemForm = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'descripcion': new FormControl(null),
      
    });
  }

  onSubmit(){
    console.log(this.itemForm.value)
  }

}
