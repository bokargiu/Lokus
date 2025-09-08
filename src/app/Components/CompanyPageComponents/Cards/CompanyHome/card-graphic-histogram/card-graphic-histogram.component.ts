import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface FrequencyData {
  time: string;
  quantity: number;
}

@Component({
  selector: 'app-card-graphic-histogram',
  templateUrl: './card-graphic-histogram.component.html',
  styleUrl: './card-graphic-histogram.component.css'
})
export class CardGraphicHistogramComponent implements OnInit{
    chartdata: FrequencyData[] = [
    { time: '08:00', quantity: 1 },
    { time: '09:00', quantity: 0 },
    { time: '10:00', quantity: 2 },
    { time: '11:00', quantity: 3 },
    { time: '12:00', quantity: 6 },
    { time: '13:00', quantity: 7 },
    { time: '14:00', quantity: 9 },
    { time: '15:00', quantity: 5 },
    { time: '16:00', quantity: 6 },
    { time: '17:00', quantity: 2 },
    { time: '18:00', quantity: 0 },
    { time: '19:00', quantity: 2 },
    { time: '20:00', quantity: 0 },
  ];

  hoursCount: number[] = [];
  labels: string[] = [];
  chart: any;

  ngOnInit(): void {
    this.prepareData();
}

 prepareData() {
    this.hoursCount = Array(24).fill(0);
    this.labels = Array.from({length: 24}, (_, i) => `${i}:00`);

    this.chartdata.forEach(item => {
      const hour = parseInt(item.time.split(':')[0]);
      this.hoursCount[hour] = item.quantity;
    });

    const maxCount = Math.max(...this.hoursCount);
    const colors = this.hoursCount.map(count => {
      const intensity = count / maxCount;
      return `rgba(${Math.floor(255 * intensity)}, 50, ${Math.floor(255 * (1 - intensity))}, 0.8)`;
    });

    this.renderChart(this.labels.slice(8, 21), this.hoursCount.slice(8, 21), colors.slice(8, 21));
  }

  renderChart(labelData: string[], valueData: number[], colorData: string[]) {
    if (this.chart) this.chart.destroy();

    this.chart = new Chart('histogramChart', {
      type: 'bar',
      data: {
        labels: labelData,
        datasets: [{
          label: 'Movimento por Hora',
          data: valueData,
          backgroundColor: colorData
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { title: { display: true, text: 'Horário' } },
          y: { title: { display: true, text: 'Quantidade' }, beginAtZero: true }
        }
      }
    });
  }
}

