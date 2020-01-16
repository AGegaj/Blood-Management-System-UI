import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CampApiService} from '../../service/camp.api.service';
import {ViewDonator} from '../../classes/user/ViewDonator';
import {UserApiService} from '../../service/user.api.service';
import {FilterUserParams} from '../../classes/common/FilterUserParams';

declare var $:any;

@Component({
  selector: 'app-view-donators',
  templateUrl: './view-donators.component.html',
  styleUrls: ['./view-donators.component.css']
})
export class ViewDonatorsComponent implements OnInit {

  viewUsers: Array<ViewDonator>
  image: String;
  imageBase64 = '/assets/img/unknown.jpg';
  firstName: String;
  lastName: String;
  personalNumber: String;
  city: String;
  role: String;

  constructor(private http: UserApiService ,
              private router: Router
              ) { }

  ngOnInit() {
    this.role = localStorage.getItem("role");
    if(this.role == "CLIENT") {
      this.router.navigate(['dashboard']);
    }
    this.getAllDonators();
  }


  getAllDonators() {
    this.http.getUserList().subscribe(
      success => {
        this.viewUsers = success.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  showNotification(msg, color){
    const type = ['','info','success','warning','danger'];

    var color = color;
    $.notify({
      message: msg,
    },{
      type: type[color],
      timer: 1000,
      placement: {
        from: 'top',
        align: 'center'
      }
    });
  }

  public delete(userId) {
    this.http.deleteUser(userId).subscribe(
      success => {
        this.showNotification("User was deleted successfully", 2);
        this.getAllDonators();
      },
      error => {
        console.log(error);
        this.showNotification(error.error.message, 4);
      }
    );

  }

  public filterData() {
    let params = new FilterUserParams(this.firstName, this.lastName, this.personalNumber, this.city)
    this.http.filterUsers(params).subscribe(
      success => {
        console.log(success.data);
        this.viewUsers = success.data;
      },
      error => {
        console.log(error);
        this.showNotification(error.error.message, 4);
      }
    );
  }
}
