import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  current$!: Observable<string>
  constructor(private router: Router){}
  ngOnInit(): void {
    this.current$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(()=> this.router.url)
    )
  }

}
