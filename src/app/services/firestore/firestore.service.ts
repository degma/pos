import { Item } from './../../interfaces/item.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  public crearItem(data: Item) {
    return this.firestore.collection('items').add(data);
  }

  public getItems() {
    return this.firestore.collection('items').valueChanges();
  }
}
