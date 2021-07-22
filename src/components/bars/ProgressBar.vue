<template>
      <el-steps direction="vertical" :active="active" @change="changeElStep">
        <el-step  v-for="item in titles" :key="item.key" :status="item.status"></el-step>
       </el-steps>
</template>

<script>

export default {
    name:'ProgressBar',
    props:{
        active:{
            type:Number,
            default:0
        },
        titles:Object
    },
    methods:{
        changeElStep(newVal,oldVal){
            this.$emit('change',newVal,oldVal)
        }
    }
}
</script>