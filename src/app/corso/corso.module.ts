import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorsoRoutingModule } from './corso-routing.module';
import { CorsoComponent } from './corso.component';
import { TableModule } from 'primeng/table';
import { NuovoCorsoComponent } from './nuovo-corso/nuovo-corso.component';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [CorsoComponent, NuovoCorsoComponent],
  imports: [
    CommonModule,
    CorsoRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule
  ]
})
export class CorsoModule { }
