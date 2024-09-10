import { Component } from '@angular/core';
import { UserModel } from '../../../models/users.models';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user!: UserModel;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = new UserModel();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.auth.login(this.user).subscribe(
      (data) => {
        Swal.close();
        this.router.navigateByUrl('/home');
      },
      (error) => {
        Swal.fire({
          allowOutsideClick: false,
          icon: 'error',
          position: 'top-end',
          title: error.error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
