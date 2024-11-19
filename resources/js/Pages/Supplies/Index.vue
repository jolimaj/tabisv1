<template>
    <div>
      <Head title="Supplies" />
      <h1 class="mb-8 text-3xl font-bold">Supplies</h1>
      <div class="flex items-center justify-between mb-6">
        <search-filter v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset">
          <label class="block text-gray-700">Category:</label>
          <select v-model="form.supplies_id" class="form-select mt-1 w-full">
            <option v-for="data in categories" :key="data?.id" :value="data?.id">{{data.name}}</option>
          </select>
          <label class="block text-gray-700">Other Filter:</label>
          <select v-model="form.otherFilter" class="form-select mt-1 w-full">
            <option v-for="data in otherFilter" :key="data?.id" :value="data?.id">{{data.name}}</option>
          </select>
        </search-filter>
      
        <div>
          <button class="p2 mt-1"@click="generateReport" :disabled ="supplies.length === 0">
            <icon name="printer" class="block w-6 h-6 fill-gray-400" />
          </button>
          <el-icon :size="size" :color="color">
            <!-- <Search /> -->
          </el-icon>
          <Link class="btn-indigo" href="/medical-supplies/create">
            <span>Create</span>
            <span class="hidden md:inline">&nbsp;Supplies</span>
          </Link>
       </div>
      </div>
      <div class="bg-white rounded-md shadow overflow-x-auto">
        <table class="w-full whitespace-nowrap">
          <tr class="text-left font-bold">
            <th class="pb-4 pt-6 px-6">Product Name</th>
            <th class="pb-4 pt-6 px-6">Category</th>
            <th class="pb-4 pt-6 px-6">Manufacturer</th>
            <th class="pb-4 pt-6 px-6">Dosage</th>
            <th class="pb-4 pt-6 px-6">Quantity</th>
            <th class="pb-4 pt-6 px-6">Expiration Date</th>
            <th class="pb-4 pt-6 px-6">Date Added</th>
            <th class="pb-4 pt-6 px-6" colspan="2"></th>
          </tr>
          <tr v-for="data in supplies" :key="data.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
            <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="`/medical-supplies/${data.id}/edit`" tabindex="-1">
                {{ data.name }}
              </Link>
            </td>
            <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="`/medical-supplies/${data.id}/edit`" tabindex="-1">
                {{ data.category.name}}
              </Link>
            </td>
            <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="`/medical-supplies/${data.id}/edit`" tabindex="-1">
                {{ data.manufacturer }}
              </Link>
            </td>
            <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="`/medical-supplies/${data.id}/edit`" tabindex="-1">
                {{ data.dosage }}
              </Link>
            </td>
            <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="`/medical-supplies/${data.id}/edit`" tabindex="-1">
                <el-tag
                  :type="data.quantity > 20 ? 'success': 'danger'"
                  effect="dark"
                  round
                >
                  {{ data.quantity }}
                </el-tag>
              </Link>
            </td>
            <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="`/medical-supplies/${data.id}/edit`" tabindex="-1">
                {{ data.date_expire }}
              </Link>
            </td>
            <td class="border-t">
              <Link class="flex items-center px-6 py-4" :href="`/medical-supplies/${data.id}/edit`" tabindex="-1">
                {{ new Intl.DateTimeFormat('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }).format(new Date(data.date_received)) }}
              </Link>
            </td>
            <td class="w-px border-t">
              <Link class="flex items-center px-4" :href="`/medical-supplies/${data.id}/edit`" tabindex="-1">
                <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
              </Link>
            </td>
          </tr>
          <tr v-if="supplies.length === 0">
            <td class="px-6 py-4 border-t" colspan="4">No supplies found.</td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { write, utils } from 'xlsx';

  import { Head, Link } from '@inertiajs/vue3'

  import Icon from '@/Shared/Icon.vue'
  import pickBy from 'lodash/pickBy'
  import Layout from '@/Shared/Layout.vue'
  import throttle from 'lodash/throttle'
  import mapValues from 'lodash/mapValues'
  import SearchFilter from '@/Shared/SearchFilter.vue'

  export default {
    components: {
      Head,
      Icon,
      Link,
      SearchFilter,
    },
    layout: Layout,
    props: {
      filters: Object,
      supplies: Array,
      categories: Array,
    },
    data(props) {
      console.log("sdss", this, props)
      return {
        form: {
          search: this.filters.search,
          supplies_id: this.filters.supplies_id,
          otherFilter: this.filters.otherFilter,
       },
        otherFilter: [
          {
            id: 1,
            name: 'Low Stocks',
          },
          {
            id: 2,
            name: 'Expiration in next month',
          }
        ]
      }
    },
    watch: {
      form: {
        deep: true,
        handler: throttle(function () {
          this.$inertia.get('/medical-supplies', pickBy(this.form), { preserveState: true })
        }, 150),
      },
    },
    methods: {
      reset() {
        this.form = mapValues(this.form, () => null)
      },
      mappedReport(data) {
        console.log("🚀 ~ mappedReport ~ data:", data)
        return data.map((item) => {
          return {
            id: item.id,
            name: item.name,
            manufacturer: item.manufacturer,
            dosage: item.dosage, 
            quantity: item.quantity,
            category: item.category.name,
            date_received: item.date_received ,
            date_expire: item.date_expire
          }
        })
      },
      generateReport() {
        const customHeaders = [
          'Product ID',
          'Product Name',
          'Manufacturer',
          'Dosage',
          'Quantity',
          'Category',
          'Received Date',
          'Expiration Date',
        ];

      //Had to create a new workbook and then add the header
     
      const wb = utils.book_new();
      const ws = utils.json_to_sheet([]);
      utils.sheet_add_aoa(ws, [customHeaders]);

      //Starting in the second row to avoid overriding and skipping headers
      utils.sheet_add_json(ws, this.mappedReport(this.supplies), { origin: 'A2', skipHeader: true });

      utils.book_append_sheet(wb, ws, 'Sheet1');

      const workbook = write(wb, { bookType: 'xlsx', type: 'binary' });

      const excelFile = new Blob([this.s2ab(workbook)], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(excelFile);
      const link = document.createElement('a');
      link.href = url;
      link.download = `supplies-report-${new Date().toDateString()}.xlsx`;
      link.click();
      URL.revokeObjectURL(url);
    },
    s2ab(s) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
    }
    },
  }
  </script>
  