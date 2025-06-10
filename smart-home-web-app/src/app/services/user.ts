import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userModule } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7104/api/users';

  constructor(private http: HttpClient) { }

  getUser(id: string): Observable<userModule> {
      return this.http.get<userModule>(`${this.apiUrl}/${id}`);
    };

  getUserByEmail(email: string): Observable<userModule> {
      return this.http.get<userModule>(`${this.apiUrl}/email/${email}`);
    };

  register(user: userModule): Observable<userModule> {
    const payload = {
        username: user.username,
        email: user.email,
        password: user.password,
    };

    console.log('Sending payload:', payload);

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<userModule>(this.apiUrl, payload, { headers });
  };

  updateUser(id: string, user: userModule): Observable<void> {
      return this.http.put<void>(`${this.apiUrl}/${id}`, user);
    }
}
