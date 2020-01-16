import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserApiService} from '../service/user.api.service';
import {EditUserData} from '../classes/user/EditUserData';
import {PasswordUpdate} from '../classes/user/PasswordUpdate';

declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: Number;
  name: String;
  surname: String;
  username: String;
  email: String;
  role: String;
  status: String;
  country: String;
  city: String;
  personalNumber: String;
  image: String;
  //
  password: String;

  newPassword: String;
  //

  passwordChangeStatus = true;
  passwordMessage = null;

  selectedFile: File;
  browseText = 'Browse';
  imageBase64 = false;

  imageToUpload: String;

  // editResponse: EditUserResponse;

  // fields errors
  nameError: String;
  surnameError: String;
  usernameError: String;
  emailError: String;
  passwordError: String;
  personalNumberError: String;
  countryError: String;
  cityError: String;

  constructor(private route: ActivatedRoute, private http: UserApiService,
              private router: Router) {
  }

  ngOnInit() {
    // tslint:disable-next-line:no-construct
    this.id = +localStorage.getItem("id");
    this.getUserForEdit(this.id);
  }

  getUserForEdit(userId) {
    this.http.getUserForUpdate(userId).subscribe(
      success => {
        /*   this.router.navigate(['admin']);*/
        this.image = success.data.image;
        this.name = success.data.firstName;
        this.surname = success.data.lastName;
        this.username = success.data.username;
        this.email = success.data.email;
        this.role = success.data.role;
        this.country = success.data.country;
        this.city = success.data.city;
        this.personalNumber = success.data.personalNumber;
        this.status = success.data.status;
      },
      error => {
        console.log(error);
      }
    );
  }/*for image*/
  openDialog() {
    document.getElementById('browse-id').click();
  }

  handleFileSelect(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => { // called once readAsDataURL is completed
      this.image = e.target.result;
      this.imageBase64 = true;
      this.imageToUpload = this.parseImageString(this.image);
    };
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.image + ' the image!!!!');
  }

  /*ended for image*/

  parseImageString(img) {
    const str = img.split(',');
    return str[1];
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



  updateUser() {
    // tslint:disable-next-line:max-line-length
    const user = new EditUserData(this.id, this.name, this.surname, this.username, this.email, this.country, this.city, this.imageToUpload);

    this.http.updateUser(user).subscribe(success => {
      this.showNotification("User has been updated!", 2)
        this.router.navigate(['user']);
      },
      error => {
        console.log(error);
        const json = JSON.parse(JSON.stringify(error)).error;
        if(json.status == 400){
          // this.setFieldError(json);
        } else {
          this.showNotification(error.error.message, 4);
        }
      })
  }


  updatePassword() {
    // tslint:disable-next-line:max-line-length
    let updatePw = new PasswordUpdate(this.id, this.newPassword)

    this.http.updatePassword(updatePw).subscribe(success => {
        this.showNotification("Password has been updated!", 2)
      },
      error => {
        console.log(error);
        const json = JSON.parse(JSON.stringify(error)).error;
        if(json.status == 400){
          // this.setFieldError(json);
        } else {
          this.showNotification(error.error.message, 4);
        }
      })
  }
}
