import { Component, OnInit } from '@angular/core';
import {ViewRequest} from '../classes/user/ViewRequest';
import {Router} from '@angular/router';
import {UserApiService} from '../service/user.api.service';

declare var $:any;

@Component({
  selector: 'app-requests',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requestList: Array<ViewRequest>;
  status: String;

  constructor(private http: UserApiService,
              private router: Router) { }

  ngOnInit() {
    this.getRequests();
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

  public getRequests() {
    this.http.getAllRequests().subscribe(
      success => {
        this.requestList = success.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  public confirm(requestId) {
    console.log("test");
    this.http.confirmRequest(requestId).subscribe(
      success => {
        const json = JSON.parse(JSON.stringify(success));
        if(json.status == 422) {
          this.showNotification(json.message, 3);
        }else {
          this.showNotification("Request was confirmed successfully", 2);
          this.getRequests();
        }
      },
      error => {
        console.log(error);
      }
    );

  }

  public deleteRequest(requestId) {
    this.http.delete(requestId).subscribe(
      success => {
        this.showNotification("Request was deleted successfully", 2);
        this.getRequests();
      },
      error => {
        console.log(error);
        this.showNotification(error.error.message, 4);
      }
    );

  }

  filterByConfirmStatus(event) {
    this.status = event.target.value;
    this.http.filterRequestByStatus(this.status).subscribe(
      success => {
        this.requestList = success.data;
      },
      error => {
        console.log(error);
      }
    );
  }


}
