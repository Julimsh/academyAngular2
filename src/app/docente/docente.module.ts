import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocenteComponent } from './docente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { NuovoDocenteComponent } from './nuovo-docente/nuovo-docente.component';
import { UpdateDocenteComponent } from './update-docente/update-docente.component';

@NgModule({
  declarations: [DocenteComponent, NuovoDocenteComponent, UpdateDocenteComponent],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class DocenteModule { }
