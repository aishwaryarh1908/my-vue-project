<template>
  <div class="dashboard-container">
    <aside class="sidebar">
      <!-- Sidebar content goes here -->
      <router-link to="/leads" class="sidebar-item">All Leads</router-link>
      <router-link to="/inbox" class="sidebar-item">Master Inbox</router-link>
      <router-link to="/logout" class="sidebar-item">Logout</router-link>
    </aside>
    <main class="main-content">
      <div v-if="user" class="welcome-message">
        <h3>Welcome to the Dashboard, {{ user.email }}</h3>
        <button @click="logout" class="logout-button">Logout</button>
      </div>
      <div v-else class="welcome-message">
        <h3>Welcome to the Dashboard, Please Login</h3>
        <button @click="login" class="logout-button">Login</button>
      </div>
      <div v-if="user" class="dashboard-data">
        <div class="section">
          <h2>Campaign Details  Report</h2>
          <table>
            <thead >
              <tr style="background: rgba(236, 231, 226, 0.784);">
                <th>Campaign Details</th>
                <th></th>
                <th></th>
                <th>Report</th><th></th>
              </tr>
            </thead>
            <!-- <thead>
              <tr>
                <th>Campaign Name</th>
                <th>Sent</th>
                <th>Opened</th>
                <th>Clicked</th>
                <th>Date</th>
              </tr>
            </thead> -->
            <tbody>
              <tr v-for="entry in campaignReportData" :key="entry.id">
                <td>{{ entry.name }} Campaign Name </td>
                <td>{{ entry.sent }}</td>
                <td>{{ entry.opened }}</td>
                <td>{{ entry.clicked }}</td>
                <td>{{ entry.date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['user']),
    campaignReportData() {
      // Replace with your combined campaign and report JSON data
      return [
        { id: 1, name: 'Campaign 1', sent: 1000, opened: 800, clicked: 200, date: '2023-08-01' },
        { id: 2, name: 'Campaign 2', sent: 1500, opened: 1200, clicked: 300, date: '2023-08-02' },
        { id: 1, name: 'Campaign 3', sent: 1000, opened: 800, clicked: 200, date: '2023-08-01' },
        { id: 2, name: 'Campaign 4', sent: 1500, opened: 1200, clicked: 300, date: '2023-08-02' },
      ];
    },
  },
  methods: {
    ...mapActions(['logout']),
    logout() {
      // this.logout(); // Call the Vuex logout action
      this.$router.push('/login'); // Redirect to the login page
    },
    login() {
      // this.logout(); // Call the Vuex logout action
      this.$router.push('/login'); // Redirect to the login page
    }
  }
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
}

.sidebar {
  width: 15%; /* Adjust the width of the sidebar */
  background-color: #f5f5f5;
  color: #10145b;
  display: flex;
  flex-direction: column; /* Display items vertically */
}

.sidebar-item {
  padding: 12px;
  margin-bottom: 10px;
  transition: background-color 0.3s; /* Add smooth transition */
}

.sidebar-item:hover {
  background-color: #757AE9; /* Change color on hover */
  color: white; /* Change text color on hover */
}

.main-content {
  flex: 1;
  width: 85%;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.dashboard-data {
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 20px;
 
}

.section {
  /* border: 1px solid #ddd; */
  width: 100%;
  border-radius: 8px;
  /* background-color: #f5f5f5; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
}

th,
td {
  padding: 10px;
  text-align: center;
}

th {
  background-color: #757AE9;
  color: white;
}

td {
  border-top: 1px solid #ddd;
}

.welcome-message {
  font-size: 24px;
  margin-bottom: 20px;
}

.logout-button {
  background-color: #CB4B4B; /* Negative Color */
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #AE3737; /* Darkened Negative Color */
}
</style>
