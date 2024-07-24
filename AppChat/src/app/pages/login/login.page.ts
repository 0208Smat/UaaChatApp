import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from 'src/app/interfaces/login';
import { LoginService } from 'src/app/services/login.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  password: string = "";
  username: string = "";

  constructor(private router: Router, private loginService: LoginService, private toastController: ToastController) {}

  login() {
    console.log('Intentando iniciar sesión con:', this.username, this.password);
    
    const req: LoginRequest = {
      username: this.username,
      password: this.password
    };
  
    const reqObservable: Observable<LoginResponse> = this.loginService.doLogin(req);
  
    var isLoginOk = false;
    
    // Si la verificación es correcta, redirige a la selección de sala de chat, sino muestra mensaje de error
    reqObservable.subscribe({
      next: (response: LoginResponse) => {
        console.log('login POST Response:', response);
        isLoginOk = response.message == "success";
        localStorage.setItem("username", this.username);
  
        this.router.navigate(['/chat-selection']);
      },
      error: async (error) => {
        console.error('login POST Error:', error);
        const toast = await this.toastController.create({
          message: 'Credenciales inválidas. Por favor, inténtelo de nuevo.',
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      },
      complete: () => {
        console.log('login POST Request Completed, isLoginOk: '+ isLoginOk);
      }
    });
    
  }
}