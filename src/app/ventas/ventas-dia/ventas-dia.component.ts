import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ventas-dia',
  templateUrl: './ventas-dia.component.html',
  styleUrls: ['./ventas-dia.component.css']
})
export class VentasDiaComponent implements OnInit {

  ventadia$: any;
  fecha: string;

  constructor(private fs: FirebaseService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((resp: any) => {      
      this.ventadia$ = resp.params.id;
      this.fs.getVentaDia(this.ventadia$).subscribe( resp => console.log(resp))
    });
  }

}
