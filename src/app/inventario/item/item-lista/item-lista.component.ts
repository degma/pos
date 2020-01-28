import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';


@Component({
  selector: 'app-item-lista',
  templateUrl: './item-lista.component.html',
  styleUrls: ['./item-lista.component.css']
})
export class ItemListaComponent implements OnInit {

  constructor(private firestoreService: FirebaseService) { }

  ngOnInit() {
  }

}
