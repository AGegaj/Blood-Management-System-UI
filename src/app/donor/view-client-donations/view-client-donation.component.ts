import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CampApiService} from '../../service/camp.api.service';
import {ViewDonation} from '../../classes/common/ViewDonation';
import {FilterUserParams} from '../../classes/common/FilterUserParams';

@Component({
  selector: 'app-view-donation',
  templateUrl: './view-client-donation.component.html',
  styleUrls: ['./view-client-donation.component.css']
})
export class ViewClientDonationComponent implements OnInit {

  viewDonations: Array<ViewDonation>
  image: String;
  firstName: String;
  lastName: String;
  personalNumber: String;
  city: String;
  id: Number;
  constructor(private http: CampApiService ,
              private router: Router
              ) { }

  ngOnInit() {
    this.id = +localStorage.getItem("id")
    this.getAllDonation(this.id);
  }


  getAllDonation(id) {
    this.http.getAllDonationsById(id).subscribe(
      success => {
        this.viewDonations = success.data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
