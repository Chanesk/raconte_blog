import { Component } from '@angular/core';
import { LoaderService } from 'src/app/core/service/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  constructor(public loader: LoaderService){}
}
