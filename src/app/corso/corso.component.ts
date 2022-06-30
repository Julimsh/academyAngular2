import { CorsoService } from './../_service/corso.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corso',
  templateUrl: './corso.component.html',
  styleUrls: ['./corso.component.scss']
})
export class CorsoComponent implements OnInit {
  isLoadingData = true;

  constructor(private corsoService: CorsoService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.getAllCorsi();
  }

  getAllCorsi() {
      this.corsoService.getAllCorsi().subscribe(corso => {
      this.isLoadingData = false
      //this.corsi = corso
      this.ref.detectChanges;
    });
  }

}
