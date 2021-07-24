<template>
  <div id="app">
    <div id="top">
      <nav-bar></nav-bar>
    </div>
    <div id="bottom">
      <keep-alive include="formView">
        <form-view></form-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
  import NavBar from './components/bars/NavBar.vue'
  import FormView from './views/FormView.vue';

  export default {
    components: {
      NavBar,
      FormView
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