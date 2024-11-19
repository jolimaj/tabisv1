<template>
    <canvas id="myChart"></canvas>
  </template>
  
  <script>
  import { Chart } from 'chart.js/auto';
  
  export default {
    props: {
      chartData: {
        type: Object,
        required: true
      },
      chartOptions: {
        type: Object,
        default: () => ({})
      }
    },
    mounted() {
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
        ...this.chartOptions,
        data: this.chartData
      });
    }
  };
  </script>