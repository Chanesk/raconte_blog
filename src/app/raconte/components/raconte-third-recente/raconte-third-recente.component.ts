import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Raconte } from 'src/app/core/model/raconte.model';
import { raconteService } from 'src/app/core/service/racontes.service';

@Component({
  selector: 'app-raconte-third-recente',
  templateUrl: './raconte-third-recente.component.html',
  styleUrls: ['./raconte-third-recente.component.scss'],
})
export class RaconteThirdRecenteComponent {
  @Input() raconte!: Raconte;
  constructor(private router: Router) {}

  onViewRaconte() {
    this.router.navigateByUrl(`raconte/${this.raconte._id}`);
  }
}
