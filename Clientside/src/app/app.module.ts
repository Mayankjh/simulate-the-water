import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule,Nav} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RainPage } from '../pages/rain/rain';
import { PopulationPage } from '../pages/population/population';
import { PopDenPage } from '../pages/pop-den/pop-den';
import { WaterPage } from '../pages/water/water';
import { SosPage } from '../pages/sos/sos';
import { WhatsosPage } from '../pages/whatsos/whatsos';
import { DispPage } from '../pages/disp/disp';
import { RefugPage } from '../pages/refug/refug';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppProvider } from '../providers/app/app';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WaterPage,
    PopDenPage,
    PopulationPage,
    RainPage,
    SosPage,
    WhatsosPage,
    DispPage,
    RefugPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  exports: [
    IonicModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WaterPage,
    PopDenPage,
    PopulationPage,
    RainPage,
    SosPage,
    WhatsosPage,
    DispPage,
    RefugPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppProvider
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
