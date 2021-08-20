<template>
<!--  管理端口，数据端口是DataPort，也就是原来的FormView-->
<!--  组件中的adminforms文件夹是用来存放一些可能用到的组件，类比于dataforms-->
  <div>
    <el-container>
      <el-aside width="200px">
<!--        侧边栏-->
        <SideBar_></SideBar_>
      </el-aside>

      <el-container>
        <el-header>
<!--          头部导航栏-->
          <NavBar_></NavBar_>
        </el-header>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar_ from "../bars/SideBar_";
import NavBar_ from "../bars/NavBar_";

export default {
  name: "AdminPort",
  components: {
    NavBar_,
    SideBar_
  }
}
</script>

<style scoped>

</style>