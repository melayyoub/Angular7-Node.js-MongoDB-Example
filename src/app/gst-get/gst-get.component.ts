import { Component, OnInit } from '@angular/core';
import User from '../users';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.scss']
})
export class GstGetComponent implements OnInit {

  useres: User[];

  constructor(private bs: UsersService, private route: Router) { }

  ngOnInit() {
    this.bs.getUseres().subscribe((data: User[]) => {
      this.useres = data;
    });
  }
  deleteUser(id) {
    this.bs.deleteUser(id).subscribe(res => {
      console.log('Deleted');
      this.route.navigate(['/']);
    });
  }
}
