import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Raconte } from 'src/app/core/model/raconte.model';
import { raconteService } from 'src/app/core/service/racontes.service';

@Component({
  selector: 'app-raconte-list',
  templateUrl: './raconte-list.component.html',
  styleUrls: ['./raconte-list.component.scss'],
})
export class RaconteListComponent {
  racontes$!: Observable<Raconte[]>;
  constructor(private raconteService: raconteService) {}

  ngOnInit(): void {
    this.racontes$ = this.raconteService.getAllRaconte();
  }
}
