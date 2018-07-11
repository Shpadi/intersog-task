<template>
  <div class="dashboard">
    <div class="dashboard-header">
        <h1>Dashboard</h1>
    </div>
    <div class="dashboard-body">
        <template v-for="item in getCompaniesInfoFirst">
            <DashboardItem :item="item"></DashboardItem>
        </template>
        <template v-for="item in continueDashboard">
            <DashboardItem :item="item"></DashboardItem>
        </template>
        <div class="download-more" v-if="getCompaniesInfo.length" @click="downloadMore()">dowload more</div>
    </div>
  </div>
</template>

<script>
import DashboardItem from './dashboard/dashboardItem'
import Vue from 'vue'

Vue.component('DashboardItem', DashboardItem);
export default {
  name: 'Dashboard',
  data() {
      return {
          dashboardItems:[],
          startIndex:0,
          endIndex:6,
          continueDashboard:[],
      }
  },
  computed: {
      getCompaniesInfo() {
         return window.storeCampaings.getters.getCompaniesInfo;
      },
      getCompaniesInfoFirst() {
          return window.storeCampaings.getters.getCompaniesInfoFirst;
      }
  },
  mounted() {
      window.storeCampaings.dispatch('LOAD_COMPANIES_INFO');
  },
   methods:{
       downloadMore() {
           let new_arr=this.getCompaniesInfo.slice(this.startIndex,this.endIndex);
           new_arr.map((item)=>{
               this.continueDashboard.push(item);
           });
           this.getCompaniesInfo.splice(this.startIndex,this.endIndex);

       }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.dashboard-body {
display: flex;
flex-wrap: wrap;
    align-items: center;
}

    .download-more {
        width: 20%;
        padding: 30px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 25px;
        color: #5ac5c6;
        text-transform: uppercase;

    }
</style>
