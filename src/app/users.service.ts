import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri = 'http://localhost:4000/users';

  constructor(private http: HttpClient, private router: Router) { }

  // add new user
  addUsers(username, password) {
    console.log(username, password);
    this.http.post(`${this.uri}/add`, {username: username, password: password})
        .subscribe(res => this.router.navigate(['/users']));
  }

  // return all users
  getUseres() {
    return this.http.get(`${this.uri}`);
  }

  // Edit User
  editUser(id) {
      return this.http.get(`${this.uri}/edit/${id}`);
  }

  // return all users
  LoginUser(username, password) {
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);
    // console.log(`${this.uri}/login`, {params: params});
    return this.http.get(`${this.uri}/login`, {params: params});
  }

  // User update
  updateUser(username, password, id) {

    const obj = {
        username: username,
        password: password
      };
    this.http.post(`${this.uri}/update/${id}`, obj).subscribe(res => console.log('Done'));
  }

  // Delete user by id
  deleteUser(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
