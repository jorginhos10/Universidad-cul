import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/models/users.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userToken: string = '';

  constructor(private http: HttpClient) {
    this.getToken();
  }

  login(user: UserModel) {
    const authData = {
      ...user,
      token: null,
    };

    return this.http.post('http://localhost:3000/signin', authData).pipe(
      map((res) => {
        this.setToken(res['token']);
        // return res;
      })
    );
  }

  newUser(user: UserModel) {
    const authData = {
      ...user,
      token: null,
    };

    return this.http.post('http://localhost:3000/signup', authData).pipe(
      map((res) => {
        this.setToken(res['token']);
        // return res;
      })
    );
  }

  setToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  getToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  isauthenticated(): boolean {
    return this.userToken.length > 2;
  }

  logout() {
    this.userToken = '';
    localStorage.removeItem('token');
  }

  getProfile() {
    const headers = { Authorization: `Bearer ${this.getToken()}` };

    return this.http.get('http://localhost:3000/profile', { headers });
  }
}
