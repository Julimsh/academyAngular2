import { DocenteService } from './../../_service/docente.service';
import { Docente } from './../../_model/docente';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuovo-docente',
  templateUrl: './nuovo-docente.component.html',
  styleUrls: ['./nuovo-docente.component.scss']
})
export class NuovoDocenteComponent implements OnInit {

  docenti: Docente;
  form: FormGroup;
  loading = false;
  submitted = false;
  isLoadingData = true;

  constructor(

    private docenteService: DocenteService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    // this.getAllDocenti();
    this.form = this.formBuilder.group({
      id: ['0'],
      nomeDocente: [''],
      cognomeDocente: [''],
    });

  }

  onSubmit() {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.docenteService.createDocente(this.form.value).subscribe()

          alert("Docente inserito con Successo!")
          this.router.navigate(['/docente'], { relativeTo: this.route });
  }

  goBack(){
    this.router.navigate(['/docente']);
  }

}
