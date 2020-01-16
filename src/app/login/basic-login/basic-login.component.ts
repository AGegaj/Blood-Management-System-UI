import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CommonApiService} from '../../service/common.api.service';
import {Login} from '../../classes/common/Login';
import {JwtParser} from '../../service/JwtParser';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {

  username: String;
  password: String;
  isAuth: Boolean = true;

  constructor(
    private httpCommonApi: CommonApiService,
    private jwtParser: JwtParser,
    private router: Router
  ) { }


  ngOnInit() {
    this.isAuth = true;
    if(localStorage.getItem("token")!==null){
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    this.httpCommonApi.login(new Login(this.username, this.password)).subscribe(
      response => {
        let responseToken = JSON.stringify(response);
        let token = JSON.parse(responseToken).token;
        localStorage.setItem("token", token);
        localStorage.setItem('image', this.jwtParser.parseJwt(token).image);
        localStorage.setItem('fullName', this.jwtParser.parseJwt(token).firstName+" "+this.jwtParser.parseJwt(token).lastName);
        localStorage.setItem('id', this.jwtParser.parseJwt(token).id);
        localStorage.setItem('username', this.jwtParser.parseJwt(token).sub);
        localStorage.setItem('role', this.jwtParser.parseJwt(token).role);
        if(this.jwtParser.parseJwt(token).role == "ADMIN"){
          this.router.navigate(['/dashboard']);
        } else{
          this.router.navigate(['/home']);
        }
      },
      error => {
        this.isAuth = false;
      }
    );
  }
}
