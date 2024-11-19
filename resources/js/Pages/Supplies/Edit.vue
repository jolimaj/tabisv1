<template>
  <div>
    <Head :title="`${form.name}`" />
    <h1 class="mb-8 text-3xl font-bold">
      <Link class="text-indigo-400 hover:text-indigo-600" href="/medical-supplies">Supplies</Link>
      <span class="text-indigo-400 font-medium">/</span>
      {{ form.name }}
    </h1>
    <div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="update">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input v-model="form.name" :error="form.errors.name" class="pb-8 pr-6 w-full lg:w-1/2" label="Brand name" disabled/>
          <text-input v-model="form.manufacturer" :error="form.errors.manufacturer" class="pb-8 pr-6 w-full lg:w-1/2" label="Manufacturer" disabled/>
          <text-input v-model="form.dosage" :error="form.errors.dosage" class="pb-8 pr-6 w-full lg:w-1/2" label="Dosage" />
          <number-text v-model="form.quantity" :error="form.errors.quantity" class="pb-8 pr-6 w-full lg:w-1/2"  label="Quantity" />
          <!-- <select-input v-model="form.supplies_id" :error="form.errors.supplies_id" class="pb-8 pr-6 w-full lg:w-1/2" label="Category"> -->
            <!-- <option v-for="data in categories" :key="data.id" :value="data.id">{{data.name}}</option>
          </select-input> -->
          <date-pick v-model="form.date_expire" :error="form.errors.date_expire" class="pb-8 pr-6 w-full lg:w-1/2" label="Expiration Date"/>
          <date-pick v-model="form.date_received" :error="form.errors.date_received" class="pb-8 pr-6 w-full lg:w-1/2" label="Received Date"/>


        </div>
        <div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
          <loading-button :loading="form.processing" class="btn-indigo" type="submit">Update Supply</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import NumberText from '@/Shared/NumberText.vue'
import TextInput from '@/Shared/TextInput.vue'
import DatePick from '@/Shared/DatePick.vue'
import SelectInput from '@/Shared/SelectInput.vue';
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    NumberText,
    DatePick
  },
  layout: Layout,
  remember: 'form',
  props: {
    categories: Array,
    current_user: Object,
    supply: Object
  },
  data(props) {
    return {
      form: this.$inertia.form({
        name: this.supply.name,
        manufacturer: this.supply.manufacturer,
        dosage: this.supply.dosage,
        quantity: this.supply.quantity,
        date_received: this.supply.date_received,
        date_expire: this.supply.date_expire,
        account_id: props.current_user.id,
      }),
    }
  },
  methods: {
    update() {
      this.form.put(`/medical-supplies/${this.supply.id}`)
    },
  },
}
</script>
