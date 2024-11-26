<template>
  <div>
    <Head :title="`${form.first_name} ${form.last_name}`" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/patients">Patients</Link>
      <span class="text-indigo-400 font-medium">/</span>
      {{ form.first_name }} {{ form.last_name }}
    </h1>
    <div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
      <div class="-mb-8 p-5 flex items-center justify-end text-align-center">        
        <el-steps style="--el-tag-bg-color: red" :active="active" aligned-center>
          <el-step title="Personal Information" />
          <el-step title="Incident Details" />
          <el-step title="Treatment Information" />
          <el-step title="Tissue Culture Vaccine" />
        </el-steps>
      </div>

      <form @submit.prevent="update">
        <div class="flex flex-wrap -mb-8 p-8">
          <div class="flex flex-wrap -mb-8 p-8" v-if="active === 1">
            <text-input v-model="form.first_name" :error="form.errors.first_name" class="pb-8 pr-6 w-full lg:w-1/2" label="First name" disabled/>
            <text-input v-model="form.middle_name" :error="form.errors.middle_name" class="pb-8 pr-6 w-full lg:w-1/2" label="Middle name" disabled/>
            <text-input v-model="form.last_name" :error="form.errors.last_name" class="pb-8 pr-6 w-full lg:w-1/2" label="Last name" disabled/>
            <select-input v-model="form.sex" :error="form.errors.sex" class="pb-8 pr-6 w-full lg:w-1/2" label="Sex" disabled>
              <option  v-for="gender in genders" :key="gender.id" :value="gender.id">{{gender.name}}</option>
            </select-input>
            <number-text v-model="form.age" :error="form.errors.age" class="pb-8 pr-6 w-full lg:w-1/2" label="Age" />
            <number-text v-model="form.phone" :error="form.errors.phone" class="pb-8 pr-6 w-full lg:w-1/2" label="Contact No" />
            <select-input v-model="form.barangay_id" :error="form.errors.barangay_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Barangay">
              <option  v-for="data in barangays" :key="data.id" :value="data.id">{{data.name}}</option>
            </select-input>
            <textarea-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full lg:w-1/2" label="Address" />
          </div> 
          <div class="flex flex-wrap -mb-8 p-8" v-else-if="active === 2">
            <date-pick v-model="form.date_of_bite" :error="form.errors.date_of_bite" class="pb-8 pr-6 w-full lg:w-1/2" label="Date of Bite" :disabled = "!urlData?.includes('newEntry')"/>
            <text-input v-model="form.place" :error="form.errors.place" class="pb-8 pr-6 w-full lg:w-1/2" label="Place (Where Biting Occured)" :disabled = "!urlData?.includes('newEntry')"/>
            <select-input v-model="form.animal_type_id" :error="form.errors.animal_type_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Animal Type" :disabled = "!urlData?.includes('newEntry')">
              <option  v-for="animal in animals" :key="animal.id" :value="animal.id">{{animal.name}}</option>
            </select-input>
            <select-input v-model="form.washed" :error="form.errors.washed" class="pb-8 pr-6 w-full lg:w-1/2" label="Washed"  :disabled = "!urlData?.includes('newEntry')">
              <option :value="1">Yes</option>
              <option :value="0">No</option>
            </select-input>
            <select-input v-model="form.type_of_bite_id" :error="form.errors.type_of_bite_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Type of Bite"  :disabled = "!urlData?.includes('newEntry')">
              <option  v-for="data in biteTypes" :key="data.id" :value="data.id">{{data.name}}</option>
            </select-input>
            <select-input v-model="form.site_id" :error="form.errors.site_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Site(body parts)"  :disabled = "!urlData?.includes('newEntry')">
                <option  v-for="data in site" :key="data.id" :value="data.id">{{data.name}}</option>
              </select-input>
          </div> 
          <div class="flex flex-wrap -mb-8 p-8" v-else-if="active===3">
              <date-pick v-model="form.date_of_consult" :error="form.errors.date_of_consult" class="pb-8 pr-6 w-full lg:w-1/2" label="Date Of Consult"  :disabled = "!urlData?.includes('newEntry')"/>
              <text-input v-model="form.route" :error="form.errors.route" class="pb-8 pr-6 w-full lg:w-1/2" label="Route"  :disabled = "!urlData?.includes('newEntry')"/>
              <select-input v-model="form.category_id" :error="form.errors.category_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Category"  :disabled = "!urlData?.includes('newEntry')">
                <option  v-for="data in categories" :key="data.id" :value="data.id">{{data.name}}</option>
              </select-input>
              <select-input v-model="form.animal_status_id" :error="form.errors.animal_status_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Animal Status">
                <option  v-for="data in animalStatus" :key="data.id" :value="data.id">{{data.name}}</option>
              </select-input>
              <select-input v-model="form.outcome_id" :error="form.errors.outcome_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Outcome">
                <option  v-for="data in outcome" :key="data.id" :value="data.id">{{data.name}}</option>
              </select-input>
              <select-input v-model="form.vaccine_id" :error="form.errors.vaccine_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Brand Name">
                <option  v-for="data in supplies" :key="data.id" :value="data.id">{{data.name}}</option>
              </select-input>
          </div> 
          <div class="flex flex-wrap -mb-8 p-8" v-else>
            <date-pick v-model="form.rig_date" :error="form.errors.rig_date" class="pb-8 pr-6 w-full lg:w-1/2" label="RIG Date Given"  :disabled = "!urlData?.includes('newEntry')"/>
            <date-pick v-model="form.day0" :error="form.errors.day0" class="pb-8 pr-6 w-full lg:w-1/2" label="Day 0"  :disabled = "!urlData?.includes('newEntry')"/>
            <select-input v-model="form.outcome_id" :error="form.errors.outcome_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Outcome">
              <option  v-for="data in outcome" :key="data.id" :value="data.id">{{data.name}}</option>
            </select-input>
            <textarea-input v-model="form.remarks" :error="form.errors.remarks" class="pb-8 pr-6 w-full lg:w-1/2" label="Remarks" />
          </div> 
        </div>
        <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
          <button v-if="active > 1" class="btn-indigo mr-2" tabindex="-1" type="button" @click="preview">Back</button>
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">{{ active > 3 ? this.getTitle() : 'Next'
          }}</loading-button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import TextareaInput from '@/Shared/TextareaInput.vue'
