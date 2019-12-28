import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './web-components/map/map.component';
import { HomeComponent } from './web-components/home/home.component';
import { PageNotFoundComponent } from './web-components/page-not-found/page-not-found.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {TabViewModule} from 'primeng/tabview';
import { ZonesComponent } from './web-components/zones/zones.component';
import { MainNavComponent } from './web-components/shared-component/main-nav/main-nav.component';
import { SidenavComponent } from './web-components/shared-component/main-nav/sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ItemsnavComponent } from './web-components/shared-component/main-nav/itemsnav/itemsnav.component';
import { HeaderComponent } from './web-components/shared-component/main-nav/header/header.component';
import { FooterComponent } from './web-components/shared-component/main-nav/footer/footer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ChambersComponent } from './web-components/chambers/chambers.component';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    PageNotFoundComponent,
    ZonesComponent,
    MainNavComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    ItemsnavComponent,
    ChambersComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MatTooltipModule,
    TabViewModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatExpansionModule,
    DialogModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ToastModule
    
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
