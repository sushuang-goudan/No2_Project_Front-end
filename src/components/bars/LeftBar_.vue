<template>
  <div>
    <el-row >
      <el-col class="tac1" :span="24">
        <el-menu
            default-active="101"
            class="el-menu-vertical-demo1"
            @open="handleOpen"
            @close="handleClose">
          <el-menu-item index="101">
            <i class="el-icon-menu"></i>
            <span slot="title">导航一</span>
          </el-menu-item>

          <el-menu-item index="202">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "LeftBar_"
}
</script>

<style scoped>

</style>