import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { JugadoresComponent } from './components/jugadores-component/jugadores-component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "comicssimple", component: ComicsSimpleComponent},
  {path: "comicsjson", component: ComicsJsonComponent},
  {path: "jugadores", component: JugadoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
