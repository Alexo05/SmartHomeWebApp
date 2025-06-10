import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { UserService } from '../services/user';
import { userModule } from '../services/user.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, Toast],
  providers: [MessageService],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register implements OnInit{

  constructor(private messageService: MessageService, private userService: UserService, private router: Router) {
   }
  ngOnInit() {
    const user = sessionStorage.getItem('user');
    if (user) {
      this.router.navigate(['/dashboard']);
    }
  }

  register(form: NgForm){
    console.log(form.value);
    const user: userModule = {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password
    }

     this.userService.register(user).subscribe({
      next: (res) =>{ 
        console.log('User registred:', res);
        sessionStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/dashboard']);
      },
      error: (err) => console.error('Error creating device:', err)
    });
    this.showSuccess();
  }

  showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register' });
  }
  showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error' });
    }
  
   
}
