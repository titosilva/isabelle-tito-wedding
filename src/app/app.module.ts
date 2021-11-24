import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageOurPhotoComponent } from './components/main-page/main-page-our-photo/main-page-our-photo.component';
import { MainPageComponent } from './components/main-page/main-page/main-page.component';
import { WeddingPresentationComponent } from './components/main-page/wedding-presentation/wedding-presentation.component';
import { WeddingDateDisplayComponent } from './components/main-page/wedding-date-display/wedding-date-display.component';
import { GiftsPageComponent } from './components/gift/gifts-page/gifts-page.component';
import { PixInfoDialogComponent } from './components/dialogs/pix-info-dialog/pix-info-dialog.component';
import { GiftsListComponent } from './components/gift/gifts-list/gifts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageOurPhotoComponent,
    MainPageComponent,
    WeddingPresentationComponent,
    WeddingDateDisplayComponent,
    GiftsPageComponent,
    PixInfoDialogComponent,
    GiftsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
