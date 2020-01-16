import {Component, OnInit} from '@angular/core';
import {CreateUserFieldErrorMessage} from '../../classes/user/CreateUserFieldErrorMessage';
import {Router} from '@angular/router';
import {CampApiService} from '../../service/camp.api.service';
import {CreateCamp} from '../../classes/camp/CreateCamp';

declare var $:any;

@Component({
  selector: 'app-add-camp',
  templateUrl: './add-camp.component.html',
  styleUrls: ['./add-camp.component.css']
})
export class AddCampComponent implements OnInit {
  selectedFile: File;

  browseText = 'Browse';

  // tslint:disable-next-line:max-line-length
  imageBase64 = '/assets/img/question.png';
  campTitle: String;
  city: String;
  state: String;
  details: String;
  img: String;
  image: String;
  role: String;


  // fieldError messages
  cityError: String;
  stateError: String;
  campTitleError: String;

  constructor(private http: CampApiService,
              private router: Router) {
  }

  ngOnInit() {

    this.role = localStorage.getItem("role");
    if(this.role == "CLIENT") {
      this.router.navigate(['dashboard']);
    }
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



  createCamp() {
      this.img = this.parseImageString(this.image);
       const camp = new CreateCamp(this.campTitle, this.city, this.state, this.details, this.img);

      this.http.createCamp(camp).subscribe(success => {
        this.showNotification("Camp has been created!", 2);
          this.router.navigate(['camps']);
        },
        error => {
          console.log(error);
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
      if (element.field == 'campTitle') {
        fieldsError.campTitleError = element.message;
      } else if (element.field == 'state') {
        fieldsError.countryError = element.message;
      } else if (element.field == 'city') {
        fieldsError.cityError = element.message;
      }
    });

    this.campTitleError = fieldsError.campTitleError;
    this.cityError = fieldsError.cityError;
    this.stateError = fieldsError.countryError;
  }

}
