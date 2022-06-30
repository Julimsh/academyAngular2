import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocenteComponent } from './docente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [DocenteComponent],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class DocenteModule { }
