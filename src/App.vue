<template>
  <div id="app">
<!--    <div id="top">-->
<!--      <nav-bar></nav-bar>-->
<!--    </div>-->
<!--    <div id="bottom">-->
<!--      <keep-alive include="formView">-->
<!--        <form-view></form-view>-->
<!--      </keep-alive>-->
<!--    </div>-->
<!--  <AdminPort></AdminPort>-->
  <router-view></router-view>
  </div>
</template>

<script>
  // import NavBar from './components/bars/NavBar.vue'
  // import FormView from './components/forms/DataPort.vue';
  //import AdminPort from "./components/forms/AdminPort";

  export default {
    components: {
     // AdminPort,
      // NavBar,
      // FormView
    },
    data: function () {
      return {
      }
    },
  }
</script>

<style>
/*取消链接的下划线*/
a{
  text-decoration:none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>