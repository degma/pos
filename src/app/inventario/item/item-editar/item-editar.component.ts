import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-item-editar',
  templateUrl: './item-editar.component.html',
  styleUrls: ['./item-editar.component.css']
})
export class ItemEditarComponent implements OnInit {

  itemForm: FormGroup;

  item: Item;

  constructor(private firestoreService: FirebaseService) { }

  ngOnInit() {

    this.itemForm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      descripcion: new FormControl(null),
      categoria: new FormControl(null),
      genero: new FormControl(null),
      fabricante: new FormControl(null),
      precio: new FormControl(0)
    });
  }

  onSubmit() {


    if (!this.itemForm.valid) {

      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    this.firestoreService.createItem(this.itemForm.value).then(() => {
      Swal.fire({
        title: 'OK',
        text: 'Se actualizó correctamente',
        icon: 'success'
      });
      this.itemForm.markAsPristine();
      this.itemForm.reset();
    });
  }
}
