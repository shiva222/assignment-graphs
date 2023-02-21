import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { ApiHttpService } from "../core/services/ApiHttpService";

@Component({
  selector: 'app-graph-layout',
  templateUrl: './graph-layout.component.html',
  styleUrls: ['./graph-layout.component.css']
})
export class GraphLayoutComponent implements OnInit, OnChanges {
  title = 'ng2-charts-demo';
  data = [];
  timeSeres = [];

  constructor(
    public apiService: ApiHttpService
  ){}
  ngOnChanges(changes: SimpleChanges): void {
console.log(changes);
  }
  ngOnInit(): void {
    this.apiService.get("https://my-json-server.typicode.com/rishabh103/demo/values").subscribe((res)=>{
      console.log(res);
      this.data = res.map((obj:any)=>{return obj.forward_flow});
      this.timeSeres =res.map((obj:any)=>{return obj.time});
      console.log(this.data, this.timeSeres);
      this.lineChartData.labels = this.timeSeres;
      this.lineChartData.datasets[0].data = this.data;
    
    })
    // throw new Error('Method not implemented.');
  }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.timeSeres,
    datasets: [
      {
        data: this.data?this.data:[],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

}
