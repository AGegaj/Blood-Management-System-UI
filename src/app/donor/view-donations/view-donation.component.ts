import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CampApiService} from '../../service/camp.api.service';
import {ViewDonation} from '../../classes/common/ViewDonation';
import {FilterUserParams} from '../../classes/common/FilterUserParams';

@Component({
  selector: 'app-view-donation',
  templateUrl: './view-donation.component.html',
  styleUrls: ['./view-donation.component.css']
})
export class ViewDonationComponent implements OnInit {

  viewDonations: Array<ViewDonation>
  image: String;
  firstName: String;
  lastName: String;
  personalNumber: String;
  city: String;
  constructor(private http: CampApiService ,
              private router: Router
              ) { }

  ngOnInit() {
    this.getAllDonation();
  }


  getAllDonation() { //the results with userList and pagination infos
    this.http.getAllDonations().subscribe(
      success => {
        this.viewDonations = success.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  public filterData() {
    let params = new FilterUserParams(this.firstName, this.lastName, this.personalNumber, this.city)
    this.http.filterDonation(params).subscribe(
      success => {
        this.viewDonations = success.data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
