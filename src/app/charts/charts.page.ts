import { Component, OnInit ,ViewChild} from '@angular/core';
import Chart from 'chart.js/auto';
import {StorageService} from '../storage.service';
import {Car} from '../model/car';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage implements OnInit {
  @ViewChild('chartCanvas' ,{static:false}) chartCanvas;
  chart:any;
  cars:Car[] =[];
  labels=[];
  dataforchart=[];
  backgroundcolors=[];
  bordercolors=[];
 /* chartconfig={

    type: 'bar',
    data: {
        labels: this.labels,
        datasets: [{
            label: 'Car Count',
            data: this.dataforchart,
            backgroundColor: this.backgroundcolors,
            borderColor: this.bordercolors,
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  }*/
  chartconfig={

    type: 'pie',
    data:  {
      labels: this.labels,
      datasets: [{
          label: 'Car Count',
          data: this.dataforchart,
          backgroundColor: this.backgroundcolors,
          
      }]
  },
    options:{
      responsive:true,
      plugins:{
        legend:{
          position:top,
        },
        title:{
          display:true,
          text:'Car Count'
        }
      }
    }
  
  }
  constructor(private storageService:StorageService) { }

  getvals(){
    this.storageService.retrievcars().then((data)=>{
         
      if(data){
       this.cars = JSON.parse(data);
       this.cars.forEach((item, index)=>{
        this.labels.push(item.carMake);
        this.dataforchart.push(item.carCount);
        this.backgroundcolors.push('rgba('+Math.floor(Math.random()*255) + ',' +Math.floor(Math.random()*255)+','+ Math.floor(Math.random()*255)+','+ '0.7)');
       // this.bordercolors.push('rgba(255,99,132,1)');
        
       })
      }
      this.createChart();
   });
  }

  ionViewDidEnter() {
    this.getvals();
    console.log(this.labels);
    console.log(this.dataforchart);
    //this.createChart();
    
}
  createChart(){
    if(this.chart){
    this.chart.destroy();
    }
    this.chart = new Chart(this.chartCanvas.nativeElement, this.chartconfig);
  
  }
  ngOnInit() {
  }

}
