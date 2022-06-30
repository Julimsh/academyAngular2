import { CorsoService } from './../_service/corso.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Corso } from '../_model/corso';

@Component({
  selector: 'app-corso',
  templateUrl: './corso.component.html',
  styleUrls: ['./corso.component.scss']
})
export class CorsoComponent implements OnInit {
  isLoadingData = true;
  corsi: Corso[];

  constructor(private corsoService: CorsoService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getAllCorsi();
  }

  getAllCorsi() {
      this.corsoService.getAllCorsi().subscribe(corso => {
      this.isLoadingData = false
      this.corsi = corso
      this.ref.detectChanges();
    });
  }

  // uploadDocente(){
//   this.docenteService.updateDocente(this.docenti).subscribe( docente => {
// this.isLoadingData = false;
//       // this.docenti =docente; // Serve epr caricare la tabella
// this.ref.detectChanges;
//   });
// }

  deleteDocente(id: number){
    console.log(id)
    this.corsoService.deleteCorso(id).subscribe( corso => {
      // console.log(corso)
      this.isLoadingData = false;
      this.corsi = corso; // Serve epr caricare la tabella
      this.ref.detectChanges;
    });
  }

}
