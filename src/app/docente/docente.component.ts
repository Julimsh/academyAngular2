import { Router } from '@angular/router';
import { DocenteService } from './../_service/docente.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Docente } from '../_model/docente';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.scss'],
})
export class DocenteComponent implements OnInit {
  isLoadingData = true;
  docenti: Docente[];

  constructor(
    private docenteService: DocenteService,
    private ref: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllDocenti();
  }

  getAllDocenti() {
      this.docenteService.getAllDocenti().subscribe(docente => {
        // console.log(docente)
      this.isLoadingData = false;
      this.docenti = docente; // Serve per caricare la tabella
      this.ref.detectChanges();
    });
  }

  // Spostata (e rifatta) in nuovoDocente
// createDocente(){
//   this.docenteService.createDocente(this.docenti).subscribe( docente => {
// this.isLoadingData = false;
// this.docenti =docente; // Serve epr caricare la tabella
// this.ref.detectChanges();
//   });
// }

deleteDocente(id:any) {
  this.docenteService.deleteDocente(id)
  .subscribe(data => {
    this.getAllDocenti()
    this.ref.detectChanges();
  })
}

updateDocente(id:any) {
  this.router.navigate(['/docente/updateDocente/'+id]);
}


}
