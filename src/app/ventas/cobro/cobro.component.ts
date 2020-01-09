import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cobro',
  templateUrl: './cobro.component.html',
  styleUrls: ['./cobro.component.css']
})
export class CobroComponent implements OnInit {

  metodoPago = 'Efectivo';
  cuotas = 1;
  vendedor = '';


  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;



  constructor(public dialogRef: MatDialogRef<CobroComponent>) {
    // dialogRef.disableClose = true;
  }

  ngOnInit() {

  }


  public onValChange(val: string) {
    this.metodoPago = val;

  }

}
