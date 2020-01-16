import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CampApiService} from '../../service/camp.api.service';
import {EditCamp} from '../../classes/camp/EditCamp';

declare var $:any;

@Component({
  selector: 'app-edit-camp',
  templateUrl: './edit-camp.component.html',
  styleUrls: ['./edit-camp.component.css']
})
export class EditCampComponent implements OnInit {
  selectedFile: File;
  imageBase64: any;
  image: String;
  campId: Number;
  campTitle: String;
  state: String;
  city: String;
  details: String;
  img: String;
  role: String;


  cityError: String;
  stateError: String;
  campTitleError: String;

  constructor(private http: CampApiService ,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.role = localStorage.getItem("role");
    if(this.role == "CLIENT") {
      this.router.navigate(['dashboard']);
    }
    this.campId = new Number(this.route.snapshot.paramMap.get('id'));
    this.getCamp(this.campId);
  }


  getCamp(id) {
    this.http.getCampById(id).subscribe(
      success => {
        this.campTitle = success.data.campTitle;
        this.state = success.data.state;
        this.city = success.data.city;
        this.details = success.data.details;
        this.imageBase64 = success.data.img;

      },
      error => {
        console.log(error);
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


  updateCamp() {
    this.img = this.parseImageString(this.image);
    const camp = new EditCamp(this.campId, this.campTitle, this.city, this.state, this.details, this.img);

    this.http.updateCamp(camp).subscribe(success => {
      this.showNotification("Camp has been updated", 2);
        this.router.navigate(['camps']);
      },
      error => {
        console.log(error);
        // get the fields error, and do the check here for the error messages
        const json = JSON.parse(JSON.stringify(error)).error;
        if (json.status == 400) {
          // this.setFieldError(json);
        } else {
          this.showNotification(error.error.message, 4);
        }

      }
    );
  }
}
