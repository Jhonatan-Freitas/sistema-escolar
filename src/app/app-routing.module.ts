import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'primbimestre', loadChildren: './primbimestre/primbimestre.module#PrimbimestrePageModule' },
  { path: 'segbimestre', loadChildren: './segbimestre/segbimestre.module#SegbimestrePageModule' },
  { path: 'tercbimestre', loadChildren: './tercbimestre/tercbimestre.module#TercbimestrePageModule' },
  { path: 'quartbimestre', loadChildren: './quartbimestre/quartbimestre.module#QuartbimestrePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
