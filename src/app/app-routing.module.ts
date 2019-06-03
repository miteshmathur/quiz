import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';

const routes: Routes = [
  { path: '', redirectTo: 'page-1', pathMatch: 'full' },
  { path: 'page-1', component: PageOneComponent },
  { path: 'page-2', component: PageTwoComponent },
  { path: 'page-3', component: PageThreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
