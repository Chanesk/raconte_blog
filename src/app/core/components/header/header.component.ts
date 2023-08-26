import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Observable, filter, map } from 'rxjs';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  icon = faBars;
  faXmark = faXmark;
  isShowNav = true;
  current$!: Observable<string>;
  token!: string |null
  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.current$ = this.router.events.pipe(
      filter(event=> event instanceof NavigationEnd),
      map(()=> this.router.url)
    );
    this.token=this.tokenService.getToken();
  }
  toggleDisplayNav() {
    this.isShowNav = !this.isShowNav;
  }
  onSeconnecter() {
    this.router.navigateByUrl('seconnecter');
  }
}
