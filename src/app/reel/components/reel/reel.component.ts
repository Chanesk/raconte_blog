import { Component, OnInit } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { Raconte } from 'src/app/core/model/raconte.model';
import { raconteService } from 'src/app/core/service/racontes.service';

@Component({
  selector: 'app-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.scss']
})
export class ReelComponent implements OnInit{
  racontes$!:Observable<Raconte[]>;
  constructor(private RaconteService: raconteService){}

  ngOnInit(): void {
    this.racontes$ = this.RaconteService.getAllRaconte().pipe(
      map((racontes) =>
        racontes.filter((raconte:Raconte) => raconte.category.name === 'fait réel')
      )
    );
  }

}
