import { Component, OnInit } from '@angular/core';
import {ViewRequest} from '../../classes/user/ViewRequest';
import {Router} from '@angular/router';
import {UserApiService} from '../../service/user.api.service';
import {RequestParam} from '../../classes/user/RequestParam';

declare var $:any;

@Component({
  selector: 'app-requests',
  templateUrl: './view-client-request.component.html',
  styleUrls: ['./view-client-request.component.css']
})
export class ViewClientRequestComponent implements OnInit {
  requestList: Array<ViewRequest>;
  status: String;
  id: Number;

  constructor(private http: UserApiService,
              private router: Router) { }

  ngOnInit() {
    this.id = +localStorage.getItem("id");
    this.getRequests(this.id);
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

  public getRequests(id) {
    this.http.getAllRequestsById(id).subscribe(
      success => {
        this.requestList = success.data;
      },
      error => {
        console.log(error);
      }
    );
  }

  public createRequest(){
    const request = new RequestParam(this.id);
    this.http.createRequest(request).subscribe(
      success => {
        this.showNotification("Request has been created! Please wait until somebody confirm it.", 2)
        this.getRequests(this.id);
      },
      error => {
        console.log(error);
        this.showNotification(error.error.message, 4);
      }
    );
  }

  filterByConfirmStatus(event) {
    this.status = event.target.value;
    this.http.filterRequestByStatusAndId(this.status, this.id).subscribe(
      success => {
        this.requestList = success.data;
      },
      error => {
        console.log(error);
      }
    );
  }


}
