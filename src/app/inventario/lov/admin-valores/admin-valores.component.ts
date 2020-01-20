import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-admin-valores',
  templateUrl: './admin-valores.component.html',
  styleUrls: ['./admin-valores.component.css']
})
export class AdminValoresComponent implements OnInit {

  categorias: object[] = [];
  generos: object[] = [];
  colores: object[] = [];
  talles: object[] = [];

  constructor(private fs: FirebaseService) { }

  ngOnInit() {
    this.fs.getLOV().subscribe((resp: any) => {
      resp.categorias.map(a => this.categorias.push(a))
      resp.generos.map(a => this.generos.push(a));
      resp.colores.map(a => this.colores.push(a));
      resp.talles.map(a => this.talles.push(a));
    });
  }

  

}
