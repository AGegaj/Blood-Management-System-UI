import {Component, OnInit} from '@angular/core';
import {ViewRoleData} from '../../classes/common/ViewRoleData';
import {UserApiService} from '../../service/user.api.service';
import {CreateUserFieldErrorMessage} from '../../classes/user/CreateUserFieldErrorMessage';
import {CreateUser} from '../../classes/user/CreateUser';
import {ActivatedRoute, Router} from '@angular/router';
import {DonatorDetails} from '../../classes/user/DonatorDetails';
import {CreateUserWithDetails} from '../../classes/user/CreateUserWithDetails';
import {ViewBloodGroup} from '../../classes/common/ViewBloodGroup';
import {ToastOptions, ToastyService} from 'ng2-toasty';
import {ViewDonator} from '../../classes/user/ViewDonator';
import {UpdateUserWithDetails} from '../../classes/user/UpdateUserWithDetails';
import {DonatorDetailsUpdate} from '../../classes/user/DonatorDetailsUpdate';

declare var $:any;

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  selectedFile: File;

  browseText = 'Browse';

  imageBase64 = '/assets/img/unknown.jpg'; // must this be not hard coded?
  groupViewList: Array<ViewBloodGroup> = [];
  viewUser: ViewDonator;
  roleId: Number;
  image: String;
  firstName: String;
  personalNumber: String;
  city: String;
  country: String;
  password: String;
  email: String;
  userName: String;
  lastName: String;
  i: Number;
  imgString: String;
  age: Number;
  weigh: Number;
  gender: String;
  group: String;
  id: Number;
  role: String;
  roleStorage: String;

  // fieldError messages
  nameError: String;
  surnameError: String;
  usernameError: String;
  emailError: String;
  passwordError: String;
  personalNumberError: String;
  roleIdError: String;
  countryError: String;
  cityError: String;
  ageError: String;
  weighError: String;

  //for notification
  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  constructor(private http: UserApiService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.roleStorage = localStorage.getItem("role");
    if(this.roleStorage == "CLIENT") {
      this.router.navigate(['dashboard']);
    }
    this.id = new Number(this.route.snapshot.paramMap.get('id'));
    this.getUser(this.id);
  }


  getUser(id) {
    this.http.getDonorForUpdate(id).subscribe(
      success => {
        this.firstName = success.data.firstName;
        this.lastName = success.data.lastName;
        this.userName = success.data.username;
        this.email = success.data.email;
        this.gender = success.data.gender;
        this.weigh = success.data.weight;
        this.age = success.data.age;
        this.group = success.data.group;
        this.image = success.data.image;
        this.city = success.data.city;
        this.country = success.data.country;
        this.role = success.data.role;
        this.personalNumber = success.data.personalNumber;

      },
      error => {
        console.log(error);
      }
    );
  }


  openDialog() {
    document.getElementById('browse-id').click();
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

  // create user method
  updateUser() {
      this.imgString = this.parseImageString(this.image);

       let user = new UpdateUserWithDetails(this.id, this.firstName, this.lastName, this.userName, this.email, this.imgString, this.country, this.city,
         new DonatorDetailsUpdate(this.age, this.weigh));

      this.http.updateUserClient(user).subscribe(success => {
          this.showNotification("User has been updated", 2);
          this.getUser(this.id);

        },
        error => {
          console.log(error);  // needs to be parsed
          // get the fields error, and do the check here for the error messages
          const json = JSON.parse(JSON.stringify(error)).error;
          if (json.status == 400) {
            this.setFieldError(json);
          }else {
            this.showNotification(error.error.message, 4);
          }

        }
      );

  }


  handleFileSelect(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => { // called once readAsDataURL is completed
      this.imageBase64 = e.target.result;
      document.getElementById('img2').setAttribute('src', this.imageBase64);
      this.image = e.target.result; // get the image string with entry
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  parseImageString(img) {
    if(!img){
      return null;
    } else {
      const str = img.split(',');
      return str[1];
    }
  }

  setFieldError(json) {
    console.log(json);

    const fieldsError = new CreateUserFieldErrorMessage();

    json.fieldsError.forEach(element => {
      if (element.field == 'firstName') {
        fieldsError.nameError = element.message;
      } else if (element.field == 'lastName') {
        fieldsError.surnameError = element.message;
      } else if (element.field == 'username') {
        fieldsError.usernameError = element.message;
      } else if (element.field == 'email') {
        fieldsError.emailError = element.message;
      } else if (element.field == 'password') {
        fieldsError.passwordError = element.message;
      } else if (element.field == 'country') {
        fieldsError.countryError = element.message;
      } else if (element.field == 'city') {
        fieldsError.cityError = element.message;
      } else if (element.field == 'personalNumber') {
        fieldsError.personalNumberError = element.message;
      }
    });

    this.nameError = fieldsError.nameError;
    this.surnameError = fieldsError.surnameError;
    this.usernameError = fieldsError.usernameError;
    this.emailError = fieldsError.emailError;
    this.passwordError = fieldsError.passwordError;
    this.countryError = fieldsError.countryError;
    this.roleIdError = fieldsError.roleIdError;
    this.cityError = fieldsError.cityError;
    this.personalNumberError = fieldsError.personalNumberError;
  }

}
