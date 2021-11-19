import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Publicaciones } from '../tab1/tab1.page';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnChanges{
  @Input() posts: any[];
  @Input() postB: any;
  constructor() { 
  }

  /*getPost(filterBy: number):Publicaciones[]{
    return this.posts.filter((post:Publicaciones)=>
      post.id.includes(filterBy);
    )
  }*/

  
  tooglelike(){
    console.log("clicked! ")
  }
 

  ngOnChanges(){
    
  }
}
