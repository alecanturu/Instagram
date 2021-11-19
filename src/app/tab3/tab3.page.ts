import { Component } from '@angular/core';
import datosUsuario from '../../feed.json'
interface Usuario{
  nombre:String;
  seguidores: number;
  siguiendo:number;
  bio:String;
  avatar:String;
  publicaciones: Array<String>;
  posts:number;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
    posts = 10;
    followers= 20000;
    following= 12;
    avatar='../../assets/images/3.png'
    descripcion= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nobis dolor molestiae ab repudiandae harum enim, delectus ullam voluptatum nihil iure totam velit consectetur dicta nulla optio perferendis deleniti quaerat.';
  postsUrls=[
    '1.jpg',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
  ];
  esUser=false;
  
  usuario: Usuario= datosUsuario.usuario;

  constructor() {}

}
