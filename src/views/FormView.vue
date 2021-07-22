<template>
    <div id="form-view" class="formView">
        <div id="side">
            <side-bar></side-bar>
        </div>
        <div id="form">
            <el-collapse v-model="activeFormGroup" accordion @change="changeCoItem">
                <el-collapse-item title="一、基本信息" name="formGroup1">
                    <el-form ref="form1" :model="form1" label-width="300px">
                        <el-form-item label="主刀医师">
                            <el-input v-model="form1.HB1_1"></el-input>
                        </el-form-item>
                        <el-form-item label="质控医师（科主任）">
                            <el-input v-model="form1.HB1_2"></el-input>
                        </el-form-item>
                        <el-form-item label="质控护士（护士长）">
                            <el-input v-model="form1.HB1_3"></el-input>
                        </el-form-item>
                        <el-form-item label="主控医师（管床医生）">
                            <el-input v-model="form1.HB1_4"></el-input>
                        </el-form-item>
                        <el-form-item label="责任护士（管床护士）">
                            <el-input v-model="form1.HB1_5"></el-input>
                        </el-form-item>
                        <el-form-item label="上报科室">
                            <el-input v-model="form1.HB1_6"></el-input>
                        </el-form-item>
                        <el-form-item label="患者住院号">
                            <el-input v-model="form1.HB1_7"></el-input>
                        </el-form-item>
                        <el-form-item label="患者身份证号">
                            <el-input v-model="form1.HB1_8"></el-input>
                        </el-form-item>
                        <el-form-item label="出生日期">
                            <el-input v-model="form1.HB1_9" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="患者性别">
                            <el-input v-model="form1.HB1_10" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="患者体重（kg）">
                            <el-input v-model="form1.HB1_11"></el-input>
                        </el-form-item>
                        <el-form-item label="患者身高（cm）">
                            <el-input v-model="form1.HB1_12"></el-input>
                        </el-form-item>
                        <el-form-item label="体重指数（kg/m2）">
                            <el-input v-model="form1.HB1_13" :disabled="true">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="主要诊断ICD-10四位亚目编码与名称">
                            <el-select v-model="form1.HB1_14" placeholder="请选择">
                                <el-option v-for="item in option1_14" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="主要诊断ICD-10六位临床扩展编码与名称">
                            <el-select v-model="form1.HB1_15" placeholder="请选择">
                                <el-option v-for="item in option1_15[form1.HB1_14.charCodeAt()-'a'.charCodeAt()]"
                                    :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="是否出院后31天内重复住院">
                            <el-radio-group v-model="form1.HB1_16" placeholder="请选择">
                                <el-radio v-for="item in option1_16" :key="item.value" :label="item.value">{{item.label}}
                                </el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="费用支付方式">
                            <el-select v-model="form1.HB1_17" placeholder="请选择">
                                <el-option v-for="item in option1_17" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="入院时间">
                            <el-date-picker v-model="form1.HB1_18" type="date" placeholder="请选择日期"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="出院时间">
                            <el-date-picker v-model="form1.HB1_19" type="date" placeholder="请选择日期"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="此次入院目的">
                            <el-select v-model="form1.HB1_20" placeholder="请选择">
                                <el-option v-for="item in option1_20" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submit(0)">保存</el-button>
                            <el-button>重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
                <keep-alive include="ZongHe,ShouShu,NeiJing">
                    <router-view  @getSuccess='submit' @athing='upAthing'></router-view>
                </keep-alive>
            </el-collapse>
            <img id='upbutton' v-if="btnFlag" class="upButton" src="../assets/topButton.png" @click="backTop">
        </div>
        <div id="progress" >
            <progress-bar :active="whichActive" :titles="PBtitles"></progress-bar>
        </div>        
    </div>
</template>

