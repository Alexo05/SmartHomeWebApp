import { Component, OnInit } from '@angular/core';
import { userModule } from '../services/user.module';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UserService } from '../services/user';

@Component({
  selector: 'app-settings',
  imports: [CommonModule, FormsModule, Toast],
  providers: [MessageService],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class Settings implements OnInit{
  user: userModule = {
    username: "",
    email: "",
    password: ""
  };

   constructor(private messageService: MessageService, private userService: UserService) {
   }

  ngOnInit() {
    const userStr = sessionStorage.getItem('user');
    const user = userStr ? JSON.parse(userStr) : {};
    if (this.user) {
      this.user.id = user.id,
      this.user.username = user.username;
      this.user.email = user.email;
      this.user.password = user.password;
    }
  }
  update(form: NgForm){
    console.log(form.value);
    const user: userModule = {
      id: this.user.id,
      username: form.value.username,
      email: form.value.email,
      password: form.value.password
    }
     this.userService.updateUser(this.user.id!, user).subscribe({
      next: (res) =>{ 
        console.log('User registred:', res);
        sessionStorage.setItem('user', JSON.stringify(user));
        this.showSuccess();
      },
      error: (err) => console.error('Error creating device:', err)
    });
  }

  showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User Updated' });
  }
  showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error' });
    }

}
