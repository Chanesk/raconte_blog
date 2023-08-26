import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Raconte } from 'src/app/core/model/raconte.model';

@Component({
  selector: 'app-horreur-article',
  templateUrl: './horreur-article.component.html',
  styleUrls: ['./horreur-article.component.scss'],
})
export class HorreurArticleComponent {
  @Input() raconte!: Raconte;
  constructor(private router: Router) {}

  icon = faArrowUpRightFromSquare;
  onViewRaconte() {
    this.router.navigateByUrl(`horreur/${this.raconte.id}`);
  }
}
