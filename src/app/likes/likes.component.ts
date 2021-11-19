import { Component,Output, OnChanges, Input} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss'],
})
export class LikesComponent implements OnChanges {
  @Input() post: any[];
  @Output() post_back: any;


  _like: boolean =false;

  like(): void {
    this._like = !this._like;
    console.log(this._like + " Me gusta");
  }
  @Output() liked: EventEmitter<boolean>=new EventEmitter<boolean>();
  onClick(): void{
    this.like();
    this.liked.emit(this._like);
  }

  constructor() { }

  ngOnChanges(){

  }

}
