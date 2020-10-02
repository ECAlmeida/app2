import {Routes} from '@angular/router'
import { DiversaoComponent } from './diversao/diversao.component'
import {HomeComponent} from '/projetos/app2/src/app/home/home.component'
import {RestaurantesComponent} from '/projetos/app2/src/app/restaurantes/restaurantes.component'
//import {DiversaoComponent} from '/projetos/app2/src/app/diversao/diversao.component'


export const ROUTES: Routes = [
  {path:'', component : HomeComponent},
  {path:'restaurantes', component : RestaurantesComponent},
  {path:'diversao', component : DiversaoComponent}
]