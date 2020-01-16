import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-apertura',
  templateUrl: './apertura.component.html',
  styleUrls: ['./apertura.component.css']
})
export class AperturaComponent implements OnInit {

  constructor(private fs: FirebaseService, public dialogRef: MatDialogRef<AperturaComponent>) { }

  aperturaForm = new FormGroup({
    importe: new FormControl(null, Validators.required)
  });

  ngOnInit() {
  }

  onAbrirCaja() {
    if (this.aperturaForm.invalid) {
      return;
    }
    this.dialogRef.close(this.aperturaForm.value);
  }

}
