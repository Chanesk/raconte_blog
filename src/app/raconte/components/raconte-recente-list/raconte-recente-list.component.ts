import { Component, OnInit } from '@angular/core';
import { Observable, map} from 'rxjs';
import { Raconte } from 'src/app/core/model/raconte.model';
import { raconteService } from 'src/app/core/service/racontes.service';

@Component({
  selector: 'app-raconte-recente-list',
  templateUrl: './raconte-recente-list.component.html',
  styleUrls: ['./raconte-recente-list.component.scss']
})
export class RaconteRecenteListComponent implements OnInit{
  racontes$!:Observable<Raconte[]>;
  firstRecente$!: Observable<Raconte>;
  secondRecente$!: Observable<Raconte[]>
  constructor(private raconteService: raconteService){}

  ngOnInit(): void {
    this.racontes$ = this.raconteService
      .getAllRaconte()
      .pipe(map((value) => value.slice(-4)));
    this.firstRecente$ = this.racontes$.pipe(map((recente) => recente[0]));
    this.secondRecente$ = this.racontes$.pipe(map((value) => value.slice(1)));
    
  }


}
