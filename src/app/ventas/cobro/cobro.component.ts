import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
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
    dialogRef.disableClose = true;
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
    articulos: new FormControl(this.articulos),
    timeStamp: new FormControl('')
  });

  ngOnInit() {
    this.ventaForm.controls.montoPago.setValue(this.totalVenta);
  }

  public onValChange(val: string) {
    this.metodoPago = val;
    this.ventaForm.controls.montoPago.setValue(this.totalVenta);
    this.ventaForm.controls.cambioPago.setValue(this.totalVenta - this.ventaForm.controls.montoPago.value);

  }

  onChangeEfectivo(value: number) {

    this.ventaForm.controls.cambioPago.setValue(value - this.totalVenta);
  }

  onCancelar() {
    this.dialogRef.close({ venta: false });
  }

  onSubmit() {
    if (this.totalVenta > this.ventaForm.controls.montoPago.value) {
      return Swal.fire({
        title: 'Error',
        text: `El monto ingresado es menor al total de la venta ($ ${this.totalVenta})`,
        icon: 'error'
      });
    }

    this.ventaForm.controls.articulos.setValue(this.articulos);
    this.ventaForm.controls.ventaTotal.setValue(this.totalVenta);
    this.ventaForm.controls.cambioPago.setValue(this.cambio);
    this.ventaForm.controls.timeStamp.setValue( new Date());

    this.firebaseService.createVenta(this.ventaForm.value).then(resp => {      
      Swal.fire({
        title: 'OK',
        text: 'Se actualizó correctamente',
        icon: 'success'
      }).then((result) => {
        if (result.value) {
          this.dialogRef.close({ venta: true });
        }
      });
    }).catch(resp => {
      Swal.fire({
        title: 'Error',
        text: resp,
        icon: 'error'
      });
    });

  }


}
