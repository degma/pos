import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';

import { MatDialog, MatDialogConfig } from '@angular/material';
import { AperturaComponent } from './caja/apertura/apertura.component';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  importeApertura: number;
  alert = false;
  apertura = { fecha: Date, importeInicial: 0 };

  constructor(private fs: FirebaseService, public dialog: MatDialog) { }


  ngOnInit() {
    this.fs.checkApertura().subscribe((resp: any) => {
      if (resp) {
        this.apertura.fecha = resp.timeStamp.toDate();
        this.apertura.importeInicial = resp.importeInicial.toFixed(2);
        this.alert = true;
      }
    });
  }

  onAbrirCaja() {

    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog.open(AperturaComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        this.fs.addApertura(data.importe).then(resp => alert(resp));
      }
    );

  }


}
