import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web-components/home/home.component';
import { PageNotFoundComponent } from './web-components/page-not-found/page-not-found.component';
import { MapComponent } from './web-components/map/map.component';


const routes: Routes = [{ 
  path: '**', component: MapComponent, 
  children: [
    { path: '', component: PageNotFoundComponent }
  ] 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
