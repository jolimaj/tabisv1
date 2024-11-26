<template>
  <div>
    <div id="dropdown" />
    <div class="md:flex md:flex-col">
      <div class="md:flex md:flex-col md:h-screen">
        <div class="md:flex md:shrink-0">
          <div class="flex items-center justify-between px-6 py-4 bg-white-400 md:shrink-0 md:justify-center md:w-56">
            <Link class="mt-1" href="/">
              <logo class="fill-white" width="120" height="28" />
            </Link>
            <dropdown class="md:hidden" placement="bottom-end">
              <template #default>
                <svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
              </template>
              <template #dropdown>
                <div class="mt-2 px-8 py-4 bg-white rounded shadow-lg">
                  <main-menu :role = "auth.user.admin"/>
                </div>
              </template>
            </dropdown>
          </div>
          <div class="md:text-md flex items-center justify-between p-4 w-full text-sm bg-white border-b md:px-12 md:py-0">
            <div class="mr-4 mt-1 text-indigo-800 text-transform uppercase font-bold">{{ auth.user.account.name }}</div>
            <div  class="mt-1" placement="bottom-end">
              <!-- <dropdown v-show="notificationOpen">
                <template #dropdown>
                  <el-container >
                  <el-main>
                    <el-table :data="notifications">
                      <el-table-column prop="title" label="Title" />
                      <el-table-column prop="message" label="Message" />
                      <el-table-column prop="created_at" label="Created At" width="180" />
                    </el-table>
                  </el-main>
                </el-container>
                </template>
              </dropdown> -->
              <dropdown class="ml-5" placement="bottom-end">
                <template #default>
                  <div class="group flex items-center cursor-pointer select-none">
                    <div>
                      <el-badge :value="filterRead(auth?.user?.notifications).length" class="item">
                      <el-button text circle>
                        <el-icon color="#6b21a8" :size="20"><BellFilled /></el-icon>
                      </el-button>
                    </el-badge>
                    </div>
                  </div>
                </template>
                <template #dropdown>
                  <div id="dropdownMenu" class='absolute block right-0 shadow-lg bg-white py-4 z-[1000] min-w-full rounded-lg w-[410px] max-h-[500px] overflow-auto mt-2'>
                    <!-- <div class="flex items-center justify-between px-4 mb-4">
                      <p class="text-xs text-blue-600 cursor-pointer">Clear all</p>
                      <p class="text-xs text-blue-600 cursor-pointer">Mark as read</p>
                    </div> -->

                    <ul class="divide-y">
                      <li class='p-4 flex items-center hover:bg-gray-50 cursor-pointer' v-for = "notification in auth.user?.notifications" :key="notification.id" @click="markAsRead(notification.id)">
                        <!-- <div class="w-12 h-12 rounded-full shrink-0" > s</div> -->

                        <div class="ml-6">
                          <h3 :class="notification?.read ? 'text-sm text-[#333] ' : 'text-sm text-[#333] font-bold'">{{notification?.title}}</h3>
                          <p class="text-xs text-gray-500 mt-2">{{notification?.message}}</p>
                          <p class="text-xs text-blue-600 leading-3 mt-2">{{new Date(notification?.created_at).toDateString()}}</p>
                        </div>
                      </li>
                    </ul>
                    <!-- <p class="text-xs px-4 mt-6 mb-4 inline-block text-blue-600 cursor-pointer">View all Notifications</p> -->
                  </div>
                </template>
              </dropdown>
              <dropdown class="ml-5" placement="bottom-end">
                <template #default>
                  <div class="group flex items-center cursor-pointer select-none">
                    <div class="mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap">
                      <span color="#6b21a8">{{ auth.user.admin ? 'Admin' : auth.user.first_name }}</span>
                      <span class="hidden md:inline">&nbsp;{{ auth.user.admin ? '' : auth.user.last_name }}</span>
                    </div>
                    <icon class="w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600" name="cheveron-down" />
                  </div>
                </template>
                <template #dropdown>
                  <div class="mt-2 py-2 text-sm bg-white rounded shadow-xl">
                    <Link class="block px-6 py-2 hover:text-white hover:bg-indigo-500" :href="`/profile/${auth.user.id}`">My Profile</Link>
                    <Link class="block px-6 py-2 w-full text-left hover:text-white hover:bg-indigo-500" href="/logout" method="delete" as="button">Logout</Link>
                  </div>
                </template>
              </dropdown>
            </div>
          </div>
        </div>
        <div class="md:flex md:grow md:overflow-hidden">
          <main-menu class="hidden shrink-0 p-12 w-56 bg-white overflow-y-auto md:block" :role = "auth.user.admin"/>
          <div class="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto" scroll-region>
            <flash-messages />
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import Icon from '@/Shared/Icon.vue'
import Logo from '@/Shared/Logo.vue'
import Dropdown from '@/Shared/Dropdown.vue'
import MainMenu from '@/Shared/MainMenu.vue'
import FlashMessages from '@/Shared/FlashMessages.vue'
import { BellFilled } from '@element-plus/icons-vue'


export default {
  components: {
    Dropdown,
    FlashMessages,
    Icon,
    Link,
    Logo,
    MainMenu,
    BellFilled,
    Notification,
  },
  props: {
    auth: Object,
  },
  data(){
    return {
      form: this.$inertia.form({  
        read: 1,
      })
    }
  },
  methods: {
    markAsRead(notificationId) {
      this.$inertia.put(`/notifications/${notificationId}/mark-as-read`);
    },

    filterRead(arr) {
      return arr.filter((item) => item?.read === 0)
    }
  }
 }
</script>
