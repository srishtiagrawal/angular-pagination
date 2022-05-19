
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { PicsumComponent } from './picsum/picsum.component';



const routes: Routes = [
  {
  path: 'picsum', component: PicsumComponent
  },
  {
    path: '#', component: AppComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}