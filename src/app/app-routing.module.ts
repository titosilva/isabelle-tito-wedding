import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftsPageComponent } from './components/gift/gifts-page/gifts-page.component';
import { MainPageComponent } from './components/main-page/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'gifts', component: GiftsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
