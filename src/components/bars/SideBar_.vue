<template>
<!--  管理端口的侧边栏-->
  <div class="tac2">
        <el-menu>
          <p>质控中心平台</p>
        </el-menu>

        <el-menu
            :default-active="this.$router.path"
            class="el-menu-vertical-demo"
            router
            >

          <el-submenu index="gl_1" >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
            <el-menu-item index="/shou-ye/hui-zong">汇总数据</el-menu-item>
          </el-submenu>

          <el-submenu index="gl_2" >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>手术治疗</span>
            </template>
              <el-menu-item index="/shou-shu/shu-ju">数据统计</el-menu-item>
              <el-menu-item index="/shou-shu/bing-li">病例列表</el-menu-item>
          </el-submenu>

          <el-submenu index="gl_3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>内镜下治疗</span>
            </template>
              <el-menu-item index="/nei-jing/shu-ju">数据统计</el-menu-item>
              <el-menu-item index="/nei-jing/bing-li">病例列表</el-menu-item>
          </el-submenu>

          <el-submenu index="gl_4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>综合治疗</span>
            </template>
              <el-menu-item index="/zong-he/shu-ju">数据统计</el-menu-item>
              <el-menu-item index="/zong-he/bing-li">病例列表</el-menu-item>
          </el-submenu>

          <el-submenu index="gl_5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>随访</span>
            </template>
              <el-menu-item index="/sui-fang/shu-ju">数据统计</el-menu-item>
              <el-menu-item index="/sui-fang/bing-li">病例列表</el-menu-item>
          </el-submenu>

          <el-submenu index="gl_6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统设置</span>
            </template>
              <el-menu-item index="/xi-tong/gong-gao">消息公告</el-menu-item>
              <el-menu-item index="/xi-tong/yong-hu">用户设置</el-menu-item>
              <el-menu-item index="/xi-tong/mi-ma">修改密码</el-menu-item>
          </el-submenu>

        </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar_"
}
</script>

<style scoped>
  p{
  text-align: center;
  color: deepskyblue;
  }
</style>