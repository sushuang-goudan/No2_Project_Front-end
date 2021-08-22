<template>
<div>
  <el-form ref="form" :model="form" label-position="top">
    <el-form-item label="手机号码">
      <el-input v-model="form.tel" style="width:310px;"></el-input>
    </el-form-item>

    <el-form-item label="验证码">
      <el-row >
        <el-col :span="5">
          <el-input v-model="form.captcha" style="width:140px"></el-input>
        </el-col>
        <el-col :span="9">
          <el-button style="width: auto;" type="primary">点击获取验证码</el-button>
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label="新密码">
      <el-input v-model="form.newpw" style="width: 310px" placeholder="请输入新密码"></el-input>
    </el-form-item>

    <el-form-item label="确认新密码">
      <el-input v-model="form.newpw2" style="width: 310px" placeholder="请再次输入新密码"></el-input>
    </el-form-item>

  </el-form>
</div>
</template>

<script>
export default {
  name: "Mima",
  data() {
    return {
      form: {
        tel: '',
        captcha: '',
        newpw:'',
        newpw2:'',
      }
    }
  },
}
</script>

<style scoped>

</style>