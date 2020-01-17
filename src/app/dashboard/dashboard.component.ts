import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase/firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cantidadArticulos: number;
  cantidadVentas: number;
  fechaCaja: Date;
  importeApertura: number;
  totalVentas: number;

  constructor(private fs: FirebaseService) { }

  ngOnInit() {
    this.fs.getApertura().subscribe((resp: any) => {
      this.cantidadArticulos = resp.cantidadArticulos;
      this.cantidadVentas = resp.cantidadVentas;
      this.fechaCaja = resp.timeStamp.toDate();
      this.totalVentas = resp.totalVentas;
    })
  }

}
