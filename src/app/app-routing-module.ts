import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "comicssimple", component: ComicsSimpleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
