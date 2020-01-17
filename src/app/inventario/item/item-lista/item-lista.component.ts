import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import Swal from 'sweetalert2';

import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Item } from 'src/app/interfaces/item.interface';

@Component({
  selector: 'app-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.css']
})
export class ItemListaComponent implements OnInit {

  items: any[] = [];
  loading = false;

  constructor(private firestoreService: FirebaseService) { }

  ngOnInit() {    

  }

}
