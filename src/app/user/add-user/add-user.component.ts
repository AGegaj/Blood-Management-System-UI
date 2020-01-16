import {Component, OnInit} from '@angular/core';
import {ViewRoleData} from '../../classes/common/ViewRoleData';
import {UserApiService} from '../../service/user.api.service';
import {CreateUserFieldErrorMessage} from '../../classes/user/CreateUserFieldErrorMessage';
import {CreateUser} from '../../classes/user/CreateUser';
import {Router} from '@angular/router';
import {DonatorDetails} from '../../classes/user/DonatorDetails';
import {CreateUserWithDetails} from '../../classes/user/CreateUserWithDetails';
import {ViewBloodGroup} from '../../classes/common/ViewBloodGroup';
import {ToastOptions, ToastyService} from 'ng2-toasty';

declare var $:any;

@Component({
  selector: 'app-typography',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  selectedFile: File;

  browseText = 'Browse';

  // tslint:disable-next-line:max-line-length
  imageBase64 = '/assets/img/unknown.jpg'; // must this be not hard coded?
  roleViewList: Array<ViewRoleData> = [];
  groupViewList: Array<ViewBloodGroup> = [];
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
  groupId: Number;
  role: String;

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
              private toastyService: ToastyService) {
  }

  ngOnInit() {
    this.role = localStorage.getItem("role");
    if(this.role == "CLIENT") {
      this.router.navigate(['dashboard']);
    }
    this.getRoles();
    this.getBloodGroups();
  }

  getGenderSelected(event) {
    this.gender = event.target.value;
  }

  getRoles() {
    this.http.getUserRoles().subscribe(
      success => {
        /*   this.router.navigate(['admin']);*/
        this.roleViewList = success.data;
        console.log(this.roleViewList);
      },
      error => {
        console.log(error);
      }
    );
  }

  getBloodGroups() {
    this.http.getGroups().subscribe(
      success => {
        /*   this.router.navigate(['admin']);*/
        this.groupViewList = success.data;
        console.log(this.roleViewList);
      },
      error => {
        console.log(error);
      }
    );
  }

  openDialog() {
    document.getElementById('browse-id').click();
  }

  getRoleSelected(event) {
    this.roleId = event.target.value;
  }


  getBloodGroupSelected(event) {
    this.groupId = event.target.value;
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

  clear(){
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.personalNumber = '';
    this.password = '';
    this.userName = '';
    this.country = '';
    this.city = '';
    this.imageBase64 = '/assets/img/unknown.jpg';
    this.age = null;
    this.weigh = null;

  }
  // create user method
  createUser() {
      this.imgString = this.parseImageString(this.image);
      let user;
    if (this.roleId == 1) {
       user = new CreateUser(this.firstName, this.lastName, this.userName, this.email, this.password, this.imgString, this.country, this.city, this.personalNumber, this.roleId);
    } else {
       user = new CreateUserWithDetails(this.firstName, this.lastName, this.userName, this.email, this.password, this.imgString, this.country, this.city, this.personalNumber, this.roleId,
         new DonatorDetails(this.age, this.weigh, this.gender, this.groupId));

    }
      this.http.createUser(user).subscribe(success => {
          this.showNotification("User has been created", 2);
          this.clear();

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
