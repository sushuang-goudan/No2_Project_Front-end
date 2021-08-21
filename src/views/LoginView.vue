<!--门户页面和登录页面-->
<template>
    <div id="container">
        <!--注册页面标题-->
        <h1 class="loginTitle">
            主办商1  |  主办商2
        </h1>
        <!--门户部分-->
        <div v-show="!err2021" class="whichPart">
            <el-row type="flex" justify="center" :gutter="60">
                <el-col :span="6">
                    <a href="#/?err2021=true">
                    <figure><img src="../assets/admin-img.png">
                        <figcaption>填报数据页面</figcaption>
                    </figure></a>
                </el-col>
                <el-col :span="6">
                    <a href="#/?err2021=true">
                        <figure><img src="../assets/form-img.png">
                            <figcaption>管理界面</figcaption>
                        </figure></a>
                </el-col>
            </el-row>
        </div>
        <!--登录部分-->
        <div v-show="err2021" class="lrPath">
            <div class="loginBox">
                <el-row :gutter="20">
                <el-col :span="4">
                    <el-button size="mini" type="primary" plain round icon="el-icon-arrow-left" @click="backToW">返回</el-button>
                </el-col>
                <el-col :span="20">
                <!--标题部分-->
                <div class="lr-title">
                    <p>
                     用户登录平台
                    </p>
                </div>
                <!--表单部分-->
                <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon >
                    <el-form-item prop="username">
                        <el-input type="text" v-model="loginForm.username" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" v-model="loginForm.password" placeholder="密码" show-password></el-input>
                    </el-form-item>
                    <!--随机验证码-->
                    <el-form-item prop="verifycode">
                        <el-row>
                            <el-col :span="12">
                                <el-input v-model="loginForm.verifycode" placeholder="验证码"></el-input></el-col>
                            <el-col :span="8" :offset="4">
                                <div class="identifyBox" @click="refreshCode">
                                    <convas-part :identifyCode="identifyCode" :contentHeight="38"></convas-part>
                                </div>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <h3><a href="">忘记密码？</a></h3>
                    <el-form-item>
                        <el-button type="primary" @click="gotoHome('loginForm')">登录</el-button>
                    </el-form-item>                   
                </el-form>                    
                </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import convasPart from '../components/canvasPart.vue'
export default {
    name:'loginView',
    components:{
        convasPart
    },
    data() {
        const validateVerifycode = (rule,value,callback) => {
            if(value ===''){
                callback(new Error('请输入验证码'));
            }else if(value !== this.identifyCode){
                callback(new Error('验证码不正确'));
            }else{
                callback();
            }
        }
        return {
            loginForm:{
                username:'' ,//用户名
                password:'' ,//密码
                verifycode:'',//验证码
            },
            //验证规则
            loginRules:{
                username:[
                    {required:true,message:'用户名不能为空',trigger: 'blur'},
                ],
                password:[
                    {required:true,message:'密码不能为空',trigger: 'blur'},
                    {pattern:'^[a-z0-9A-Z_]{6,12}$',message:'密码在6-12个字符之间',trigger:'blur'}
                ],
                verifycode:[
                    {validator:validateVerifycode, trigger: 'blur'}
                ]
            },
            identifyCodes:'1234567890',//验证码的数字库
            identifyCode: '',//随机验证码（组件传值）
            err2021: false,//是否展示登录注册页面
        }
    },
    methods: {//事件处理器
        routeChange:function() {//路由变化时处理函数
            let _this = this;
            let temp;
            temp = _this.$route.query.err2021 == undefined ? false : _this.$route.query.err2021;//获取传参的err2021
            //解决浏览器返回的值为字符串，v-show不渲染
            if(temp === "true"){
                _this.err2021 = true;
            }else{
                _this.err2021 = false;
            }
        },
        gotoHome:function(formName){//用户登录
            let _this = this;
            _this.$refs[formName].validate((valid) => {
                if(valid){//表单校验成功
                   _this.$router.replace('/form');
                }
            })
        },
        backToW:function() {//返回通道选择页面
            let _this = this;
            _this.$router.push({
                path:'/',
                query: {
                    err2021:'false'
                }
            });
        },
        //验证码
        randomNum(min,max){//生成[min-max）的随机数整数
            return Math.floor(Math.random()*(max-min)+min)
        },
        makeCode(num){//生成num位验证码
            let _this = this;
            let codesLength = _this.identifyCodes.length;
            for(let i=0;i<num;i++){
                _this.identifyCode += _this.identifyCodes[_this.randomNum(0,codesLength)]
            }
        },
        refreshCode(){//更新验证码
            let _this = this;
            _this.identifyCode = '',
            _this.makeCode(4);//生成4位验证码
        }
    },
    watch: {
         // 如果路由有变化，会再次执行该方法
        '$route':'routeChange'
    },
    created() { //生命周期函数
        let _this = this;
        _this.routeChange();
        _this.refreshCode();//初始化验证码
    }    
}
</script>

<style scoped>
#container{
	position:fixed;
	width: 100%;
    height: 100%;
}
.loginTitle{
    text-align: center;
    font-size: 20px;
    max-width: 340px;
    margin: 80px auto 40px;
    border: 1px solid #eaeaea;
}
/*门户---通道选择*/
figcaption{
    font-size: 20px;
}
.whichPart .el-col{
    text-align: center;
}
.whichPart img{
    width:100%;
    height: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.whichPart figure{
    border: 1px solid #eaeaea;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
}
/*登录注册*/
.el-button{
    width:100%;
    text-align: center;
}
.lr-title{
    margin-bottom: 22px;
    text-align: center;
    font-size: 20px;
}
.loginBox{
    background: #fff;
    padding:20px;
    max-width:500px;
    margin:0 auto;
    border: 1px solid #eaeaea;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
}
.loginBox .el-input input{
    border-radius: 4px;
}
.loginBox h3{
    text-align:right;
    margin-top:0px;
    margin-bottom: 22px;
}
.loginBox h3 a{
    font-size:13px;
    color:#999;
}
.el-form:last-child{
    text-align: center;
}
</style>