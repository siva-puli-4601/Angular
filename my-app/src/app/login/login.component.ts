import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService, private route:Router) { }

  ngOnInit(): void {
  }

  login()
  {
    this.service.login();
    this.route.navigate(['/dashboard'])
  }

}