<script>
    import SideBar from '../components/bars/SideBar.vue'
    import ProgressBar from '../components/bars/ProgressBar.vue'
    export default {
        name:'formView',
        components: {
            SideBar,
            ProgressBar
        },
        data: function () {
            return {
                activeFormGroup: '',
                btnFlag:false,
                scrollTop:'',
                collapseNumbers : '',
                whichActive : '',              
                form1: {
                    HB1_1: '',
                    HB1_2: '',
                    HB1_3: '',
                    HB1_4: '',
                    HB1_5: '',
                    HB1_6: '',
                    HB1_7: '',
                    HB1_8: '',
                    HB1_9: '',
                    HB1_10: '',
                    HB1_11: '',
                    HB1_12: '',
                    HB1_13: '',
                    HB1_14: '',
                    HB1_15: '',
                    HB1_16: '',
                    HB1_17: '',
                    HB1_18: '',
                    HB1_19: '',
                    HB1_20: '',
                },
                option1_14: [{
                        value: 'a',
                        label: ' 贲门恶性肿瘤'
                    },
                    {
                        value: 'b',
                        label: ' 胃底恶性肿瘤'
                    },
                    {
                        value: 'c',
                        label: ' 胃体恶性肿瘤'
                    },
                    {
                        value: 'd',
                        label: ' 幽门窦恶性肿瘤'
                    },
                    {
                        value: 'e',
                        label: ' 幽门恶性肿瘤'
                    },
                    {
                        value: 'f',
                        label: ' 未特指的胃小弯恶性肿瘤'
                    },
                    {
                        value: 'g',
                        label: ' 未特指的胃大弯恶性肿瘤'
                    },
                    {
                        value: 'h',
                        label: ' 胃交搭跨越恶性肿瘤的损害'
                    },
                    {
                        value: 'i',
                        label: ' 未特指的胃恶性肿瘤'
                    },
                ],
                option1_15: [
                    [{
                            value: 'a',
                            label: ' 无'
                        },
                        {
                            value: 'b',
                            label: ' 贲门恶性肿瘤'
                        },
                        {
                            value: 'c',
                            label: ' 贲门口恶性肿瘤'
                        },
                        {
                            value: 'd',
                            label: ' 食管贲门连接处恶性肿瘤'
                        },
                        {
                            value: 'e',
                            label: ' 食管胃连接处恶性肿瘤'
                        }
                    ],
                    [{
                            value: 'f',
                            label: ' 无'
                        },
                        {
                            value: 'g',
                            label: ' 胃底恶性肿瘤'
                        }
                    ],
                    [{
                            value: 'h',
                            label: ' 无'
                        },
                        {
                            value: 'i',
                            label: ' 胃体恶性肿瘤'
                        }
                    ],
                    [{
                            value: 'j',
                            label: ' 无'
                        },
                        {
                            value: 'k',
                            label: ' 幽门窦恶性肿瘤'
                        },
                        {
                            value: 'l',
                            label: ' 胃窦恶性肿瘤'
                        }
                    ],
                    [{
                            value: 'm',
                            label: ' 无'
                        },
                        {
                            value: 'n',
                            label: ' 幽门恶性肿瘤'
                        },
                        {
                            value: 'o',
                            label: ' 幽门前恶性肿瘤'
                        },
                        {
                            value: 'p',
                            label: ' 幽门管恶性肿瘤'
                        }
                    ],
                    [{
                            value: 'q',
                            label: ' 无'
                        },
                        {
                            value: 'r',
                            label: ' 胃小弯恶性肿瘤'
                        }
                    ],
                    [{
                            value: 's',
                            label: ' 无'
                        },
                        {
                            value: 't',
                            label: ' 胃大弯恶性肿瘤'
                        }
                    ],
                    [{
                            value: 'u',
                            label: ' 无'
                        },
                        {
                            value: 'v',
                            label: ' 胃交搭跨越恶性肿瘤'
                        },
                        {
                            value: 'w',
                            label: ' 胃体和胃窦及胃大弯恶性肿瘤'
                        },
                        {
                            value: 'x',
                            label: ' 贲门胃底恶性肿瘤'
                        },
                        {
                            value: 'y',
                            label: ' 贲门胃体恶性肿瘤'
                        },
                        {
                            value: 'z',
                            label: ' 胃窦胃体恶性肿瘤'
                        },
                        {
                            value: 'A',
                            label: ' 胃底胃体恶性肿瘤'
                        }
                    ],
                    [{
                            value: 'B',
                            label: ' 无'
                        },
                        {
                            value: 'C',
                            label: ' 胃恶性肿瘤'
                        },
                        {
                            value: 'D',
                            label: ' 胃多处恶性肿瘤'
                        },
                        {
                            value: 'E',
                            label: ' 胃溃疡癌变'
                        },
                        {
                            value: 'F',
                            label: ' 残胃恶性肿瘤'
                        }
                    ],
                ],
                option1_16: [{
                        value: 'a',
                        label: ' 是'
                    },
                    {
                        value: 'b',
                        label: ' 否'
                    },
                ],
                option1_17: [{
                        value: 'a',
                        label: ' 城镇职工基本医疗保险'
                    },
                    {
                        value: 'b',
                        label: ' 城镇居民基本医疗保险'
                    },
                    {
                        value: 'c',
                        label: ' 新型农村合作医疗'
                    },
                    {
                        value: 'd',
                        label: ' 贫困救助'
                    },
                    {
                        value: 'e',
                        label: ' 商业医疗保险'
                    },
                    {
                        value: 'f',
                        label: ' 公费医疗'
                    },
                    {
                        value: 'g',
                        label: ' 全自费'
                    },
                    {
                        value: 'h',
                        label: ' 其他社会保险（生育保险、工商保险、农民工保险等）'
                    },
                    {
                        value: 'i',
                        label: ' 其他'
                    },
                ],
                option1_20: [{
                        value: 'a',
                        label: ' 手术'
                    },
                    {
                        value: 'b',
                        label: ' 内镜下治疗'
                    },
                    {
                        value: 'c',
                        label: ' 综合治疗'
                    },
                ],
            }
        },
        mounted(){           
            window.addEventListener('scroll',this.scrollToTop,true);
        },
        destroyed(){
            window.removeEventListener('scroll',this.scrollToTop)
        },
        activated(){
             this.upAthing();
        },       
        methods: {
            submit(val) {
                let _this = this;
                _this.whichActive =Number(val+1);
                _this.PBtitles[val].status='success';
                console.log(_this.form1);
                if (_this.form1.HB1_16 === 'a') {
                    alert("出院后31天内重复住院,不符合上报要求");
                } else {
                    if (_this.form1.HB1_20 === 'a') {
                        _this.$router.replace('/shou-shu');
                        _this.activeFormGroup = '';
                    } else if (_this.form1.HB1_20 === 'b') {
                        _this.$router.replace('/nei-jing');
                        _this.activeFormGroup = '';
                    } else if (_this.form1.HB1_20 === 'c') {
                        _this.$router.replace('/zong-he');
                        _this.activeFormGroup = '';
                    }
                }
            },
            setBirthDateAndSexual() {
                let _this = this;
                let reg = /(^\d{17}(x|X|\d)$)/
                let idCard = _this.form1.HB1_8;
                if (!reg.test(idCard)) {
                    _this.form1.HB1_9 = '请输入正确的第二代身份证号码';
                    _this.form1.HB1_10 = '请输入正确的第二代身份证号码';
                    return false;
                } else {
                    _this.form1.HB1_9 = idCard.slice(6, 14).replace(/(.{4})(.{2})/, "$1-$2-");
                    if (parseInt(idCard.slice(-2, -1)) % 2 == 1) {
                        _this.form1.HB1_10 = '男';
                    } else {
                        _this.form1.HB1_10 = '女';
                    }
                    return true;
                }
            },
            setBmi() {
                let _this = this;
                if (_this.form1.HB1_11 == '' || _this.form1.HB1_12 == '' || _this.form1.HB1_11 == 0 || _this.form1
                    .HB1_12 == 0) {
                    _this.form1.HB1_13 = '';
                    return false;
                }
                let reg = /^\d+(\.\d+)?$/;
                if (reg.test(_this.form1.HB1_11) && reg.test(_this.form1.HB1_12)) {
                    _this.form1.HB1_13 = (parseFloat(_this.form1.HB1_11) / ((parseFloat(_this.form1.HB1_12) / 100) *
                        (
                            parseFloat(_this.form1.HB1_12) / 100))).toFixed(2);
                    return true;
                } else {
                    _this.form1.HB1_13 = '';
                    return false;
                }
            },
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
            upAthing() {
            //计算路由更新后的el-collapse-item的个数（在<keep-alive>下）
                var numbers = document.getElementsByClassName('el-collapse-item').length;
                this.collapseNumbers=numbers;
                if(numbers>1){
                    this.PBtitles[0].status='success';
                    this.PBtitles[1].status='progress'
                }                
            },
            changeCoItem(val) {
                let _this=this,index,lastStatus,activeStatus,nextStatus,i;
                _this.whichActive = Number(val.substr(9));
                index=_this.whichActive-1;
                activeStatus=_this.PBtitles[index].status;                
                if(index ==(this.collapseNumbers-1)||index==0){
                    this.changeSide(index);
                }
                lastStatus=_this.PBtitles[index-1].status;
                alert(lastStatus);             
                nextStatus=_this.PBtitles[index+1].status;
                if(lastStatus==='success'&&(activeStatus==='wait'||activeStatus==='progress')&& nextStatus!== 'progress'){
                    _this.PBtitles[index].status ='finish'
                    _this.PBtitles[index+1].status = 'progress'
                }else if(activeStatus==='finish'){
                    _this.PBtitles[index+1].status = 'progress'
                    for(i=index+1;i<_this.collapseNumbers;i++){
                        _this.PBtitles[i+1].status = 'wait'
                    }
                }
            },
            changeSide(index){
                let _this=this,activeStatus=_this.PBtitles[index].status;
                if(activeStatus=='progress'){
                    _this.PBtitles[index].status = 'finish'
                }
            }
        },
        computed: {
            idCardWatch() {
                let _this = this;
                return _this.form1.HB1_8;
            },
            bmiWatch() {
                let _this = this;
                let _arr = [];
                _arr.push(_this.form1.HB1_11);
                _arr.push(_this.form1.HB1_12);
                return _arr.join(",")
            },
            PBtitles : {
                get: function(){
                    var steps = [],step = {},i;
                    if(this.collapseNumbers===1){
                        step.title = '第' +1+'部分';
                        step.key=1;
                        step.status='wait'
                        steps.push(step);
                        step = {}                       
                    }else{
                        for (i =1;i < this.collapseNumbers;i++){
                        step.title = '第' + (i+1) +'部分';
                        step.key=i+1;
                        step.status='wait'
                        steps.push(step);
                        step = {}
                    }
                    }
                    return steps;
                },
                set: function(){
                    
                }
            }
        },
        watch: {
            idCardWatch() {
                let _this = this;
                _this.setBirthDateAndSexual();
            },
            bmiWatch() {
                let _this = this;
                _this.setBmi();
            }
        }
    }
</script>

<style scoped>
     #upbutton {
        position: fixed;
        right :180px;
        bottom:20px;
        width:50px;
    }
    #form-view {
        display: flex;
        margin: 0 auto;
    }

    #side {
        width: 15%;
        height: 100%;
        margin: 0 auto;
    }

    #form {
        width: 85%;
        height: 100%;
        margin: 0 auto;
    }

    #progress >>> .el-steps{
        height: 80%;
        position: fixed;
        top:12%;
        bottom:10%;
    }    

    .el-collapse {
        width: 80%;
        margin: 0 10%
    }

    .el-form {
        margin-top: 4%;
        margin-right: 20%
    }

    .formView>>>.el-checkbox__label {
        display: inline-grid;
        white-space: pre-line;
        word-wrap: break-word;
        overflow: hidden;
        line-height: 20px;
    }
</style>