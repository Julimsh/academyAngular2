import { UpdateDocenteComponent } from './update-docente/update-docente.component';
import { NuovoDocenteComponent } from './nuovo-docente/nuovo-docente.component';
import { DocenteComponent } from './docente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {

    path:'',
    data:{
      title: 'Docente'
    },

    children: [
      {
        path:'',
        component: DocenteComponent,
        data: {
          title: '',
        }
      },

      {
        path:'nuovoDocente',
        component: NuovoDocenteComponent,
        data: {
          title: 'nuovoDocente',
        }
      },

      {
        path:'updateDocente/:id',
        component: UpdateDocenteComponent,
        data: {
          title: 'updateDocente',
        }
      },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
