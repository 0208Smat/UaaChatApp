import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string | undefined;
  password: string | undefined;
  username: string | undefined;

  constructor(private router: Router) {}

  login() {
    // Aquí puedes añadir la lógica para verificar las credenciales del usuario
    console.log('Intentando iniciar sesión con:', this.email, this.password);

    //TODO acá deberíamos recuperar el nombre del usuario y guardarlo en vez del email
    localStorage.setItem("username", this.email || "");
    
    // Si la verificación es correcta, redirige a la selección de sala de chat
    this.router.navigate(['/chat-selection']);
  }
}
