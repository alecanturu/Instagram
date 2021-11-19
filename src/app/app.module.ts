import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{provideFirebaseApp, getApp, initializeApp} from '@angular/fire/app';
import{getFirestore, provideFirestore} from '@angular/fire/firestore';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,  
     provideFirebaseApp(()=> initializeApp({
       apiKey: "AIzaSyBtlVRVEISZB0No9f5Ktb_1c-ggSx3c0_w",
     authDomain: "insta-lab-7036b.firebaseapp.com",
     projectId: "insta-lab-7036b",
     storageBucket: "insta-lab-7036b.appspot.com",
     messagingSenderId: "667416282588",
     appId: "1:667416282588:web:48a479e82e1e648f413b19"
     })),
     provideFirestore(()=> getFirestore())
    ],
    
 
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
