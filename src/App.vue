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

<keep-alive include="formView">
  <router-view></router-view>
</keep-alive>

  </div>
</template>

<script>
  // import NavBar from './components/bars/NavBar.vue'
  // import FormView from './components/forms/DataPort.vue';
  // import AdminPort from "./components/forms/AdminPort";

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
/*总是显示进度条，解决展开关闭折叠面板，页面伸缩的问题*/
html {
  overflow: scroll;
}
</style>