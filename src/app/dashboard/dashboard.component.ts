import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chartData = [
    ['10:00', 0.1, 0.2, 0.1],
    ['10:05', 0.2, 0.4, 0.2],
    ['10:10', 0.4, 0.6, 0.9],
    ['10:15', 0.8, 0.4, 0.9],
    ['10:20', 0.92, 0.2, 0.8],
    ['10:25', 0.8, 0.4, 0.65],
    ['10:30', 0.7, 0.6, 0.40],
    ['10:35', 0.7, 0.4, 0.37],
    ['10:40', 0.7, 0.2, 0.32],
    ['10:45', 0.7, 0.4, 0.3],
    ['10:50', 0.7, 0.6, 0.24],


  ];
  public ChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public ChartLabels = ['10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10:35', '10:40', '10:45', '10:50', '10:55','11:00','11:05'];
  public ChartType = 'line';
  public ChartLegend = true;
  public ChartData = [
    {data: [0.1, 0.2, 0.4, 0.8, 0.92, 0.8, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.75, 0.65 ], label: 'MCT CPU% '},
    {data: [0.2, 0.4, 0.6, 0.4, 0.2,  0.4, 0.6, 0.4, 0.2, 0.4, 0.6, 0.4, 0.2,  0.4 ], label: 'GMP CPU%'},
    {data: [0.1, 0.2, 0.9, 0.8, 0.65, 0.55, 0.51,  0.47, 0.41, 0.38, 0.36, 0.33, 0.31, 0.28 ], label: 'IPC CPU%'}
  ];

  myColumnNames = ['Time', 'MCT CPU%', 'GMP CPU%', 'IPC CPU%'];

  myOptions = {
    colors: ['#e0440e', '#43e00e', '#180ee0', '#f3b49f', '#f6c7b6'],
    is3D: true,
    smoothLine: true
  };

  chartType = 'LineChart';

  chartTitle = 'Tool CPU Utilization [%]';

  constructor() { }

  ngOnInit() {
  }

}
