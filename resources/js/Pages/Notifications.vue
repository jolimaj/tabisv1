<template>
    <el-container>
      <el-main>
        <el-table :data="notifications">
          <el-table-column prop="title" label="Title" />
          <el-table-column prop="message" label="Message" />
          <el-table-column prop="created_at" label="Created At" width="180" />
        </el-table>
      </el-main>
    </el-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notifications: [
            {
                title: 'dsds', 
                message: 'sxsdsd',
                created_at: new Date()
            }
        ]
      };
    },
    mounted() {
    //   this.fetchNotifications();
    },
    methods: {
//       fetchNotifications() {
//         // Fetch notifications from your backend API
//         axios.get('/api/notifications')
//           .then(response => {
//             this.notifications   
//    = response.data;
//           });
//       }
    }
  };
  </script>