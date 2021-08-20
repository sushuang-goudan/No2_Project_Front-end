<template>
<!--  管理端口的侧边栏-->
  <div>
    <el-row class="tac">
      <el-col >
        <el-menu>
          <p>质控中心平台</p>
        </el-menu>

        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">

          <el-submenu index="gl_1" @click="getTitle">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="gl_1_1">汇总数据</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="gl_2" @click="getTitle">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>手术治疗</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="gl_2_1">数据统计</el-menu-item>
              <el-menu-item index="gl_2_2">病例列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="gl_3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>内镜下治疗</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="gl_3_1">数据统计</el-menu-item>
              <el-menu-item index="gl_3_2">病例列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="gl_4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>综合治疗</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="gl_4_1">数据统计</el-menu-item>
              <el-menu-item index="gl_4_2">病例列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="gl_5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>随访</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="gl_5_1">数据统计</el-menu-item>
              <el-menu-item index="gl_5_2">病例列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="gl_6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="gl_6_1">消息公告</el-menu-item>
              <el-menu-item index="gl_6_2">用户设置</el-menu-item>
              <el-menu-item index="gl_6_3">修改密码</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-col>
    </el-row>
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