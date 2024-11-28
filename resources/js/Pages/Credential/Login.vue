<template>
  <Head title="Login" />
  <div class="flex items-center justify-center p-6 min-h-screen bg-white-800 home">
    <div class="w-full max-w-md">
      <form class="mt-8 bg-white rounded-lg shadow-xl overflow-hidden" @submit.prevent="login">
        <div class="px-10 py-12">
          <Link class="mt-1" href="/">
            <logo class="block mx-auto w-full max-w-xs fill-white" height="50" />
          </Link>
          <div class="mt-6 mx-auto w-24 border-b-2" />
          <text-input v-model="form.email" :error="form.errors.email" class="mt-10" label="Email" type="email" autofocus autocapitalize="off" />
          <text-input v-model="form.password" :error="form.errors.password" class="mt-6" label="Password" type="password" />
          <label class="flex items-center mt-6 select-none" for="remember">
            <input id="remember" v-model="form.remember" class="mr-1" type="checkbox" />
            <span class="text-sm">Remember Me</span>
          </label>
        </div>
        <div class="flex px-10 py-4 bg-gray-100 border-t border-gray-100">
          <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">Login</loading-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import { Head } from '@inertiajs/vue3'
import Logo from '@/Shared/Logo.vue'
import TextInput from '@/Shared/TextInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    Head,
    LoadingButton,
    Logo,
    TextInput,
    Link,
  },
  data() {
    return {
      form: this.$inertia.form({
        email: '',
        password: '',
        user_type:'',
        remember: false,
      }),
    }
  },
  methods: {
    login() {
      this.form.post('/login')
    },
  },
  
}
</script>

<style scoped>
.home {
  background-image: url('../../../images/bg.png');
  background-size: cover;
  background-position: center center;
  height: 100vh;
}
</style>
