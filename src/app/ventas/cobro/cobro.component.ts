import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-cobro',
  templateUrl: './cobro.component.html',
  styleUrls: ['./cobro.component.css']
})
export class CobroComponent implements OnInit {

  totalVenta = 0;
  metodoPago = 'Efectivo';
  articulos: any[] = [];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;




  constructor(public dialogRef: MatDialogRef<CobroComponent>, @Inject(MAT_DIALOG_DATA) data) {
    // dialogRef.disableClose = true;
    this.totalVenta = data.total;
    this.articulos = data.articulos;
  }

  ventaForm = new FormGroup({
    metodoPago: new FormControl(this.metodoPago, [Validators.required]),
    cantCuotas: new FormControl(1),
    intCuotas: new FormControl(0),
    valCuotas: new FormControl(0),
    nroComprobante: new FormControl(''),
    ventaTotal: new FormControl(this.totalVenta),
    montoPago: new FormControl(this.totalVenta),
    cambioPago: new FormControl({ value: this.totalVenta, disabled: true }),
    articulos: new FormControl(this.articulos)
  });

  ngOnInit() {
    console.log(this.totalVenta)

  }




  public onValChange(val: string) {
    this.metodoPago = val;

  }

  onChangeEfectivo(value: number) {
    console.log(value)
  }

  onSubmit() {
    console.warn(this.ventaForm.value);
  }


}
