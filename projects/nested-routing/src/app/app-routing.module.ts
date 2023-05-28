import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';

const routes: Routes = [
  { 
    path: 'component-one', 
    component: ComponentOneComponent,
  },
  { 
    path: 'component-two',
    component: ComponentTwoComponent,
    outlet: 'second'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
