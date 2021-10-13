import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridDataComponent } from './components/grid-data/grid-data.component';

const routes: Routes = [
  { path: 'grid', component: GridDataComponent },
  { path: '',   redirectTo: '/grid', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
