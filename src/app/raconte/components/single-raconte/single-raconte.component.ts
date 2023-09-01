import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Raconte } from 'src/app/core/model/raconte.model';
import { raconteService } from 'src/app/core/service/racontes.service';

@Component({
  selector: 'app-single-raconte',
  templateUrl: './single-raconte.component.html',
  styleUrls: ['./single-raconte.component.scss']
})
export class SingleRaconteComponent implements OnInit{
  racontes$!:Observable<Raconte>;
  constructor(private raconteService: raconteService,
              private route: ActivatedRoute){}
  ngOnInit(): void {
    const raconteId= this.route.snapshot.params['id'];
    console.log(raconteId);
    this.racontes$=this.raconteService.getRaconteById(raconteId)     
    
  }

}
