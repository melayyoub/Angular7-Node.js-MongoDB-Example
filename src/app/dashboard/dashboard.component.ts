import { Component, OnInit } from '@angular/core';
import { UserService } from '.././service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  name = 'guest';
  id: any = '';
  constructor(private user: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.user.username;
    this.id = this.route.snapshot.params.id;
  }

}
