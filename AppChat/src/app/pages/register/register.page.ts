import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  register() {
    // Aquí puedes añadir la lógica para registrar el usuario
    console.log('Registro de usuario:', this.username, this.email, this.password);
    this.router.navigate(['/login']);
  }
}


