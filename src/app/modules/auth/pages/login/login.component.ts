import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resetPasswordModal = false;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.activatedRoute.data.subscribe((value) => {
    //   console.log(value);
    // });
  }
}
