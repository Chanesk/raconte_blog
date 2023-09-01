import { Component, Input } from '@angular/core';
import { Raconte } from 'src/app/core/model/raconte.model';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { raconteService } from 'src/app/core/service/racontes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-raconte-recente',
  templateUrl: './raconte-recente.component.html',
  styleUrls: ['./raconte-recente.component.scss'],
})
export class RaconteRecenteComponent {
  @Input() raconte!: Raconte;

  constructor(private router: Router) {}

  icon = faArrowUpRightFromSquare;
  onViewRaconte() {
    this.router.navigateByUrl(`raconte/${this.raconte._id}`);
  }
}
