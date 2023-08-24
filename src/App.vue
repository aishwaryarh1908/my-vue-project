<template>
  <div id="app">
    <Sidebar />
    <div class="main-container">
     
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/SideBar.vue';

export default {
  components: {
    
    Sidebar
  }
};
</script>

<style>
/* Basic styling for the layout */

</style>
