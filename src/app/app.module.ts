import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HeaderComponent} from "./header/header.component";
import {LogoPopupComponent} from "./logo-popup/logo-popup.component";
import {HeaderMobileComponent} from "./header-mobile/header-mobile.component";
import {FooterComponent} from "./footer/footer.component";
import {CarouselComponent} from "./index/carousel/carousel.component";
import {CarouselCardsComponent} from "./index/arrows/carousel-cards/carousel-cards.component";
import {ArrowsComponent} from "./index/arrows/arrows.component";
import {SubBannerMaterialComponent} from "./index/sub-banner-material/sub-banner-material.component";
import {NewHeaderComponent} from "./new-header/new-header.component";
import {IndexComponentComponent} from "./index-component/index-component.component";
import {AboutComponent} from "./about/about.component";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {NotFoundComponent} from './not-found/not-found.component';
import {MatDividerModule} from "@angular/material/divider";
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        AppComponent,
        CarouselComponent,
        HeaderComponent,
        LogoPopupComponent,
        CarouselCardsComponent,
        FooterComponent,
        SubBannerMaterialComponent,
        ArrowsComponent,
        NewHeaderComponent,
        IndexComponentComponent,
        AboutComponent,
        HeaderMobileComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ScullyLibModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        FontAwesomeModule,
        NgbModule,
        MatCardModule,
        MatSidenavModule,
        MatDividerModule,
        RouterModule
    ],
    exports: [MatSidenavModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
