import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { UserService } from '../services/user';
import { userModule } from '../services/user.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, Toast],
  providers: [MessageService],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit{

  constructor(private messageService: MessageService, private userService: UserService, private router: Router) {
     }

  ngOnInit() {
    const user = sessionStorage.getItem('user');
    if (user) {
      this.router.navigate(['/dashboard']);
    }
  }
    login(form: NgForm){
    console.log(form.value);
    this.userService.getUserByEmail(form.value.email).subscribe(user => {
      if (user != null) {
        if (user.password === form.value.password) {
          this.showSuccess();
          sessionStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/dashboard']);
        } else {
          this.showError();
        }
      } else {
        this.showError();
      }
    });
  }

  showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'login in ' });
  }
  showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Email or password is wrong' });
    }
}
