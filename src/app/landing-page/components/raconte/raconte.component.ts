import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Raconte } from 'src/app/core/model/raconte.model';

@Component({
  selector: 'app-raconte',
  templateUrl: './raconte.component.html',
  styleUrls: ['./raconte.component.scss'],
})
export class RaconteComponent {
  @Input() raconte!: Raconte;
  constructor(private router: Router) {}

  icon = faArrowUpRightFromSquare;
  onViewRaconte() {
    this.router.navigateByUrl(`raconte/${this.raconte._id}`);
  }
}
