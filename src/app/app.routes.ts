import { Routes } from '@angular/router';
import { WorldMapComponent } from './world-map/world-map.component';


//  Redirect default to /map
export const routes: Routes = [
    { path: 'map', component: WorldMapComponent },
    { path: '', redirectTo:'/map', pathMatch:'full'}
];
