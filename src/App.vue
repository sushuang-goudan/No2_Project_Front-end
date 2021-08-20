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
    <AdminPort></AdminPort>
  </div>
</template>

<script>
  // import NavBar from './components/bars/NavBar.vue'
  // import FormView from './components/forms/DataPort.vue';
  import AdminPort from "./components/forms/AdminPort";

  export default {
    components: {
      AdminPort,
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
  #top {
    width: 70vw;
    height: 15vh;
    margin: 0 15vw;
  }

  #bottom {
    width: 70vw;
    height: 80vh;
    margin: 0 15vw;
  }
</style>