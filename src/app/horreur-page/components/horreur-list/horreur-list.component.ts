import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Raconte } from 'src/app/core/model/raconte.model';
import { raconteService } from 'src/app/core/service/racontes.service';

@Component({
  selector: 'app-horreur-list',
  templateUrl: './horreur-list.component.html',
  styleUrls: ['./horreur-list.component.scss']
})
export class HorreurListComponent implements OnInit{
  racontes$!:Observable<Raconte[]>;
  constructor(private RaconteService: raconteService){}

  ngOnInit(): void {
    this.racontes$ = this.RaconteService.getAllRaconte().pipe(
      map((racontes) =>
        racontes.filter(
          (raconte: Raconte) => raconte.category.name === 'horreur'
        )
      )
    );
  }
}
