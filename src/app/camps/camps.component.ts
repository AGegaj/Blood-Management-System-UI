import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CampApiService} from '../service/camp.api.service';
import {ViewCamp} from '../classes/common/ViewCamp';

@Component({
  selector: 'app-icons',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.css']
})
export class CampsComponent implements OnInit {

  viewCamps: Array<ViewCamp>
  image: String;
  role: String;

  constructor(private http: CampApiService ,
              private router: Router,
              ) { }

  ngOnInit() {
    this.role = localStorage.getItem("role");
    if(this.role == "CLIENT") {
      this.router.navigate(['dashboard']);
    }
    this.getAllUsersList();
  }


  getAllUsersList() { //the results with userList and pagination infos
    this.http.getCampsList().subscribe(
      success => {
        this.viewCamps = success.data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
