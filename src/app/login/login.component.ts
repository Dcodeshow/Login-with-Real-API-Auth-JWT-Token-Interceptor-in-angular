import { Component, inject } from '@angular/core';
import { LoginModal } from '../Modal/loginModal';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  logindetails: LoginModal = new LoginModal();
  _myservice: MyserviceService = inject(MyserviceService);
  router = inject(Router);
  error: string = '';
  constructor() {}

  onSubmit() {
    const loginData = this.logindetails;
    this._myservice.login(loginData).subscribe((res: any) => {
      if (res.result) {
        this.router.navigate(['dashboard']);
        localStorage.setItem('token', res.data.token);
      } else {
        this.error = res.message;
      }
    });
  }
}
