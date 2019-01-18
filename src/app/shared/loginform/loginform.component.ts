import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from '../../users.service';
import { empty } from 'rxjs';
import User from '../../users';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  loginForm: FormGroup;
  logged: any;
  userInfo: User[];
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private user: UserService ,
      private fb: FormBuilder,
      private US: UsersService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

   // LoginUser(e) {
   //  e.preventDefault();
   //  const username = e.target.elements[0].value;
   //  const password = e.target.elements[1].value;
   //  in the past example we where checking if our login is only admin to pass to the dashboard
   // if (username === 'admin' && password === 'password') {
   //   this.user.setUserLoggedIn(username);
   //   this.router.navigate(['/dashboard']);
   // } else {
   //   alert('Sorrry wrong username or password, try again :-)');
   // }
   //  }

    LoginUser(username, password) {

      this.route.params.subscribe(params => {
        this.US.LoginUser(username, password).subscribe((res) => {
          this.logged = res[0];
          if (!this.logged) {
            alert('Sorry wrong username or password, try again :-)');
          } else {
            this.user.setUserLoggedIn(username);
            this.router.navigate(['/dashboard'], {queryParams: {id: this.logged['_id']}});
        }
        console.log(this.logged);
       });
    });
   }
}
