<template>
<div>
  <el-row :gutter="20">

    <el-col :span="7">
      <el-date-picker
          v-model="date"
          type="date"
          placeholder="请选择注册时间段">
      </el-date-picker>
    </el-col>

    <el-col :span="6">
      <el-select v-model="value1" placeholder="请选择地区">
        <el-option
            v-for="item in regions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </el-col>

    <el-col :span="6">
      <el-select v-model="value2" placeholder="请选择医院">
        <el-option
            v-for="item in hospitals"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </el-col>
  </el-row>

  <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
    <el-table-column
        type="selection"
        width="25">
    </el-table-column>
    <el-table-column
        label="账号"
        width="100">
      <template slot-scope="scope">{{ scope.row.id }}</template>
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="50">
    </el-table-column>
    <el-table-column
        prop="tel_number"
        label="手机号"
        show-overflow-tooltip>
    </el-table-column>
    <el-table-column
        prop="hospital"
        label="医院"
        width="90">
    </el-table-column>
    <el-table-column prop="department" label="科室" width="70">

    </el-table-column>
    <el-table-column prop="permission_v" label="权限" width="120">
      <el-select v-model="permission_v" placeholder="权限">
        <el-option
            v-for="item in permissions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </el-table-column>
    <el-table-column prop="email" label="邮箱" show-overflow-tooltip></el-table-column>
    <el-table-column prop="operation" label="操作">
      <template slot-scope="scope">
        <el-row :gutter="1">
          <el-col :span="11">
            <el-link
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑 </el-link>
          </el-col>
          <el-col :span="11">
            <el-link
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-link>
          </el-col>
        </el-row>
      </template>
    </el-table-column>

  </el-table>

</div>
</template>

<script>
export default {
  name: "Yonghu",
  data() {
    return {
      date: '',
      regions: [{
        value: '选项1',
        label: '南京'
      }, {
        value: '选项2',
        label: '苏州'
      }, {
        value: '选项3',
        label: '无锡'
      }, {
        value: '选项4',
        label: '常州'
      }, {
        value: '选项5',
        label: '镇江'
      }],
      value1: '',

      hospitals: [{
        value: '选项1',
        label: '江苏省人民医院'
      }, {
        value: '选项2',
        label: '江苏省人民医院'
      }, {
        value: '选项3',
        label: '江苏省人民医院'
      }, {
        value: '选项4',
        label: '江苏省人民医院'
      }, {
        value: '选项5',
        label: '江苏省人民医院'
      }],
      value2: '',

      tableData: [{
        id: '7465355',
        name: '李丽',
        tel_number: '12345678900',
        hospital: '省人民医院',
        department: '普外科',
        permission_v: '',
        email: '123123@qq.com',
        operation: '',
      }, {
        id: '7465355',
        name: '李丽',
        tel_number: '12345678900',
        hospital: '省人民医院',
        department: '普外科',
        permission_v: '',
        email: '123123@qq.com',
        operation: '',
      }, {
        id: '7465355',
        name: '李丽',
        tel_number: '12345678900',
        hospital: '省人民医院',
        department: '普外科',
        permission_v: '',
        email: '123123@qq.com',
        operation: '',
      }, {
        id: '7465355',
        name: '李丽',
        tel_number: '12345678900',
        hospital: '省人民医院',
        department: '普外科',
        permission_v: '',
        email: '123123@qq.com',
        operation: '',
      }, {
        id: '7465355',
        name: '李丽',
        tel_number: '12345678900',
        hospital: '省人民医院',
        department: '普外科',
        permission_v: '',
        email: '123123@qq.com',
        operation: '',
      }, {
        id: '7465355',
        name: '李丽',
        tel_number: '12345678900',
        hospital: '省人民医院',
        department: '普外科',
        permission_v: '',
        email: '123123@qq.com',
        operation: '',
      }, {
        id: '7465355',
        name: '李丽',
        tel_number: '12345678900',
        hospital: '省人民医院',
        department: '普外科',
        permission_v: '',
        email: '123123@qq.com',
        operation: '',
      }, {
        id: '7465355',
        name: '李丽',
        tel_number: '12345678900',
        hospital: '省人民医院',
        department: '普外科',
        permission_v: '',
        email: '123123@qq.com',
        operation: '',
      },
      ],
      permissions: [{
        value: '1',
        label: '超级管理员',
      }, {
        value: '2',
        label: '管理员',
      }, {
        value: '3',
        label: '填报者',
      }],
      permission_v: '管理员',
    }
  },methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>

</style>