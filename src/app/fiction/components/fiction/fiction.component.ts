import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Raconte } from 'src/app/core/model/raconte.model';
import { raconteService } from 'src/app/core/service/racontes.service';

@Component({
  selector: 'app-fiction',
  templateUrl: './fiction.component.html',
  styleUrls: ['./fiction.component.scss']
})
export class FictionComponent implements OnInit{
  racontes!: Raconte[]
  constructor(private RaconteService: raconteService){}
  ngOnInit(): void {
    this.racontes= this.RaconteService.getAllRaconte();
  }

}
