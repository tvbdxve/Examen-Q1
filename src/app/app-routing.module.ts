import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './componentes/component1/component1.component';
import { Component2Component } from './componentes/component2/component2.component';
import { Component3Component } from './componentes/component3/component3.component';

const routes: Routes = [ 
  {
    path: '1'
  },
  {
    path: '2'
  }
];

@NgModule({

})
export class AppRoutingModule { }
