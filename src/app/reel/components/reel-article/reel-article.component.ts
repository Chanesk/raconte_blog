import { Component, Input } from '@angular/core';
import { Raconte } from 'src/app/core/model/raconte.model';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reel-article',
  templateUrl: './reel-article.component.html',
  styleUrls: ['./reel-article.component.scss'],
})
export class ReelArticleComponent {
  @Input() raconte!: Raconte;
  constructor(private router: Router) {}

  icon = faArrowUpRightFromSquare;
  onViewRaconte() {
    this.router.navigateByUrl(`reel/${this.raconte._id}`);
  }
}
