import { CorsoComponent } from './corso.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    data:{
      title: 'Corso'
    },

    children: [
      {
        path:'',
        component: CorsoComponent,
        data: {
          title: '',
        }
      },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorsoRoutingModule { }
