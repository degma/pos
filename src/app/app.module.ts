import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { InventarioModule } from './inventario/inventario.module';
import { VentasModule } from './ventas/ventas.module';
import { DashboardModule } from './dashboard/dashboard.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// importar locales
import localeEsAR from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';

// registrar los locales con el nombre que quieras utilizar a la hora de proveer

registerLocaleData(localeEsAR, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AppRoutingModule,
    InventarioModule,
    VentasModule,
    DashboardModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-Ar' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
