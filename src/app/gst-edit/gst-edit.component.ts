import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.scss']
})
export class GstEditComponent implements OnInit {

  user: any = {};
  angForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bs: UsersService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        username: ['', Validators.required ],
        password: ['', Validators.required ],
      });
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.bs.editUser(params['id']).subscribe(res => {
          this.user = res;
      });
    });
  }
  updateUser(username, password) {
    this.route.params.subscribe(params => {
       this.bs.updateUser(username, password, params['id']);
       this.router.navigate(['users']);
  });
 }
}
