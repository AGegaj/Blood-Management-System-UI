import { Component, OnInit } from '@angular/core';
import {UserApiService} from '../service/user.api.service';
import {Router} from '@angular/router';
import {CampApiService} from '../service/camp.api.service';
import {ViewCamp} from '../classes/common/ViewCamp';
import {ViewUser} from '../classes/user/ViewUser';
import {CreateDonation} from '../classes/common/CreateDonation';
import {CreateUserFieldErrorMessage} from '../classes/user/CreateUserFieldErrorMessage';
import {ViewDonator} from '../classes/user/ViewDonator';

declare var $:any;

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})

export class DonorComponent implements OnInit {

  quantity: Number;
  details: String;
  userId: Number;
  campId: Number;
  viewCamps: Array<ViewCamp>
  userViewList: Array<ViewDonator>
  role: String;


  quantityError: String;
  userError: String;
  campError: String;

  constructor(private http: UserApiService,
              private http1: CampApiService,
              private router: Router) { }

  ngOnInit() {
    this.role = localStorage.getItem("role");
    if(this.role == "CLIENT") {
      this.router.navigate(['dashboard']);
    }
    this.getCamps();
    this.getUsers();
  }


  getCamps() {
    this.http1.getCampsList().subscribe(
      success => {
        this.viewCamps = success.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getUsers() {
    this.http.getUserList().subscribe(
      success => {
        this.userViewList = success.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  getUserSelected(event) {
    this.userId = event.target.value;
  }

  getCampSelected(event) {
    this.campId = event.target.value;
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

  setFieldError(json) {
    console.log(json);
    const fieldsError = new CreateUserFieldErrorMessage();

    json.fieldsError.forEach(element => {
      if (element.field == 'campId') {
        fieldsError.campTitleError = element.message;
      } else if (element.field == 'quantity') {
        fieldsError.countryError = element.message;
      } else if (element.field == 'userId') {
        fieldsError.usernameError = element.message;
      }

      this.campError = fieldsError.campTitleError;
      this.quantityError = fieldsError.countryError;
      this.userError = fieldsError.usernameError;
    });
  }



  createDonation() {
    const donation = new CreateDonation(this.quantity, this.userId, this.campId, this.details);

    this.http.createDonation(donation).subscribe(success => {
        const json = JSON.parse(JSON.stringify(success));
        if(json.status == 422){
          this.showNotification(json.message, 3);
        }else{
          this.showNotification("Blood Donation has been registered!", 2);
          location.reload();


        }

      },
      error => {
        console.log(error);
        // get the fields error, and do the check here for the error messages
        const json = JSON.parse(JSON.stringify(error)).error;
        if (json.status == 400) {
          this.setFieldError(json);
        }  else {
          this.showNotification(error.error.message, 4);

        }

      }
    );

  }
}

