import { Component, OnInit, Output} from '@angular/core';
import feed from '../../feed.json';
import { Firestore,collectionData, collection } from '@angular/fire/firestore';
import { observable } from 'rxjs';
export interface Publicaciones{
  id: number;
  usuario: String;
  //imagenPost: String;
  //avatarUser: String;

  descripcion:String;
  likes: number;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  
  
 // @Output() posts: Publicaciones[]= feed.feed;
  usuarios$: Observable<any[]>
  
  constructor(private db: Firestore) {
    //const base_datos = bd.;
  }
  ngOnInit(){
    const post = collection(this.db, 'publicaciones');
    this.usuarios$ = collectionData(collection);
    this.db.collection('publicaciones').valueChanges()
    .subscribe(valor =>console.log(valor));
  }


}
