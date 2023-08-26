import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/core/service/token.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit{
  sub!: string | null;
  subForm!: FormGroup;
  emailRegex!: RegExp;
  constructor(private tokenService: TokenService,
              private formBuilder: FormBuilder ){}
  ngOnInit(): void {
    this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    this.subForm= this.formBuilder.group({
      email: [null,[Validators.pattern(this.emailRegex)]]
    })    
    
    this.sub=this.tokenService.getSub();
  }
  onSub(){
    this.tokenService.saveSub('mon email')
    this.sub = this.tokenService.getSub();
    console.log("salut");
    

  }

}
