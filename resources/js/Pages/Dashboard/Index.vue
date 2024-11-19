<template>
  <div>
    <Head title="Dashboard" />

    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div class="bg-white p-4 rounded-lg">
          <Pie
            :options="{
              ...options,
              plugins: {
                title: {
                  display: true,
                  text: 'Percentage of Patients Per Animal Category'
                }
              }
            }"
            :data="patientPercentageAnimalCategory"
          />
        </div>
        <div class="bg-white p-4 rounded-lg">
          <Doughnut
            :options="{
              ...options,
              plugins: {
                title: {
                  display: true,
                  text: 'Quantity of Medical Supplies'
                }
              }
            }"
            :data="suppliesData"
          />
        </div>
          
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 mt-5">
        <div class="bg-white p-4 rounded-lg">
          <Bar
            id="my-chart-id"
            :options="{
              ...chartOptions,
              plugins: {
                title: {
                  display: true,
                  text: 'Number of Patients Per Month'
                }
              }
            }"
            :data="patientPerMonth"
          />
        </div>
      </div>
    </div>
 
    <!-- <h1 class="mb-8 text-3xl font-bold">Dashboard</h1>
    <p class="mb-8 leading-normal">Hello! Welcome to Tayabas Animal Bite System. </p> -->
  </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import { Bar, Pie, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement,  Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement, BarElement, CategoryScale, LinearScale)

export default {
  components: {
    Head,
    Bar,
    Pie,
    Doughnut
  },
  layout: Layout,
  props: {
    patientPerAnimalCategory: Array,
    patientPerMonth: Array,
    supplies: Array,
  },
  data() {
    return {
      chartOptions: {
        responsive: true
      },
      patientPerMonth: {
      labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
      ],
        datasets: [ {
          label: 'Count',
          data: this.patientPerMonth.map((item) => item.count),
        }]
      },
      patientPercentageAnimalCategory: {
        labels: this.patientPerAnimalCategory.map((item) => item.name),
        datasets: [ {
          data: this.patientPerAnimalCategory.map((item) => item.percentage),
          backgroundColor: this.colors(this.patientPerAnimalCategory.map((item) => item.percentage))
        }]
      },
      suppliesData: {
        labels: this.supplies.map((item) => item.name),
        datasets: [ {
          data: this.supplies.map((item) => item.quantity),
          backgroundColor: this.colors(this.supplies.map((item) => item.quantity))
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  methods: {
    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color
    },
    colors(data){
      const randomColors = [];
        for (let i = 0; i < data.length; i++) { // Adjust the number of datasets as needed
          randomColors.push(this.getRandomColor());
        }
      return randomColors
    },
    getName(arr, id) {
      return arr.map((item, key) => {
        return key+1 === id ? item.name : ''
      });
    }
  }
}
</script>