import DatePick from '@/Shared/DatePick.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import NumberText from '@/Shared/NumberText.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    DatePick,
    TextareaInput,
    NumberText
  },
  layout: Layout,
  props: {
    patient: Object,
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
    current_user: Object,
    tissueCultureVaccine: Array,
    barangays: Array
  },
  remember: 'form',
  data(props) {
    return {
      urlData: this.$page.url,
      form: this.$inertia.form({       
        first_name: this.patient.first_name,
        last_name: this.patient.last_name,
        middle_name: this.patient.middle_name,
        date_of_bite: new Date(this.patient.biteHistory[0]?.date_of_bite),
        date_of_consult: new Date(this.patient.biteHistory[0]?.date_of_consult),
        sex: this.patient.sex,
        age: this.patient.age,
        address: this.patient.address,
        phone: this.patient.phone,
        barangay_id: this.patient.barangay_id,
        site_id:this.$page.url?.includes('newEntry') ? null : this.patient.biteHistory[0]?.site_id,
        type_of_bite_id:this.$page.url?.includes('newEntry') ? null : this.patient.biteHistory[0]?.type_of_bite_id,
        animal_type_id:this.$page.url?.includes('newEntry') ? null : this.patient.biteHistory[0]?.animal_type_id,
        washed:this.$page.url?.includes('newEntry') ? null : this.patient.biteHistory[0]?.washed,
        place:this.$page.url?.includes('newEntry') ? null : this.patient.biteHistory[0]?.place,
        category_id:this.$page.url?.includes('newEntry') ? null : this.patient.biteHistory[0]?.category_id,
        rig_date:this.$page.url?.includes('newEntry') ? null : this.patient.biteHistory[0]?.rig_date,
        tcv_id:this.$page.url?.includes('newEntry') ? null : this.patient.biteHistory[0]?.tcv_id,
        account_id: props.current_user.id,
        outcome_id:this.$page.url?.includes('newEntry') ? null : this.patient.biteHistory[0]?.outcome_id,
        animal_status_id:this.$page.url?.includes('newEntry') ? null : this.patient.biteHistory[0]?.animal_status_id,
        remarks:this.$page.url?.includes('newEntry') ? null : this.patient.biteHistory[0]?.remarks,

        vaccine_id:this.$page.url?.includes('newEntry') ? null : this.tissueCultureVaccine[0].vacine_id,
        route:this.$page.url?.includes('newEntry') ? null : this.tissueCultureVaccine[0].route,
        day0:this.$page.url?.includes('newEntry') ? null : new Date(this.tissueCultureVaccine[0].day0),
        tcv_id:this.$page.url?.includes('newEntry') ? null : this.patient.tcv_id,
      }),
      active: 1
    }
  },
  methods: {
    update() {
       this.active > 4 ?  this.action() : this.next()
    },
    action() {
      this.urlData?.includes('newEntry') ? this.form.post(`/patients/${this.patient.id}/newEntry`): this.form.put(`/patients/${this.patient.id}`)
    },
    destroy() {
      if (confirm('Are you sure you want to delete this patient record?')) {
        this.$inertia.delete(`/patients/${this.patient.id}`)
      }
    },
    restore() {
      if (confirm('Are you sure you want to restore this patient record?')) {
        this.$inertia.put(`/patients/${this.patient.id}/restore`)
      }
    },
    next() {
      if (this.active++ > 4) this.active = 1
    },
    preview() {
      this.active--
    },
    getTitle(){
      console.log('sds', this.urlData?.includes('newEntry'))
      return this.urlData?.includes('newEntry') ? 'Add New Entry' : 'Update Patient Record';
    }
  },
}
</script>
