import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CorsoService } from 'src/app/_service/corso.service';
import { Docente } from 'src/app/_model/docente';
import { DocenteService } from 'src/app/_service/docente.service';


@Component({
  selector: 'app-nuovo-corso',
  templateUrl: './nuovo-corso.component.html',
  styleUrls: ['./nuovo-corso.component.scss']
})
export class NuovoCorsoComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  isLoadingData = true;
  docenti: any = [];
  // docenti: Docente[];
  idDocente: any;

  cols: any[];


  constructor(
    // private location: Location,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ref: ChangeDetectorRef,
    private docenteService: DocenteService,
    private corsoService: CorsoService
  ) { }

  ngOnInit(): void {

    this.getAllDocenti();


    this.form = this.formBuilder.group({
      id: ['0'],
      nomeCorso: [''],
      durata: [''],
      dataInizio: [''],
      dataFine: [''],
      idDocente: ([''][this.docenti]),
    });
  }

  getAllDocenti() {
    this.docenteService.getAllDocenti()
      .subscribe(
        data => {
          this.docenti = data
        });
  }

  onSubmit() {

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.corsoService.createCorso(this.form.value).subscribe()
          alert("Corso correttamente inserito!")
          this.router.navigate(['/corso'], { relativeTo: this.route });

  }

  goBack(){
    this.router.navigate(['/corso'])
  }

}
