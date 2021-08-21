<template>
<!--  管理端口，数据端口是DataPort，也就是原来的FormView-->
<!--  组件中的adminforms文件夹是用来存放一些可能用到的组件，类比于dataforms-->
  <div>
    <el-container>

      <LeftBar_></LeftBar_>

      <el-aside >
<!--        侧边栏-->
        <SideBar_></SideBar_>
      </el-aside>

      <el-container>
        <el-header>
<!--          头部导航栏-->
          <NavBar_></NavBar_>
        </el-header>

        <el-main>
<!--      主体部分-->
          <el-row >
            <el-col class="tac3" :span="24">
              <router-view></router-view>
            </el-col>
          </el-row>

        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar_ from "../bars/SideBar_";
import NavBar_ from "../bars/NavBar_";
import LeftBar_ from "../bars/LeftBar_";

export default {
  name: "AdminPort",
  components: {
    LeftBar_,
    NavBar_,
    SideBar_
  }
}
</script>

<style scoped>

</style>