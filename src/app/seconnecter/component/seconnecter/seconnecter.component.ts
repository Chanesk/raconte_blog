import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/service/token.service';
import { UserService } from 'src/app/core/service/users.service';

@Component({
  selector: 'app-seconnecter',
  templateUrl: './seconnecter.component.html',
  styleUrls: ['./seconnecter.component.scss'],
})
export class SeconnecterComponent implements OnInit {
  raconteForm!: FormGroup;
  passwordRegex!: RegExp;
  emailRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private tokenService:TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=?-_*µ|!/]).*$/;
    this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    this.raconteForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegex)]],
      password: [
        null,
        [Validators.required, Validators.pattern(this.passwordRegex)],
      ],
    });
  }
  onSubmitUser(): void {
    this.userService.signin(this.raconteForm.value).subscribe(
      data => {
        this.tokenService.saveToken(data.token);
        window.location.reload()
      }
      )
      this.router.navigateByUrl('')
  }
}
