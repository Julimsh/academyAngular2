import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocenteService } from 'src/app/_service/docente.service';
import { Docente } from 'src/app/_model/docente';

@Component({
  selector: 'app-update-docente',
  templateUrl: './update-docente.component.html',
  styleUrls: ['./update-docente.component.scss']
})

export class UpdateDocenteComponent implements OnInit {

  docenti: Docente;
  form: FormGroup;
  loading = false;
  submitted = false;
  isLoadingData = true;

  id: any | null | undefined;

  constructor(
    private docenteService: DocenteService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.getDocenteById(this.id);

    this.form = this.formBuilder.group({
      id: ['0'],
      nomeDocente: [''],
      cognomeDocente: [''],
    });

  }

  getDocenteById(id:any){
    this.docenteService.getDocenteById(id)
    .subscribe(
      data => {
        this.form.patchValue(data)

        this.ref.detectChanges();
        this.isLoadingData = false;
      }
    )
  }

  onSubmit() {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.docenteService.updateDocente(this.form.value).subscribe()

          alert("Docente modificato con Successo!")
          this.router.navigate(['/docente'], { relativeTo: this.route });

  }

  goBack(){
    this.router.navigate(['/docente'])
  }

}
