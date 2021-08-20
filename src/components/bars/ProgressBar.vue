<template>
    <div class="step">
      <div class="dot blue"></div>
      <div class="step_mod" v-for="(item,index) in stageTree" :key="index">
        <div v-if="item.progressFlag" class="bar blue"></div>
        <div v-if="item.progressFlag" class="process">
          <div class="progressCircle">
            <el-progress
              type="circle"
              :stroke-width="15"
              :percentage="item.secondValue"
              :show-text="false"
              @click.native="backSomeWhere(index+1)"
            ></el-progress>
            <div class="progressText">{{item.label}}</div>
          </div>
          <div v-if="index===firstIndex" class="process_title">{{secondLabel}}</div>
        </div>
        <div v-if="!item.progressFlag" class="bar"></div>
        <div v-if="!item.progressFlag" class="wait" @click="backSomeWhere(index+1)">{{item.label}}</div>
      </div>
      <div class="bar"></div>
      <div class="dot" v-if="!btnFlag"></div>
      <img id='upbutton' v-if="btnFlag" src="../../assets/topButton.png" @click="backTop">
    </div>
</template>


<script>
/*   stageTree:记录环节信息的树；
     progressFlag：判断当前环节是否已完成，或正在进行；
     secondValue：计算得到的进度百分比；
     label：一级环节名称    */
export default {
  name: "Step",
  props: {
      'stageTree':Array,
      'firstActive':Number,
      'secondActive':Number
  },
  data() {
      return {
          btnFlag:false,
          scrollTop:'',
          firstIndex: -1,
      }
  },
  mounted(){           
      window.addEventListener('scroll',this.scrollToTop,true);
 },
  destroyed(){
      window.removeEventListener('scroll',this.scrollToTop)
},
  watch:{
    firstActive:function(newVal,oldVal){
        this.focusOnfirst(this.stageTree[newVal-1],newVal,oldVal);
    },
    secondActive:function(newVal){
        this.focusOnsecond(newVal)
    }
  },
  methods: {
    //点击一级节点
    focusOnfirst(item, index,lastindex) {
      this.firstIndex = index;
      this.firstLabel = item.label;
      console.log(lastindex)
      this.stageTree.forEach((ele, No) => {
        ele.progressFlag = false;
        ele.secondValue = 0;
        console.log(No);
      });
      for (let i = 0; i < this.stageTree.length; i++) {
        this.stageTree[i].progressFlag = true;
        if ((i+1) === this.firstIndex) {
          this.stageTree[i].secondValue =0;
          break;
        } else {
          this.stageTree[i].secondValue = 100;
        }
      }    
    },
    //点击二级节点
    focusOnsecond(index) {
          this.stageTree[this.firstIndex-1].secondValue =
        ((index* 100) / this.stageTree[this.firstIndex-1].children);
    },
    //回到顶部按钮
    backTop(){
        const that = this;
        let timer= setInterval(()=>{
        let upSpeed = Math.floor(-that.scrollTop/5);
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + upSpeed;
        if(that.scrollTop === 0){
            clearInterval(timer);
            }
        },16)
     },
    //回到表单某个部分（并展开对应表单）
    backSomeWhere(value){
        this.$emit('back',value);
    },
    scrollToTop(){
        //alert('进入');
        const that=this;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        that.scrollTop = scrollTop;
        if(that.scrollTop > 60){
            that.btnFlag=true;
        }else{
            that.btnFlag=false;
        }
    },    
  }
};
</script>


<style scoped>
.step {
  width: auto;
  margin: auto;
  height: inherit;
  display: flex;
  justify-content:baseline;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top:10%;
}
.dot{
    width: 12px;
    height: 12px;
    border-radius: 12px;
    background:#c3c3c3;
  }
.step_mod {
    display: flex;
    justify-content: baseline;
    align-items: center;
    flex-direction: column;
  }
.process {
    width: 30px;
    height: 30px;
}
.process_title {
      text-align: center;
      font-size: 12px;
      color: #0290ff;
      line-height: 18px;
      margin-top: auto;
      white-space: nowrap;
    }
.step >>>  .el-progress-circle {
      width: 30px !important;
      height: 30px !important;
    }
.step >>> .el-progress__text {
      font-size: 14px !important;
      line-height: 20px;
    } 
.progressText {
    text-align: center;
    margin-top: -30px;
    font-size: 14px;
    caret-color: rgb(0,0,0,0);
  }
.wait {
    font-size: 14px;
    color: #ffffff;
    line-height: 6px;
    background: #c3c3c3;
    width: 30px;
    height: 30px;
    border-radius: 25px;
    text-align: center;
    padding: 15px 0;
    box-sizing: border-box;
    caret-color: rgb(0,0,0,0);
    cursor: pointer;
  }
  .bar {
    width: 4px;
    height: 20px;
    background:#c3c3c3;
  }
  .blue {
    background: #0290ff;
  }
</style>
