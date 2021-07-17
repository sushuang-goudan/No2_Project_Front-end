<template>
    <div>
        <el-menu :default-active="activePage" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">指标填报</el-menu-item>
            <el-menu-item index="3">公告帮助</el-menu-item>
            <el-menu-item index="4">账户中心</el-menu-item>
            <el-menu-item index="5">关于</el-menu-item>
        </el-menu>
    </div>
</template>

<script>

  export default {
    data: function () {
      return {

      }
    },
  }
</script>