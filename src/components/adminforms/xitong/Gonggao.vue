<template>
<div>
  <p>新增消息公告</p>
  <div class="gonggao">
    <p class="Gtitle">编辑文章信息</p>
    <el-form :model="GForm" label-width="auto" inline-message status-icon>
      <el-form-item label="标题"  prop="title"
        :rules="[
           { required: true, message: '标题不能为空'},
          ]">
        <el-input 
        v-model="GForm.title" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="上传人">
        <el-input v-model="GForm.username" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <br>
        <quill-editor class="editor" v-model="GForm.content" :options="editorOption"></quill-editor>
      </el-form-item>
      <el-form-item label="状态">
        <el-switch
          v-model="GForm.status"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item label="上传时间">
        <el-date-picker v-model="GForm.date"
          type="date"
          placeholder="选择日期">
    </el-date-picker>
      </el-form-item>
      <el-form-item >
        <el-button type="primary">保存</el-button>
        <el-button plain>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
import { quillEditor} from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  name: "Gonggao",
  components: {
     quillEditor
  },
  data(){
    return{
      GForm: {
        title:'',//公告标题
        username:'',//公告上传人姓名
        content:'',//公告文本内容
        date:'',//上传日期
        status:false,//开关状态
      },
      editorOption:{},//quillEditor配置选项
    }
  }
}
</script>

<style scoped>
.el-main{
  padding:0px;
}
.gonggao{
    width :100%;
    height:100%;
    border: 1px solid #eaeaea;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
}
.Gtitle{
  background-color: rgb(252, 230, 233);
  color: deepskyblue;
  margin-top: 0;
  padding: 10px;
}
.el-form{
  margin: 10px;
}
.el-input{
  width: 40%;
}
</style>