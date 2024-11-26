<template>
  <div>
    <Head title="Patient Record" />
    <h1 class="mb-8 text-3xl font-bold">Patient Record</h1>
    <div class="flex items-center justify-between mb-6">
      <search-filter v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset">
        <label class="block text-gray-700">Gender:</label>
        <select v-model="form.sex" class="form-select mt-1 w-full">
          <option  v-for="data in genders" :key="data?.id" :value="data?.id">{{data.name}}</option>
        </select>
        <label class="block text-gray-700">Type of Animals:</label>
        <select v-model="form.animal_type_id" class="form-select mt-1 w-full">
          <option  v-for="data in animals" :key="data?.id" :value="data?.id">{{data.name}}</option>
        </select>
        <label class="block text-gray-700">Age:</label>
        <select v-model="form.age" class="form-select mt-1 w-full">
          <option  v-for="data in ageData" :key="data?.id" :value="data?.id">{{data.value}}</option>
        </select>
        <label class="block text-gray-700">Barangay:</label>
        <select v-model="form.barangay_id" class="form-select mt-1 w-full">
          <option  v-for="data in barangays" :key="data?.id" :value="data?.id">{{data.name}}</option>
        </select>
      </search-filter>
  
      <div>
        <button class="p2 mt-1"@click="generateReport" :disabled ="patients.data.length === 0">
          <icon name="printer" class="block w-6 h-6 fill-gray-400" />
        </button>
        <el-icon :size="size" :color="color">
          <Search />
        </el-icon>
        <Link class="btn-indigo" href="/patients/create">
          <span>Create</span>
          <span class="hidden md:inline">&nbsp;Patient</span>
        </Link>
      </div>
 
    </div>
    <div class="bg-white rounded-md shadow overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <tr class="text-left font-bold">
          <th class="pb-4 pt-6 px-6">Name</th>
          <th class="pb-4 pt-6 px-6">Date of Bite</th>
          <th class="pb-4 pt-6 px-6">Age</th>
          <th class="pb-4 pt-6 px-6">Sex</th>
          <th class="pb-4 pt-6 px-6">Barangay</th>
          <th class="pb-4 pt-6 px-6">Address</th>
          <th class="pb-4 pt-6 px-6" colspan="2">Phone</th>
        </tr>
        <tr v-for="patient in patients.data" :key="patient.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
          <td class="border-t">
            <Link class="flex items-center px-6 py-4 focus:text-indigo-500"  >
              {{`${patient.first_name} ${patient.middle_name} ${patient.last_name}` }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4"  tabindex="-1"  >
              {{ patient.biteHistory[0]?.date_of_bite }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4"  tabindex="-1"  >
              {{ patient.age }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4"  tabindex="-1"  >
              {{ name(genders, patient.sex) }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4"  tabindex="-1"  >
              {{ name(barangays, patient.barangay_id) }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4"  tabindex="-1"  >
              {{ patient.address }}
            </Link>
          </td>
          <td class="border-t">
            <Link class="flex items-center px-6 py-4"  tabindex="-1"  >
              {{ patient.phone }}
            </Link>
          </td>
          <td class="w-px border-t">
            <el-button type="info"  @click="viewHistory(patient)">Bite History</el-button>
          </td>
          <td class="w-px border-t">
            <Link class="flex items-center px-4" :href="`/patients/${patient.id}/edit`" tabindex="-1">
              <icon name="cheveron-right" class="block w-6 h-6 fill-gray-400" />
            </Link>
          </td>
        </tr>
        <tr v-if="patients.data.length === 0">
          <td class="px-6 py-4 border-t" colspan="4">No patient records found.</td>
        </tr>
      </table>
      <el-drawer
        v-model="bite_history"
        title="Animal Bite History"
        direction="rtl"
        size="50%"
      >
      <template #header>
        <h4 class ="text-3xl font-bold center">Animal Bite History</h4>
      </template>
        <el-table :data="form.bite_history.biteHistory" style="width: 100%" height="500">
          <el-table-column property="date_of_bite" label="Date" width="100"/>
          <el-table-column label="Bite Type" width="100">
              <template #default="scope">
              {{ name(biteTypes, scope?.row.type_of_bite_id)}}
            </template>
          </el-table-column>
          <el-table-column label="Animal"width="100">
              <template #default="scope">
              {{ name(animals, scope?.row.animal_type_id)}}
            </template>
          </el-table-column>
          <el-table-column label="Category" width="100">
              <template #default="scope">
              {{ name(categories, scope?.row.category_id)}}
            </template>
          </el-table-column>
          <el-table-column label="Animal Status" width="150">
              <template #default="scope">
              {{ name(animalStatus, scope?.row.animal_status_id)}}
            </template>
          </el-table-column>
          <el-table-column label="Site" width="100">
              <template #default="scope">
              {{ name(site, scope?.row.site_id)}}
            </template>
          </el-table-column>
          <el-table-column label="Washed" width="100">
              <template #default="scope">
                <el-tag
                  :type="scope.row.washed  ? 'success' : 'danger'"
                  disable-transitions
                  >{{ scope.row.washed ? 'Yes' : 'No' }}</el-tag
                >
            </template>
          </el-table-column>
          <el-table-column label="Tissue Culture Vaccine" width="200">
            <template #default="scope">
              <div v-for="item in mappedRecord(tissueCultureVaccine, scope.row.tcv_id)" :key="item.id">
                  {{`Route: ${item.route}`}}<br>
                  {{`Day 0: ${item.day0}`}}<br>
                  {{`Day 3: ${item.day3}`}}<br>
                  {{`Day 7: ${item.day7}`}}<br>
                  {{`Day 14: ${item.day14}`}}<br>
                  {{`Day 28: ${item.day28}`}}<br/>
                  {{`Brand name: ${name(supplies, item.vacine_id)}`}}
              </div>   
            </template>
          </el-table-column>
          <el-table-column label="Outcome" width="100">
              <template #default="scope">
              {{ name(outcome, scope?.row.outcome_id)}}
            </template>
          </el-table-column>
          <el-table-column label="Remarks" property="remarks" fixed="right"width="300"/>
        </el-table>
        <template #footer>
          <div style="flex: auto">
            <Link class="btn-indigo" :href="`/patients/${form.bite_history?.newEntry?.id}/newEntry`">
              <span>Create</span>
              <span class="hidden md:inline">&nbsp;New Entry</span>
            </Link>
          </div>
        </template>
      </el-drawer>
    </div>
    <pagination class="mt-6" :links="patients?.links" />
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
import Pagination from '@/Shared/Pagination.vue'
import SearchFilter from '@/Shared/SearchFilter.vue'

export default {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter,
  },
  layout: Layout,
  props: {
    filters: Object,
    patients: Object,
    genders: Array,
    animals: Array,
    biteTypes: Array,
    categories: Array,
    animalStatus: Array,
    categories: Array,
    outcome: Array,
    site: Array,
    supplies: Array,
    suppliesCategory: Array,
    barangays: Array,
    tissueCultureVaccine: Array
  },
  data() {
    return {
      bite_history: false,
      form: {
        search: this.filters.search,
        sex: this.filters.sex,
        age: this.filters.age,
        animal_type_id: this.filters.animal_type_id,
        barangay_id: this.filters.barangay_id,
        date_of_bite: this.filters.date_of_bite,
        bite_history: null
      },
      ageData: [
        {
          id: 1,
          value: '0-12',
        },
        {
          id: 2,
          value: '13-19',
        },
        {
          id: 3,
          value: '20-30',
        },
        {
          id: 4,
          value: '30-40',
        },
        {
          id: 5,
          value: '41-59',
        },
        {
          id: 6,
          value: '60+',
        },
      ],
    }
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function () {
        this.$inertia.get('/patients', pickBy(this.form), { preserveState: true })
      }, 150),
    },
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null)
    },
    viewHistory(data){
      this.form.bite_history = {
        biteHistory: data?.biteHistory,
        tissueCultureVaccine: data?.tissueCultureVaccine,
        newEntry: data
      };
      this.bite_history = true;
    },
    name(data, id){
      const mapped = data.find((item) => item.id === id);
      return mapped?.name
    },
    mappedRecord(data, id){
      return data.filter((item) => item.id === id);
    },

    mappedReport(data){
      return data.map((item) => {
        const biteHistory = item.biteHistory.map((item) => {

          const tissue = this.tissueCultureVaccine.find((items) => items.id === item.tcv_id );
          return {
            date_of_bite: item?.date_of_bite ? new Date(this.item?.date_of_bite) : '',
            date_of_consult: item?.date_of_consult ? new Date(this.item?.date_of_consult) : '',
            animal_status_id: this.name(this.animalStatus, item.animal_status_id),
            animal_type_id: this.name(this.animals, item.animal_type_id),
            place: item.place,
            category_id: this.name(this.categories, item.category_id),
            site_id: this.name(this.site, item.site_id),
            type_of_bite_id: this.name(this.biteTypes, item.type_of_bite_id),
            washed: item?.washed === 1 ? 'Yes' : 'No',
            rig_date: item?.rig_date ? new Date(this.item?.rig_date) : '',
            route: tissue?.route,
            day0: tissue?.day0,
            day3: tissue?.day3,
            day7: tissue?.day7,
            day14: tissue?.day14,
            day28: tissue?.day28,  
            supplies_id: this.name(this.supplies, item.supplies_id),
            outcome_id: this.name(this.outcome, item.outcome_id),
            remarks: item.remarks,
          }
        });
        return {
          id: item?.id,
          name: item?.middle_name ? 
          `${item.first_name} ${item.middle_name} ${item.last_name}`:`${item.first_name} ${item.last_name}`,
          phone: item.phone,
          gender: this.name(this.genders, item.sex),
          age: item.age,
          barangay: this.name(this.barangays, item.barangay_id),
          address: item.address,
          ...biteHistory[0]
        }
      })
    },

    generateReport() {
      const customHeaders = [
        'Patient ID',
        'Name',
        'Phone Number',
        'Gender',
        'Age',
        'Barangay',
        'Address',
        'Date of Bite',
        'Date of Consult',
        'Animal Status',
        'Animal Type',
        'Place',
        'Category',
        'Site',
        'Type of Bite',
        'Washed',
        'RIG Date',
        'Route',
        'Day0',
        'Day3',
        'Day7',
        'Day14',
        'Day28',
        'Brand Name',
        'Outcome',
        'Remarks'
      ];

      //Had to create a new workbook and then add the header
     
      const wb = utils.book_new();
      const ws = utils.json_to_sheet([]);
      utils.sheet_add_aoa(ws, [customHeaders]);

      //Starting in the second row to avoid overriding and skipping headers
      utils.sheet_add_json(ws, this.mappedReport(this.patients.data), { origin: 'A2', skipHeader: true });

      utils.book_append_sheet(wb, ws, 'Sheet1');

      const workbook = write(wb, { bookType: 'xlsx', type: 'binary' });

      const excelFile = new Blob([this.s2ab(workbook)], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(excelFile);
      const link = document.createElement('a');
      link.href = url;
      link.download = `patient-report-${new Date().toDateString()}.xlsx`;
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
