import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VentaDia } from 'src/app/interfaces/ventadia.interface';


@Component({
  selector: 'app-ventas-dia',
  templateUrl: './ventas-dia.component.html',
  styleUrls: ['./ventas-dia.component.css']
})
export class VentasDiaComponent implements OnInit {

  ventadia$: VentaDia[];
  fecha: string;
  datosDia: object;
  loading = true;

  displayedColumns = ['timeStamp', 'metodoPago', 'nroComprobante', 'cantCuotas', 'items', 'ventaTotal', 'ver'];

  constructor(private fs: FirebaseService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((resp: any) => {
      this.fecha = resp.params.id;
      this.fs.getVentaDia(this.fecha).subscribe((resp) => this.ventadia$ = resp);
    });
    this.fs.getDia(this.fecha).subscribe((resp: object) => { this.datosDia = resp; console.log(resp); this.loading = false; });
  }

}
