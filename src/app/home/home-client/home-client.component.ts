import { Component, OnInit } from '@angular/core';
import { LegendItem, ChartType } from '../../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';
import {BloodBankApiService} from '../../service/bloodbank.api.service';
import {ViewBlood} from '../../classes/common/ViewBlood';
import * as CanvasJS from 'assets/libs/canvasjs.min';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {
  public bloodChartType: ChartType;
  public bloodChartData: any;
  public bloodChartLegendItems: LegendItem[];
  bloodList: Array<ViewBlood>;

  label: Array<String> = [];
  serie: Array<Number> = [];
  percentages: Array<Number> = [];

  public hoursChartType: ChartType;
  public hoursChartData: any;
  public hoursChartOptions: any;
  public hoursChartResponsive: any[];
  public hoursChartLegendItems: LegendItem[];

  public activityChartType: ChartType;
  public activityChartData: any;
  public activityChartOptions: any;
  public activityChartResponsive: any[];
  public activityChartLegendItems: LegendItem[];

  constructor(private http: BloodBankApiService,
              private router: Router) {
  }

  ngOnInit() {

    // this.getData();
    this.bloodChartType = ChartType.Pie;


    this.bloodChartData = {
      labels: this.label,

      series: this.serie
    }
  }


    public getData() {
      this.http.getBloodList().subscribe(
        success => {
          this.bloodList = success.data;
          console.log(this.bloodList);
          this.drawGraph();

        },
        error => {
          console.log(error);
        }
      );
    }

    public drawGraph() {

      for (let i = 0; i < this.bloodList.length; i++){
        this.label.push(this.bloodList[i].group);
        this.serie.push(this.bloodList[i].quantity);
        this.percentages.push(this.bloodList[i].percentage);

        };

      let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "The Amount of blood in the stock"
        },
        data: [{
          type: "column",
          dataPoints: [
            { y: this.serie[0], label: this.label[0] },
            { y: this.serie[1], label: this.label[1] },
            { y: this.serie[2], label: this.label[2] },
            { y: this.serie[3], label: this.label[3] },
            { y: this.serie[4], label: this.label[4] },
            { y: this.serie[5], label: this.label[5] },
            { y: this.serie[6], label: this.label[6] },
            { y: this.serie[7], label: this.label[7] }

          ]
        }]
      });

      chart.render();

      let chart1 = new CanvasJS.Chart("chartContainer2", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: "Blood in percent"
        },
        data: [{
          type: "pie",
          showInLegend: true,
          toolTipContent: "<b>{name}</b>: {y} (#percent%)",
          indexLabel: "{name} - #percent%",
          dataPoints: [
            { y: this.serie[0], name: this.label[0] },
            { y: this.serie[1], name: this.label[1] },
            { y: this.serie[2], name: this.label[2] },
            { y: this.serie[3], name: this.label[3] },
            { y: this.serie[4], name: this.label[4] },
            { y: this.serie[5], name: this.label[5] },
            { y: this.serie[6], name: this.label[6]}
          ]
        }]
      });

      chart1.render();

      this.bloodChartLegendItems = [
          { title: this.bloodList[0].group, imageClass: 'fa fa-circle text-info' },
          { title: this.bloodList[1].group, imageClass: 'fa fa-circle text-danger' },
          { title: this.bloodList[2].group, imageClass: 'fa fa-circle text-warning' },
          { title: this.bloodList[3].group, imageClass: 'fa fa-circle text-success' },
          { title: this.bloodList[4].group, imageClass: 'fa fa-circle text-primary' },
          { title: this.bloodList[5].group, imageClass: 'fa fa-circle text-muted' },
          { title: this.bloodList[6].group, imageClass: 'fa fa-circle text-dark' },
          { title: this.bloodList[7].group, imageClass: 'fa fa-circle text-danger' },
        ];


      }

  goToRequests() {
      this.router.navigateByUrl('/view-requests');
  }
}

