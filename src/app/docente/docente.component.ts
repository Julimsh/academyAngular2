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
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllDocenti();
  }

  getAllDocenti() {
      this.docenteService.getAllDocenti().subscribe(docente => {
        // console.log(docente)
      this.isLoadingData = false;
      this.docenti =docente; // Serve per caricare la tabella
      this.ref.detectChanges();
    });
  }

// createDocente(){
//   this.docenteService.createDocente(this.docenti).subscribe( docente => {
// this.isLoadingData = false;
// this.docenti =docente; // Serve epr caricare la tabella
// this.ref.detectChanges();
//   });
// }

// uploadDocente(){
//   this.docenteService.updateDocente(this.docenti).subscribe( docente => {
// this.isLoadingData = false;
//       // this.docenti =docente; // Serve epr caricare la tabella
// this.ref.detectChanges;
//   });
// }

deleteDocente(id: number){
  console.log(id)
  this.docenteService.deleteDocente(id).subscribe( docente => {
    console.log(docente)
    this.isLoadingData = false;
    this.docenti = docente; // Serve epr caricare la tabella
    this.ref.detectChanges;
  });
}


}
