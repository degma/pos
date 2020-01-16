import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-cobro',
  templateUrl: './cobro.component.html',
  styleUrls: ['./cobro.component.css']
})
export class CobroComponent implements OnInit {

  totalVenta = 0;
  cambio = 0;
  metodoPago = 'Efectivo';
  articulos: any[] = [];


  constructor(public dialogRef: MatDialogRef<CobroComponent>, @Inject(MAT_DIALOG_DATA) data, private firebaseService: FirebaseService) {
    // dialogRef.disableClose = true;
    this.totalVenta = data.total;
    this.articulos = data.articulos;
  }

  ventaForm = new FormGroup({
    ventaTotal: new FormControl(this.totalVenta),
    metodoPago: new FormControl(this.metodoPago, [Validators.required]),
    montoPago: new FormControl(this.totalVenta),
    cambioPago: new FormControl({ value: this.cambio, disabled: true }),
    cantCuotas: new FormControl(1),
    recargoCuotas: new FormControl(0),
    valCuotas: new FormControl(0),
    nroComprobante: new FormControl(''),
    articulos: new FormControl(this.articulos)
  });

  ngOnInit() {

  }

  public onValChange(val: string) {
    this.metodoPago = val;
    this.ventaForm.controls.montoPago.setValue(this.totalVenta);
    this.ventaForm.controls.cambioPago.setValue(this.totalVenta - this.ventaForm.controls.montoPago.value);

  }

  onChangeEfectivo(value: number) {

    this.ventaForm.controls.cambioPago.setValue(value - this.totalVenta);
  }

  onSubmit() {    
    
    this.ventaForm.controls.articulos.setValue(this.articulos);
    this.firebaseService.createVenta(this.ventaForm.value).then(resp => {
      Swal.fire({
        title: 'OK',
        text: 'Se actualizó correctamente',
        icon: 'success'
      })
    }).catch(resp => {
      Swal.fire({
        title: 'Error',
        text: resp,
        icon: 'error'
      });
    });
    console.warn(this.ventaForm.value);
  }


}
