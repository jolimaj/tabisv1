<template>
  <div>
    <div v-for="(menu, key) in role ? menuList : [menuList[0],menuList[2]]" :key="key" class="mb-4" @click="isUrl()">
      <Link class="group flex items-center py-3" :href="menu.path" @click="isUrl()">
        <icon :name="menu.icon" class="mr-2 w-4 h-4" :class="menu.path === currentPage ? 'fill-indigo-800' : 'fill-indigo-500 group-hover:fill-orange-800'"/>
        <div :class="menu.path === currentPage  ? 'text-indigo-800' : 'text-indigo-500 group-hover:text-orange-800'">{{menu.page}}</div>
      </Link>
    </div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'

export default {
  components: {
    Icon,
    Link,
  },
  methods: {
    isUrl() {
      let currentUrl = this.$page.url;
      this.currentPage = currentUrl;
      console.log('cc', this.currentPage)
    },
  },
  props: {
    role: String,
    url: String,
  },
  data () {
    return {
      menuList: [
        {
          page: 'Dashboard',
          path: '/',
          icon: 'dashboard'
        },
        {
          page: 'Users',
          path: '/users',
          icon: 'users'
        },
        {
          page: 'Patients',
          path: '/patients',
          icon: 'patients'
        },
        {
          page: 'Supplies',
          path: '/medical-supplies',
          icon: 'supplies'
        }
      ],
      currentPage: '/'
    }
  }
}
</script>
