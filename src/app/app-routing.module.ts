import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphLayoutComponent } from './graph-layout/graph-layout.component';


const routes: Routes = [
  {path:'', component: GraphLayoutComponent},

  {path:'graph', component: GraphLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
