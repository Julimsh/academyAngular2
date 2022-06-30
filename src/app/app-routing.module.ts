import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //   { path: '',
  //   component: HomeComponent,
  // },

  { path: '',
  component: NavbarComponent, //Diventa il "Padre" e viene ruotata su tutte le pagine

    children: [

      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule)
      },

      {
        path: 'docente',
        loadChildren: () =>
          import('./docente/docente.module').then((m) => m.DocenteModule)
      },

      {
        path: 'corso',
        loadChildren: () =>
          import('./corso/corso.module').then((m) => m.CorsoModule)
      },

    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
