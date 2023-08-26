import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Raconte } from 'src/app/core/model/raconte.model';


@Component({
  selector: 'app-fiction-article',
  templateUrl: './fiction-article.component.html',
  styleUrls: ['./fiction-article.component.scss'],
})
export class FictionArticleComponent {
  @Input() raconte!: Raconte;
  constructor(private router: Router) {}

  icon = faArrowUpRightFromSquare;
  onViewRaconte() {
    this.router.navigateByUrl(`fiction/${this.raconte.id}`);
  }
}
