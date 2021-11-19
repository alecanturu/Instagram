import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { PublicacionesComponent } from '../publicaciones/publicaciones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { LikesComponent } from '../likes/likes.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ReactiveFormsModule,
    
  ],
  declarations: [Tab1Page, PublicacionesComponent,LikesComponent ]
})
export class Tab1PageModule {
   slideOpts={
    initialSlide:1,
    slidePerView:2,
    freemode:true,
    speed:400,
    coverflowEffect:{
      rotate:50,
      stretch:0,
      depth:100,
      modifier:1,
      slideShadows:true
    }
  }
  slidepostsOpts={
    initialSlide:1,
    speed:400,
    slidesPerView:2,
    freeMode:true,
    coverflowEffect:{
      rotate:50,
      stretch:0,
      depth:100,
      modifier:1,
      slideShadows:true
    }
    }
  
  constructor(){

  };
}
