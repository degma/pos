import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';
import { fstat } from 'fs';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AperturaComponent } from './caja/apertura/apertura.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  importeApertura: number;

  constructor(private fs: FirebaseService, public dialog: MatDialog) { }


  ngOnInit() {

  }

  onAbrirCaja() {

    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(AperturaComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        this.fs.addApertura(data.importe).then( resp => alert(resp))
      }
    )
    

  }


}
