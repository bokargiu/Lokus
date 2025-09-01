import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface IncomeData {
  week: string;
  amount: number;
}


@Component({
  selector: 'app-card-graphic-income',
  templateUrl: './card-graphic-income.component.html',
  styleUrl: './card-graphic-income.component.css'
})

export class CardGraphicIncomeComponent implements OnInit{


  chartdata: IncomeData[] = [
    { week: 'Semana 1', amount: 150 },
    { week: 'Semana 2', amount: 300 },
    { week: 'Semana 3', amount: 110 },
    { week: 'Semana 4', amount: 80 }
  ];

   chart: any;

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const labels = this.chartdata.map(d => d.week);
    const values = this.chartdata.map(d => d.amount);

    this.chart = new Chart('incomeChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Income',
          data: values,
          borderColor: '#4e79a7',
          backgroundColor: 'rgba(78, 121, 167, 0.2)',
          fill: true,
          tension: 0.3, 
          pointBackgroundColor: '#4e79a7',
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            title: { display: true, text: 'Semana' }
          },
          y: {
            title: { display: true, text: 'Income' },
            beginAtZero: true,
            ticks: {
              stepSize: 100, 
              callback: (value) => `$${value}`
            },
            max: 500
          }
        }
      }
    });
  }
}
