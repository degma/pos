import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ventas-dia-detalle',
  templateUrl: './ventas-dia-detalle.component.html',
  styleUrls: ['./ventas-dia-detalle.component.css']
})
export class VentasDiaDetalleComponent implements OnInit {

  fecha: string;
  idVenta: string;
  venta: any;
  loading = true;

  constructor(private fs: FirebaseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe((resp: any) => {
      this.fecha = resp.params.dia;
      this.idVenta = resp.params.idVenta;
      console.log(this.idVenta)
      this.fs.getVenta(this.fecha, this.idVenta).subscribe((resp) => { this.venta = resp; this.loading = false; });
    });
  }

}
