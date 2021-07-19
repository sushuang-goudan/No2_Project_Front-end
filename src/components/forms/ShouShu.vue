<template>
    <div>
        <el-collapse-item title="手术前评估和治疗前临床TNM分期" name="formGroup2">
            <el-form ref="form2" :model="form2" label-width="300px">
                <el-form-item label="临床TNM分期前主要检查项目">
                    <el-checkbox-group v-model="form2.SS2_1">
                        <el-checkbox v-for="item in option2_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="治疗前是否完成胃癌CT分期">
                    <el-radio-group v-model="form2.SS2_2" placeholder="请选择">
                        <el-radio v-for="item in option2_2" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="CT分期病理学定义" v-show="form2.SS2_2==='y'">
                    <el-select v-model="form2.SS2_2_1_1" placeholder="请选择">
                        <el-option v-for="item in option2_2_1_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="治疗前是否完成胃癌超声内镜（EUS）分期">
                    <el-radio-group v-model="form2.SS2_3" placeholder="请选择">
                        <el-radio v-for="item in option2_3" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="UT分期病理学定义" v-show="form2.SS2_3==='y'">
                    <el-select v-model="form2.SS2_3_1_1" placeholder="请选择">
                        <el-option v-for="item in option2_3_1_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="治疗前是否完成临床TNM分期">
                    <el-radio-group v-model="form2.SS2_4" placeholder="请选择">
                        <el-radio v-for="item in option2_4" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="原发肿瘤（T）分期" v-show="form2.SS2_4==='y'">
                    <el-select v-model="form2.SS2_4_1_1" placeholder="请选择">
                        <el-option v-for="item in option2_4_1_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="区域淋巴结（N）分期" v-show="form2.SS2_4==='y'">
                    <el-select v-model="form2.SS2_4_1_2" placeholder="请选择">
                        <el-option v-for="item in option2_4_1_2" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="远处转移（M）分期" v-show="form2.SS2_4==='y'">
                    <el-select v-model="form2.SS2_4_1_3" placeholder="请选择">
                        <el-option v-for="item in option2_4_1_3" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="胃癌治疗前cTNM分期结论" v-show="form2.SS2_4==='y'">
                    <el-select v-model="form2.SS2_4_1_4" placeholder="请选择">
                        <el-option v-for="item in option2_4_1_4" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否是治疗前接受过2个或以上治疗科室会诊的患者">
                    <el-radio-group v-model="form2.SS2_5" placeholder="请选择">
                        <el-radio v-for="item in option2_5" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="患者术前心肺功能等级">
                    <el-select v-model="form2.SS2_6" placeholder="请选择">
                        <el-option v-for="item in option2_6" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="患者是否做过术前血栓风险评估">
                    <el-radio-group v-model="form2.SS2_7" placeholder="请选择">
                        <el-radio v-for="item in option2_7" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="血栓风险评估结果">
                    <el-select v-model="form2.SS2_7_1_1" placeholder="请选择">
                        <el-option v-for="item in option2_7_1_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否相应接受过抗凝治疗">
                    <el-radio-group v-model="form2.SS2_7_1_2" placeholder="请选择">
                        <el-radio v-for="item in option2_7_1_2" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="抗凝治疗方案">
                    <el-input v-model="form2.SS2_7_1_2_1_1"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="手术 / 非手术治疗前病理学诊断" name="formGroup3">
            <el-form ref="form3" :model="form3" label-width="300px">
                <el-form-item label="治疗前是否有病理组织形态学/细胞学诊断报告">
                    <el-radio-group v-model="form3.SS3_1" placeholder="请选择">
                        <el-radio v-for="item in option3_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="采集组织或细胞学标本来源途径" v-show="form3.SS3_1==='y'">
                    <el-select v-model="form3.SS3_1_1_1" placeholder="请选择">
                        <el-option v-for="item in option3_1_1_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="其他来源标本" v-show="form3.SS3_1==='y'&&form3.SS3_1_1_1==='f'">
                    <el-input v-model="form3.SS3_1_1_1_6_1"></el-input>
                </el-form-item>
                <el-form-item label="病理组织形态学/细胞学诊断报告单距本次治疗前的时限" v-show="form3.SS3_1==='y'">
                    <el-select v-model="form3.SS3_1_1_2" placeholder="请选择">
                        <el-option v-for="item in option3_1_1_2" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="术中达到安全切缘证实措施" name="formGroup4">
            <el-form ref="form4" :model="form4" label-width="300px">
                <el-form-item label="手术路径的选择">
                    <el-select v-model="form4.SS4_1" placeholder="请选择">
                        <el-option v-for="item in option4_1" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="术中探及胃癌病变涉及的范围">
                    <el-checkbox-group v-model="form4.SS4_2">
                        <el-checkbox v-for="item in option4_2" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="手术治疗符合原则规范">
                    <el-checkbox-group v-model="form4.SS4_3" :max="3">
                        <el-checkbox v-for="item in option4_3" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="实施的胃癌根治性术式的选择">
                    <el-select v-model="form4.SS4_4" placeholder="请选择">
                        <el-option v-for="item in option4_4" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="术后消化道重建的方式的选择">
                    <el-select v-model="form4.SS4_5" placeholder="请选择">
                        <el-option v-for="item in option4_5" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="其他术后消化道重建的方式的选择" v-show="form4.SS4_5==='h'">
                    <el-input v-model="form4.SS4_5_8_1"></el-input>
                </el-form-item>
                <el-form-item label="胃癌手术中达到安全切缘是否有证实措施">
                    <el-radio-group v-model="form4.SS4_6" placeholder="请选择">
                        <el-radio v-for="item in option4_6" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="记入手术记录中安全切缘证实措施的选择">
                    <el-checkbox-group v-model="form4.SS4_6_1_1">
                        <el-checkbox v-for="item in option4_6_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="是否使用各种吻合器">
                    <el-radio-group v-model="form4.SS4_7" placeholder="请选择">
                        <el-radio v-for="item in option4_7" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="胃切除术后是否常规关闭系膜间膜">
                    <el-radio-group v-model="form4.SS4_8" placeholder="请选择">
                        <el-radio v-for="item in option4_8" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术后是否常规放置胃管">
                    <el-radio-group v-model="form4.SS4_9" placeholder="请选择">
                        <el-radio v-for="item in option4_9" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术后是否常规放置营养管">
                    <el-radio-group v-model="form4.SS4_10" placeholder="请选择">
                        <el-radio v-for="item in option4_10" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术后是否常规放置腹腔引流管">
                    <el-radio-group v-model="form4.SS4_11" placeholder="请选择">
                        <el-radio v-for="item in option4_11" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="胃癌根治性手术淋巴结清扫" name="formGroup5">
            <el-form ref="form5" :model="form5" label-width="300px">
                <el-form-item label="是否进行手术淋巴结清扫">
                    <el-radio-group v-model="form5.SS5_1" placeholder="请选择">
                        <el-radio v-for="item in option5_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="淋巴结送检数目" v-show="form5.SS5_1==='y'">
                    <el-input v-model="form5.SS5_1_1_1"></el-input>
                </el-form-item>
                <el-form-item label="淋巴结转移数目" v-show="form5.SS5_1==='y'">
                    <el-input v-model="form5.SS5_1_1_2"></el-input>
                </el-form-item>
                <el-form-item label="淋巴结清扫组别">
                    <el-checkbox-group v-model="form5.SS5_1_1_3">
                        <el-checkbox v-for="item in option5_1_1_3" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="贲门右淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第1组 贲门右淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_1_1"></el-input>
                </el-form-item>
                <el-form-item label="贲门左淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第2组 贲门左淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_2_1"></el-input>
                </el-form-item>
                <el-form-item label="小弯淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第3组 小弯淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_3_1"></el-input>
                </el-form-item>
                <el-form-item label="大弯淋巴结左组（沿胃短动脉）清扫数目" v-show="form5.SS5_1_1_3.indexOf('第4sa组 大弯淋巴结左组（沿胃短动脉）')>-1">
                    <el-input v-model="form5.SS5_1_1_3_4_1"></el-input>
                </el-form-item>
                <el-form-item label="大弯淋巴结左组（沿胃网膜左动脉）清扫数目"
                    v-show="form5.SS5_1_1_3.indexOf('第4sb组 大弯淋巴结左组（沿胃网膜左动脉）')>-1">
                    <el-input v-model="form5.SS5_1_1_3_5_1"></el-input>
                </el-form-item>
                <el-form-item label="大弯淋巴结右组（沿胃网膜右动脉）清扫数目"
                    v-show="form5.SS5_1_1_3.indexOf('第4d组 大弯淋巴结右组（沿胃网膜右动脉）')>-1">
                    <el-input v-model="form5.SS5_1_1_3_6_1"></el-input>
                </el-form-item>
                <el-form-item label="幽门上淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第5组 幽门上淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_7_1"></el-input>
                </el-form-item>
                <el-form-item label="幽门下淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第6组 幽门下淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_8_1"></el-input>
                </el-form-item>
                <el-form-item label="胃左动脉淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第7组 胃左动脉淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_9_1"></el-input>
                </el-form-item>
                <el-form-item label="肝总动脉前上部淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第8a组 肝总动脉前上部淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_10_1"></el-input>
                </el-form-item>
                <el-form-item label="肝总动脉后部淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第8P组 肝总动脉后部淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_11_1"></el-input>
                </el-form-item>
                <el-form-item label="腹腔动脉周围淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第9组 腹腔动脉周围淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_12_1"></el-input>
                </el-form-item>
                <el-form-item label="脾门淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第10组 脾门淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_13_1"></el-input>
                </el-form-item>
                <el-form-item label="脾动脉近端淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第11p组 脾动脉近端淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_14_1"></el-input>
                </el-form-item>
                <el-form-item label="脾动脉远端淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第11d组 脾动脉远端淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_15_1"></el-input>
                </el-form-item>
                <el-form-item label="肝十二指肠韧带淋巴结（沿肝动脉）清扫数目"
                    v-show="form5.SS5_1_1_3.indexOf('第12a组 肝十二指肠韧带淋巴结（沿肝动脉）')>-1">
                    <el-input v-model="form5.SS5_1_1_3_16_1"></el-input>
                </el-form-item>
                <el-form-item label="肝十二指肠韧带淋巴结（沿胆管）清扫数目" v-show="form5.SS5_1_1_3.indexOf('第12b组 肝十二指肠韧带淋巴结（沿胆管）')>-1">
                    <el-input v-model="form5.SS5_1_1_3_17_1"></el-input>
                </el-form-item>
                <el-form-item label="肝十二指肠韧带淋巴结（沿门静脉）清扫数目"
                    v-show="form5.SS5_1_1_3.indexOf('第12p组 肝十二指肠韧带淋巴结（沿门静脉）')>-1">
                    <el-input v-model="form5.SS5_1_1_3_18_1"></el-input>
                </el-form-item>
                <el-form-item label="胰头后淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第13组 胰头后淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_19_1"></el-input>
                </el-form-item>
                <el-form-item label="沿肠系膜上静脉淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第14v组 沿肠系膜上静脉淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_20_1"></el-input>
                </el-form-item>
                <el-form-item label="沿肠系膜上动脉淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第14a组 沿肠系膜上动脉淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_21_1"></el-input>
                </el-form-item>
                <el-form-item label="结肠中动脉周围淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第15组 结肠中动脉周围淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_22_1"></el-input>
                </el-form-item>
                <el-form-item label="腹主动脉周围淋巴结a1清扫数目" v-show="form5.SS5_1_1_3.indexOf('第16a1组 腹主动脉周围淋巴结a1')>-1">
                    <el-input v-model="form5.SS5_1_1_3_23_1"></el-input>
                </el-form-item>
                <el-form-item label="腹主动脉周围淋巴结a2清扫数目" v-show="form5.SS5_1_1_3.indexOf('第16a2组 腹主动脉周围淋巴结a2')>-1">
                    <el-input v-model="form5.SS5_1_1_3_24_1"></el-input>
                </el-form-item>
                <el-form-item label="腹主动脉周围淋巴结b1清扫数目" v-show="form5.SS5_1_1_3.indexOf('第16b1组 腹主动脉周围淋巴结b1')>-1">
                    <el-input v-model="form5.SS5_1_1_3_25_1"></el-input>
                </el-form-item>
                <el-form-item label="腹主动脉周围淋巴结b2清扫数目" v-show="form5.SS5_1_1_3.indexOf('第16b2组 腹主动脉周围淋巴结b2')>-1">
                    <el-input v-model="form5.SS5_1_1_3_26_1"></el-input>
                </el-form-item>
                <el-form-item label="胰头前淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第17组 胰头前淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_27_1"></el-input>
                </el-form-item>
                <el-form-item label="胰下淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第18组 胰下淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_28_1"></el-input>
                </el-form-item>
                <el-form-item label="膈下淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第19组 膈下淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_29_1"></el-input>
                </el-form-item>
                <el-form-item label="食管裂孔淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第20组 食管裂孔淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_30_1"></el-input>
                </el-form-item>
                <el-form-item label="胸部下食管旁淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第110组 胸部下食管旁淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_31_1"></el-input>
                </el-form-item>
                <el-form-item label="膈上淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第111组 膈上淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_32_1"></el-input>
                </el-form-item>
                <el-form-item label="后纵隔淋巴结清扫数目" v-show="form5.SS5_1_1_3.indexOf('第112组 后纵隔淋巴结')>-1">
                    <el-input v-model="form5.SS5_1_1_3_33_1"></el-input>
                </el-form-item>
                <el-form-item label="淋巴结是否分拣">
                    <el-radio-group v-model="form5.SS5_1_1_4" placeholder="请选择">
                        <el-radio v-for="item in option5_1_1_4" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="淋巴结清除结果">
                    <el-select v-model="form5.SS5_1_1_5" placeholder="请选择">
                        <el-option v-for="item in option5_1_1_5" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="术后的病理学诊断" name="formGroup6">
            <el-form ref="form6" :model="form6" label-width="300px">
                <el-form-item label="是否有病理学诊断">
                    <el-radio-group v-model="form6.SS6_1" placeholder="请选择">
                        <el-radio v-for="item in option6_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="采集组织或细胞学标本途经的选择" v-show="form6.SS6_1==='y'">
                    <el-select v-model="form6.SS6_1_1_1" placeholder="请选择">
                        <el-option v-for="item in option6_1_1_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="病灶数量" v-show="form6.SS6_1==='y'">
                    <el-select v-model="form6.SS6_1_1_2" placeholder="请选择">
                        <el-option v-for="item in option6_1_1_2" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="病灶位置-纵轴" v-show="form6.SS6_1==='y'">
                    <el-select v-model="form6.SS6_1_1_3" placeholder="请选择">
                        <el-option v-for="item in option6_1_1_3" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="病灶位置-横轴" v-show="form6.SS6_1==='y'">
                    <el-select v-model="form6.SS6_1_1_4" placeholder="请选择">
                        <el-option v-for="item in option6_1_1_4" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="病灶大小-最大径" v-show="form6.SS6_1==='y'">
                    <el-input v-model="form6.SS6_1_1_5"></el-input>
                </el-form-item>
                <el-form-item label="病灶大小-最小径" v-show="form6.SS6_1==='y'">
                    <el-input v-model="form6.SS6_1_1_6"></el-input>
                </el-form-item>
                <el-form-item label="病理分型（WHO）" v-show="form6.SS6_1==='y'">
                    <el-select v-model="form6.SS6_1_1_7" placeholder="请选择">
                        <el-option v-for="item in option6_1_1_7" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="组织学分级" v-show="form6.SS6_1==='y'">
                    <el-select v-model="form6.SS6_1_1_8" placeholder="请选择">
                        <el-option v-for="item in option6_1_1_8" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否上级会诊" v-show="form6.SS6_1==='y'">
                    <el-radio-group v-model="form6.SS6_1_1_9" placeholder="请选择">
                        <el-radio v-for="item in option6_1_1_9" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否有新辅助治疗反应" v-show="form6.SS6_1==='y'">
                    <el-radio-group v-model="form6.SS6_1_1_10" placeholder="请选择">
                        <el-radio v-for="item in option6_1_1_10" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否有胃癌病理pTNM分期" v-show="form6.SS6_1==='y'">
                    <el-radio-group v-model="form6.SS6_1_1_11" placeholder="请选择">
                        <el-radio v-for="item in option6_1_1_11" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="pTNM分期结论" v-show="form6.SS6_1==='y'&&form6.SS6_1_1_11==='y'">
                    <el-select v-model="form6.SS6_1_1_11_1_1" placeholder="请选择">
                        <el-option v-for="item in option6_1_1_11_1_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="术后分期与术前分期是否相符" v-show="form6.SS6_1==='y'">
                    <el-radio-group v-model="form6.SS6_1_1_12" placeholder="请选择">
                        <el-radio v-for="item in option6_1_1_12" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="围术期抗菌药物使用情况" name="formGroup7">
            <el-form ref="form7" :model="form7" label-width="300px">
                <el-form-item label="是否使用预防性抗菌药物">
                    <el-radio-group v-model="form7.SS7_1" placeholder="请选择">
                        <el-radio v-for="item in option7_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="预防性抗菌药物选择" v-show="form7.SS7_1==='y'">
                    <el-checkbox-group v-model="form7.SS7_1_1_1">
                        <el-checkbox v-for="item in option7_1_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="使用首剂抗菌药物起始时间">
                    <el-date-picker v-model="form7.SS7_2" type="date" placeholder="请选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="手术时间是否≥3小时">
                    <el-radio-group v-model="form7.SS7_3" placeholder="请选择">
                        <el-radio v-for="item in option7_3" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="手术时间≥3小时情况下，是否术中追加抗菌药物" v-show="form7.SS7_3==='y'">
                    <el-radio-group v-model="form7.SS7_3_1_1" placeholder="请选择">
                        <el-radio v-for="item in option7_3_1_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术中出血量是否≥1500ml">
                    <el-radio-group v-model="form7.SS7_4" placeholder="请选择">
                        <el-radio v-for="item in option2_2" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术中出血量≥1500ml情况下，是否术中追加抗菌药物" v-show="form7.SS7_4==='y'">
                    <el-radio-group v-model="form7.SS7_4_1_1" placeholder="请选择">
                        <el-radio v-for="item in option7_4_1_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术后抗菌药物停止使用时间">
                    <el-date-picker v-model="form7.SS7_5" type="date" placeholder="请选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="使用抗菌药物时间使用时间分层">
                    <el-input v-model="form7.SS7_6"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="术后并发症与再手术情况" name="formGroup8">
            <el-form ref="form8" :model="form8" label-width="300px">
                <el-form-item label="是否出现并发症">
                    <el-radio-group v-model="form8.SS8_1" placeholder="请选择">
                        <el-radio v-for="item in option8_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="并发症类型">
                    <el-checkbox-group v-model="form8.SS8_1_1_1" v-show="form8.SS8_1==='y'">
                        <el-checkbox v-for="item in option8_1_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="切口感染分级">
                    <el-select v-model="form8.SS8_1_1_1_1_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="切口感染发生日期">
                    <el-input v-model="form8.SS8_1_1_1_1_2"></el-input>
                </el-form-item>
                <el-form-item label="腹腔积液/脓肿分级">
                    <el-select v-model="form8.SS8_1_1_1_2_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="腹腔积液/脓肿分级发生日期">
                    <el-input v-model="form8.SS8_1_1_1_2_2"></el-input>
                </el-form-item>
                <el-form-item label="腹腔内出血分级">
                    <el-select v-model="form8.SS8_1_1_1_3_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="腹腔内出血发生日期">
                    <el-input v-model="form8.SS8_1_1_1_3_2"></el-input>
                </el-form-item>
                <el-form-item label="消化道出血分级">
                    <el-select v-model="form8.SS8_1_1_1_4_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="消化道出血发生日期">
                    <el-input v-model="form8.SS8_1_1_1_4_2"></el-input>
                </el-form-item>
                <el-form-item label="肠梗阻分级">
                    <el-select v-model="form8.SS8_1_1_1_5_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="肠梗阻发生日期">
                    <el-input v-model="form8.SS8_1_1_1_5_2"></el-input>
                </el-form-item>
                <el-form-item label="肠瘘分级">
                    <el-select v-model="form8.SS8_1_1_1_6_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="肠瘘发生日期">
                    <el-input v-model="form8.SS8_1_1_1_6_2"></el-input>
                </el-form-item>
                <el-form-item label="吻合口出血分级">
                    <el-select v-model="form8.SS8_1_1_1_7_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="吻合口出血发生日期">
                    <el-input v-model="form8.SS8_1_1_1_7_2"></el-input>
                </el-form-item>
                <el-form-item label="吻合口瘘分级">
                    <el-select v-model="form8.SS8_1_1_1_8_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="吻合口瘘发生日期">
                    <el-input v-model="form8.SS8_1_1_1_8_2"></el-input>
                </el-form-item>
                <el-form-item label="吻合口狭窄分级">
                    <el-select v-model="form8.SS8_1_1_1_9_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="吻合口狭窄发生日期">
                    <el-input v-model="form8.SS8_1_1_1_9_2"></el-input>
                </el-form-item>
                <el-form-item label="淋巴漏分级">
                    <el-select v-model="form8.SS8_1_1_1_10_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="淋巴漏发生日期">
                    <el-input v-model="form8.SS8_1_1_1_10_2"></el-input>
                </el-form-item>
                <el-form-item label="十二指肠残端瘘分级">
                    <el-select v-model="form8.SS8_1_1_1_11_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="十二指肠残端瘘发生日期">
                    <el-input v-model="form8.SS8_1_1_1_11_2"></el-input>
                </el-form-item>
                <el-form-item label="切口肺感染性并发症分级">
                    <el-select v-model="form8.SS8_1_1_1_12_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="切口肺感染性并发症发生日期">
                    <el-input v-model="form8.SS8_1_1_1_12_2"></el-input>
                </el-form-item>
                <el-form-item label="胃瘫t分级">
                    <el-select v-model="form8.SS8_1_1_1_13_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="胃瘫发生日期">
                    <el-input v-model="form8.SS8_1_1_1_13_2"></el-input>
                </el-form-item>
                <el-form-item label="胰瘘分级">
                    <el-select v-model="form8.SS8_1_1_1_14_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="胰瘘发生日期">
                    <el-input v-model="form8.SS8_1_1_1_14_2"></el-input>
                </el-form-item>
                <el-form-item label="肺部感染分级">
                    <el-select v-model="form8.SS8_1_1_1_15_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="肺部感染发生日期">
                    <el-input v-model="form8.SS8_1_1_1_15_2"></el-input>
                </el-form-item>
                <el-form-item label="泌尿系感染分级">
                    <el-select v-model="form8.SS8_1_1_1_16_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="泌尿系感染发生日期">
                    <el-input v-model="form8.SS8_1_1_1_16_2"></el-input>
                </el-form-item>
                <el-form-item label="肾功能不全分级">
                    <el-select v-model="form8.SS8_1_1_1_17_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="肾功能不全发生日期">
                    <el-input v-model="form8.SS8_1_1_1_17_2"></el-input>
                </el-form-item>
                <el-form-item label="肝功能不全分级">
                    <el-select v-model="form8.SS8_1_1_1_18_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="肝功能不全发生日期">
                    <el-input v-model="form8.SS8_1_1_1_18_2"></el-input>
                </el-form-item>
                <el-form-item label="心脑血管意外分级">
                    <el-select v-model="form8.SS8_1_1_1_19_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="心脑血管意外发生日期">
                    <el-input v-model="form8.SS8_1_1_1_19_2"></el-input>
                </el-form-item>
                <el-form-item label="深静脉血栓分级">
                    <el-select v-model="form8.SS8_1_1_1_20_1" placeholder="请选择">
                    </el-select>
                </el-form-item>
                <el-form-item label="深静脉血栓发生日期">
                    <el-input v-model="form8.SS8_1_1_1_20_2"></el-input>
                </el-form-item>
                <el-form-item label="其他并发症">
                    <el-input v-model="form8.SS8_1_1_1_21_1"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="营养支持治疗情况" name="formGroup9">
            <el-form ref="form9" :model="form9" label-width="300px">
                <el-form-item label="术前是否进行营养评估">
                    <el-checkbox-group v-model="form9.SS9_1">
                        <el-checkbox v-for="item in option9_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="NRS-2002评估分值" v-show="form9.SS9_1.indexOf('使用NRS-2002进行营养评估')>-1">
                    <el-input v-model="form9.SS9_1_1_1"></el-input>
                </el-form-item>
                <el-form-item label="PG-SGA评估分级" v-show="form9.SS9_1.indexOf('使用PG-SGA进行营养评估')>-1">
                    <el-select v-model="form9.SS9_1_2_1" placeholder="请选择">
                        <el-option v-for="item in option9_1_2_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="MNA评估分值" v-show="form9.SS9_1.indexOf('使用MNA进行营养评估')>-1">
                    <el-input v-model="form9.SS9_1_3_1"></el-input>
                </el-form-item>
                <el-form-item label="术前是否给予营养支持">
                    <el-radio-group v-model="form9.SS9_2" placeholder="请选择">
                        <el-radio v-for="item in option9_2" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术前给予营养支持符合原则规范" v-show="form9.SS9_2==='y'">
                    <el-checkbox-group v-model="form9.SS9_2_1_1">
                        <el-checkbox v-for="item in option9_2_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="其他术前给予营养支持符合原则规范" v-show="form9.SS9_2==='y'&&form9.SS9_2_1_1.indexOf('其他')>-1">
                    <el-input v-model="form9.SS9_2_1_1_5_1"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                form2: {
                    SS2_1: [],
                    SS2_2: '',
                    SS2_2_1_1: '',
                    SS2_3: '',
                    SS2_3_1_1: '',
                    SS2_4: '',
                    SS2_4_1_1: '',
                    SS2_4_1_2: '',
                    SS2_4_1_3: '',
                    SS2_4_1_4: '',
                    SS2_5: '',
                    SS2_6: '',
                    SS2_7: '',
                    SS2_7_1_1: '',
                    SS2_7_1_2: '',
                    SS2_7_1_2_1_1: '',
                },
                form3: {
                    SS3_1: '',
                    SS3_1_1_1: '',
                    SS3_1_1_1_6_1: '',
                    SS3_1_1_2: '',
                },
                form4: {
                    SS4_1: '',
                    SS4_2: [],
                    SS4_3: [],
                    SS4_4: '',
                    SS4_5: '',
                    SS4_5_8_1: '',
                    SS4_6: '',
                    SS4_6_1_1: [],
                    SS4_7: '',
                    SS4_8: '',
                    SS4_9: '',
                    SS4_10: '',
                    SS4_11: '',
                },
                form5: {
                    SS5_1: '',
                    SS5_1_1_1: '',
                    SS5_1_1_2: '',
                    SS5_1_1_3: [],
                    SS5_1_1_3_1_1: '',
                    SS5_1_1_3_2_1: '',
                    SS5_1_1_3_3_1: '',
                    SS5_1_1_3_4_1: '',
                    SS5_1_1_3_5_1: '',
                    SS5_1_1_3_6_1: '',
                    SS5_1_1_3_7_1: '',
                    SS5_1_1_3_8_1: '',
                    SS5_1_1_3_9_1: '',
                    SS5_1_1_3_10_1: '',
                    SS5_1_1_3_11_1: '',
                    SS5_1_1_3_12_1: '',
                    SS5_1_1_3_13_1: '',
                    SS5_1_1_3_14_1: '',
                    SS5_1_1_3_15_1: '',
                    SS5_1_1_3_16_1: '',
                    SS5_1_1_3_17_1: '',
                    SS5_1_1_3_18_1: '',
                    SS5_1_1_3_19_1: '',
                    SS5_1_1_3_20_1: '',
                    SS5_1_1_3_21_1: '',
                    SS5_1_1_3_22_1: '',
                    SS5_1_1_3_23_1: '',
                    SS5_1_1_3_24_1: '',
                    SS5_1_1_3_25_1: '',
                    SS5_1_1_3_26_1: '',
                    SS5_1_1_3_27_1: '',
                    SS5_1_1_3_28_1: '',
                    SS5_1_1_3_29_1: '',
                    SS5_1_1_3_30_1: '',
                    SS5_1_1_3_31_1: '',
                    SS5_1_1_3_32_1: '',
                    SS5_1_1_3_33_1: '',
                    SS5_1_1_4: '',
                    SS5_1_1_5: '',
                },
                form6: {
                    SS6_1: '',
                    SS6_1_1_1: '',
                    SS6_1_1_2: '',
                    SS6_1_1_3: '',
                    SS6_1_1_4: '',
                    SS6_1_1_5: '',
                    SS6_1_1_6: '',
                    SS6_1_1_7: '',
                    SS6_1_1_8: '',
                    SS6_1_1_9: '',
                    SS6_1_1_10: '',
                    SS6_1_1_11: '',
                    SS6_1_1_11_1_1: '',
                    SS6_1_1_12: '',
                },
                form7: {
                    SS7_1: '',
                    SS7_1_1_1: [],
                    SS7_2: '',
                    SS7_3: '',
                    SS7_3_1_1: '',
                    SS7_4: '',
                    SS7_4_1_1: '',
                    SS7_5: '',
                    SS7_6: '',
                },
                form8: {
                    SS8_1: '',
                    SS8_1_1_1: [],
                    SS8_1_1_1_1_1: '',
                    SS8_1_1_1_1_2: '',
                    SS8_1_1_1_2_1: '',
                    SS8_1_1_1_2_2: '',
                    SS8_1_1_1_3_1: '',
                    SS8_1_1_1_3_2: '',
                    SS8_1_1_1_4_1: '',
                    SS8_1_1_1_4_2: '',
                    SS8_1_1_1_5_1: '',
                    SS8_1_1_1_5_2: '',
                    SS8_1_1_1_6_1: '',
                    SS8_1_1_1_6_2: '',
                    SS8_1_1_1_7_1: '',
                    SS8_1_1_1_7_2: '',
                    SS8_1_1_1_8_1: '',
                    SS8_1_1_1_8_2: '',
                    SS8_1_1_1_9_1: '',
                    SS8_1_1_1_9_2: '',
                    SS8_1_1_1_10_1: '',
                    SS8_1_1_1_10_2: '',
                    SS8_1_1_1_11_1: '',
                    SS8_1_1_1_11_2: '',
                    SS8_1_1_1_12_1: '',
                    SS8_1_1_1_12_2: '',
                    SS8_1_1_1_13_1: '',
                    SS8_1_1_1_13_2: '',
                    SS8_1_1_1_14_1: '',
                    SS8_1_1_1_14_2: '',
                    SS8_1_1_1_15_1: '',
                    SS8_1_1_1_15_2: '',
                    SS8_1_1_1_16_1: '',
                    SS8_1_1_1_16_2: '',
                    SS8_1_1_1_17_1: '',
                    SS8_1_1_1_17_2: '',
                    SS8_1_1_1_18_1: '',
                    SS8_1_1_1_18_2: '',
                    SS8_1_1_1_19_1: '',
                    SS8_1_1_1_19_2: '',
                    SS8_1_1_1_20_1: '',
                    SS8_1_1_1_20_2: '',
                    SS8_1_1_1_21_1: '',
                },
                form9: {
                    SS9_1: [],
                    SS9_1_1_1: '',
                    SS9_1_2_1: '',
                    SS9_1_3_1: '',
                    SS9_2: '',
                    SS9_2_1_1: [],
                    SS9_2_1_1_5_1: '',
                },
                option2_1: [{
                        value: 'a',
                        label: '胸部增强CT'
                    },
                    {
                        value: 'b',
                        label: '腹部增强CT'
                    },
                    {
                        value: 'c',
                        label: '胃镜检查'
                    },
                    {
                        value: 'd',
                        label: '全身PET-CT'
                    },
                    {
                        value: 'e',
                        label: '上腹部增强MRI'
                    },
                    {
                        value: 'f',
                        label: '超声内镜'
                    },
                    {
                        value: 'g',
                        label: '全身骨扫描'
                    },
                    {
                        value: 'h',
                        label: '肿瘤标志物'
                    },
                    {
                        value: 'i',
                        label: '发射单光子计算机断层扫描仪（ECT）'
                    },
                    {
                        value: 'j',
                        label: 'X线气钡双重对比造影'
                    },
                ],
                option2_2: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option2_2_1_1: [{
                        value: 'a',
                        label: 'cT1 侵犯黏膜或黏膜下层'
                    },
                    {
                        value: 'b',
                        label: 'cT2 侵犯固有肌层'
                    },
                    {
                        value: 'c',
                        label: 'cT3 肿瘤穿透浆膜下结缔组织，未侵犯脏层腹膜'
                    },
                    {
                        value: 'd',
                        label: 'cT4a 侵犯浆膜（脏层腹膜）但未侵犯邻近结构/器官'
                    },
                    {
                        value: 'e',
                        label: 'cT4b 侵犯邻近结构/器官'
                    },
                    {
                        value: 'f',
                        label: 'cN 分期根据淋巴结转移数目分为N0-N3'
                    },
                    {
                        value: 'g',
                        label: '无法确定或者无记录'
                    },
                ],
                option2_3: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option2_3_1_1: [{
                        value: 'a',
                        label: 'uT1a 侵犯固有层或黏膜肌层'
                    },
                    {
                        value: 'b',
                        label: 'uT1b 侵犯黏膜下层'
                    },
                    {
                        value: 'c',
                        label: 'uT2 侵犯固有肌层'
                    },
                    {
                        value: 'd',
                        label: 'uT3 肿瘤穿透浆膜下结缔组织，未侵犯脏层腹膜'
                    },
                    {
                        value: 'e',
                        label: 'uT4a 侵犯浆膜（脏层腹膜）但未侵犯邻近结构/器官'
                    },
                    {
                        value: 'f',
                        label: 'uT4b 侵犯邻近结构/器官'
                    },
                    {
                        value: 'g',
                        label: 'uN分期 根据淋巴结转移数目分为N0-N3'
                    },
                    {
                        value: 'h',
                        label: 'uM分期 根据是否远处转移分为M0及M1'
                    },
                    {
                        value: 'i',
                        label: '无法确定或者无记录'
                    },
                ],
                option2_4: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option2_4_1_1: [{
                        value: 'a',
                        label: 'Tx 原发肿瘤无法评估'
                    },
                    {
                        value: 'b',
                        label: 'T0 无原发肿瘤的证据'
                    },
                    {
                        value: 'c',
                        label: 'Tis 原位癌：上皮内肿瘤，未侵及固有层，高度不典型增生'
                    },
                    {
                        value: 'd',
                        label: 'T1 肿瘤侵犯固有层，黏膜肌层或黏膜下层'
                    },
                    {
                        value: 'e',
                        label: 'T1a 肿瘤侵犯固有层或黏膜肌层'
                    },
                    {
                        value: 'f',
                        label: 'T1b 肿瘤侵犯黏膜下层'
                    },
                    {
                        value: 'g',
                        label: 'T2 肿瘤侵犯固有肌层'
                    },
                    {
                        value: 'h',
                        label: 'T3 肿瘤穿透浆膜下结缔组织，而尚未侵犯脏层腹膜或邻近结构'
                    },
                    {
                        value: 'i',
                        label: 'T4 肿瘤侵犯浆膜（脏层腹膜）或邻近结构'
                    },
                    {
                        value: 'j',
                        label: 'T4a 肿瘤侵犯浆膜（脏层腹膜）'
                    },
                    {
                        value: 'k',
                        label: 'T4b 肿瘤侵犯邻近结构'
                    },
                ],
                option2_4_1_2: [{
                        value: 'a',
                        label: 'Nx 区域淋巴结无法评估'
                    },
                    {
                        value: 'b',
                        label: 'N0 区域淋巴结无转移'
                    },
                    {
                        value: 'c',
                        label: 'N1 1-2个区域淋巴结有转移'
                    },
                    {
                        value: 'd',
                        label: 'N2 3-6个区域淋巴结有转移'
                    },
                    {
                        value: 'e',
                        label: 'N3 7个或7个以上区域淋巴结有转移'
                    },
                    {
                        value: 'f',
                        label: 'N3a 7-15个区域淋巴结有转移'
                    },
                    {
                        value: 'g',
                        label: 'N3b 16个或16个以上区域淋巴结有转移'
                    },
                ],
                option2_4_1_3: [{
                        value: 'a',
                        label: 'M0 无远处转移'
                    },
                    {
                        value: 'b',
                        label: 'M1 有远处转移'
                    },
                ],
                option2_4_1_4: [{
                        value: 'a',
                        label: '0期（Tis,N0,M0）'
                    },
                    {
                        value: 'b',
                        label: 'I期（T1/T2,N0.M0）'
                    },
                    {
                        value: 'c',
                        label: 'IIA期（T1/T2,N1-N3,M0）'
                    },
                    {
                        value: 'd',
                        label: 'IIB期（T3/T4a,N0,M0）'
                    },
                    {
                        value: 'e',
                        label: 'III期（T3/T4a,N1-N3,M0）'
                    },
                    {
                        value: 'f',
                        label: 'IVA期（T4b,任何N,M0）'
                    },
                    {
                        value: 'g',
                        label: 'IVB期（任何T,任何N,M1）'
                    },
                    {
                        value: 'h',
                        label: '无法确定或无法评估'
                    },
                ],
                option2_5: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option2_6: [{
                        value: 'a',
                        label: '1级，健康患者能耐受手术麻醉'
                    },
                    {
                        value: 'b',
                        label: '2级，患者有轻度系统性疾病，没有功能障碍，能耐受手术麻醉'
                    },
                    {
                        value: 'c',
                        label: '3级，患者有重度的系统性疾病，并有一定的功能受损，但尚能耐受麻醉'
                    },
                    {
                        value: 'd',
                        label: '4级，患者有重度系统性疾病，并且终生需要不间断的治疗，麻醉危险性极大，需要充分的、细致的麻醉前准备'
                    },
                    {
                        value: 'e',
                        label: '5级，濒死患者，无论手术与否，在24小时内不大可能存活'
                    },
                    {
                        value: 'f',
                        label: '6级，脑死亡患者'
                    },
                ],
                option2_7: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option2_7_1_1: [{
                        value: 'a',
                        label: '低危'
                    },
                    {
                        value: 'b',
                        label: '中危'
                    },
                    {
                        value: 'c',
                        label: '高危'
                    },
                    {
                        value: 'd',
                        label: '极高危'
                    },
                ],
                option2_7_1_2: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option3_1: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option3_1_1_1: [{
                        value: 'a',
                        label: '胃镜活检活检标本'
                    },
                    {
                        value: 'b',
                        label: '腹腔积液细胞学'
                    },
                    {
                        value: 'c',
                        label: '转移病灶穿刺活检'
                    },
                    {
                        value: 'd',
                        label: '胃镜活检下黏膜切除术/内镜下黏膜剥离术标本'
                    },
                    {
                        value: 'e',
                        label: '根治切除标本'
                    },
                    {
                        value: 'f',
                        label: '其他来源标本'
                    },
                ],
                option3_1_1_2: [{
                        value: 'a',
                        label: '距入院时一个月之内'
                    },
                    {
                        value: 'b',
                        label: '距入院时二个月之内'
                    },
                    {
                        value: 'c',
                        label: '距入院时三个月之内'
                    },
                    {
                        value: 'd',
                        label: '距入院时六个月之内'
                    },
                    {
                        value: 'e',
                        label: '距入院时十二个月之内'
                    },
                    {
                        value: 'f',
                        label: '距入院时十二个月及以上'
                    },
                ],
                option4_1: [{
                        value: 'a',
                        label: '开腹手术'
                    },
                    {
                        value: 'b',
                        label: '腹腔镜下手术'
                    },
                    {
                        value: 'c',
                        label: '其他'
                    },
                ],
                option4_2: [{
                        value: 'a',
                        label: '上部（C）胃底贲门区（胃上部）'
                    },
                    {
                        value: 'b',
                        label: '中部（M）胃体区（胃中部）'
                    },
                    {
                        value: 'c',
                        label: '下部（A）胃幽门区（胃下部）'
                    },
                    {
                        value: 'd',
                        label: '贲门胃底 （U）'
                    },
                    {
                        value: 'e',
                        label: '幽门（L）'
                    },
                    {
                        value: 'f',
                        label: '十二指肠 （AD）'
                    },
                    {
                        value: 'g',
                        label: '食道 （CE）'
                    },
                ],
                option4_3: [{
                        value: 'a',
                        label: '标准手术是以根治为目的，要求必须切除2/3以上的胃，并且进行D2淋巴结清扫'
                    },
                    {
                        value: 'b',
                        label: '改良手术主要针对分期较早的肿瘤，要求切除部分胃或全胃，同时进行D1或D1+淋巴结清扫'
                    },
                    {
                        value: 'c',
                        label: '扩大手术包括联合脏器切除或（和）D2以上淋巴结清扫的扩大手术'
                    },
                    {
                        value: 'd',
                        label: '姑息手术主要针对出现肿瘤并发症的患者（出血、梗阻等），主要的手术方式包括胃姑息性切除、胃空肠吻合短路手术和空肠营养管置入术等'
                    },
                    {
                        value: 'e',
                        label: '减瘤手术主要针对存在不可切除的肝转移或者腹膜转移等非治愈因素，也没有出现肿瘤并发症所进行的胃切除，目前不推荐开展'
                    },
                    {
                        value: 'f',
                        label: '无法确定,或者无记录'
                    },
                ],
                option4_4: [{
                        value: 'a',
                        label: '全胃切除术'
                    },
                    {
                        value: 'b',
                        label: '远端胃切除术'
                    },
                    {
                        value: 'c',
                        label: '近端胃切除术'
                    },
                    {
                        value: 'd',
                        label: '保留幽门胃切除术'
                    },
                    {
                        value: 'e',
                        label: '无法确定或者无记录'
                    },
                ],
                option4_5: [{
                        value: 'a',
                        label: 'Roux-en-Y吻合'
                    },
                    {
                        value: 'b',
                        label: '空肠间置法'
                    },
                    {
                        value: 'c',
                        label: 'Billroth I式'
                    },
                    {
                        value: 'd',
                        label: 'Billroth II式联合Braun吻合'
                    },
                    {
                        value: 'e',
                        label: 'Roux-en-Y吻合空肠间置法'
                    },
                    {
                        value: 'f',
                        label: '胃胃吻合法'
                    },
                    {
                        value: 'g',
                        label: '食管残胃吻合'
                    },
                    {
                        value: 'h',
                        label: '其他'
                    },
                ],
                option4_6: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option4_6_1_1: [{
                        value: 'a',
                        label: '术中应进行内镜定位,记入手术记录: T1肿瘤，应争取2 cm的切缘，当肿瘤边界不清时'
                    },
                    {
                        value: 'b',
                        label: '术中应进行标尺定位拍照,记入手术记录: 对于T2以上的肿瘤，BorrmannⅠ型和Ⅱ型建议至少3厘米近端切缘，BorrmannⅢ型和Ⅳ型建议至少5厘米近端切缘'
                    },
                    {
                        value: 'c',
                        label: '术中冰冻切片检查近端边缘 ( 以上a/b两项均不能实现时)'
                    },
                    {
                        value: 'd',
                        label: '术中标尺定位拍照或冰冻切片检查 ( 对于食管侵犯的肿瘤，建议切缘3~5cm,术中应进行)'
                    },
                    {
                        value: 'e',
                        label: '无法确定,或者无安全切缘证实措施的记录'
                    },
                ],
                option4_7: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                    {
                        value: 'utd',
                        label: '不确定'
                    },
                ],
                option4_8: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option4_9: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option4_10: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option4_11: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option5_1: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option5_1_1_3: [{
                        value: 'a',
                        label: '第1组 贲门右淋巴结'
                    },
                    {
                        value: 'b',
                        label: '第2组 贲门左淋巴结'
                    },
                    {
                        value: 'c',
                        label: '第3组 小弯淋巴结'
                    },
                    {
                        value: 'd',
                        label: '第4sa组 大弯淋巴结左组（沿胃短动脉）'
                    },
                    {
                        value: 'e',
                        label: '第4sb组 大弯淋巴结左组（沿胃网膜左动脉）'
                    },
                    {
                        value: 'f',
                        label: '第4d组 大弯淋巴结右组（沿胃网膜右动脉）'
                    },
                    {
                        value: 'g',
                        label: '第5组 幽门上淋巴结'
                    },
                    {
                        value: 'h',
                        label: '第6组 幽门下淋巴结'
                    },
                    {
                        value: 'i',
                        label: '第7组 胃左动脉淋巴结'
                    },
                    {
                        value: 'j',
                        label: '第8a组 肝总动脉前上部淋巴结'
                    },
                    {
                        value: 'k',
                        label: '第8P组 肝总动脉后部淋巴结'
                    },
                    {
                        value: 'l',
                        label: '第9组 腹腔动脉周围淋巴结'
                    },
                    {
                        value: 'm',
                        label: '第10组 脾门淋巴结'
                    },
                    {
                        value: 'n',
                        label: '第11p组 脾动脉近端淋巴结'
                    },
                    {
                        value: 'o',
                        label: '第11d组 脾动脉远端淋巴结'
                    },
                    {
                        value: 'p',
                        label: '第12a组 肝十二指肠韧带淋巴结（沿肝动脉）'
                    },
                    {
                        value: 'q',
                        label: '第12b组 肝十二指肠韧带淋巴结（沿胆管）'
                    },
                    {
                        value: 'r',
                        label: '第12p组 肝十二指肠韧带淋巴结（沿门静脉）'
                    },
                    {
                        value: 's',
                        label: '第13组 胰头后淋巴结'
                    },
                    {
                        value: 't',
                        label: '第14v组 沿肠系膜上静脉淋巴结'
                    },
                    {
                        value: 'u',
                        label: '第14a组 沿肠系膜上动脉淋巴结'
                    },
                    {
                        value: 'v',
                        label: '第15组 结肠中动脉周围淋巴结'
                    },
                    {
                        value: 'w',
                        label: '第16a1组 腹主动脉周围淋巴结a1'
                    },
                    {
                        value: 'x',
                        label: '第16a2组 腹主动脉周围淋巴结a2'
                    },
                    {
                        value: 'y',
                        label: '第16b1组 腹主动脉周围淋巴结b1'
                    },
                    {
                        value: 'z',
                        label: '第16b2组 腹主动脉周围淋巴结b2'
                    },
                    {
                        value: 'A',
                        label: '第17组 胰头前淋巴结'
                    },
                    {
                        value: 'B',
                        label: '第18组 胰下淋巴结'
                    },
                    {
                        value: 'C',
                        label: '第19组 膈下淋巴结'
                    },
                    {
                        value: 'D',
                        label: '第20组 食管裂孔淋巴结'
                    },
                    {
                        value: 'E',
                        label: '第110组 胸部下食管旁淋巴结'
                    },
                    {
                        value: 'F',
                        label: '第111组 膈上淋巴结'
                    },
                    {
                        value: 'G',
                        label: '第112组 后纵隔淋巴结'
                    },
                ],
                option5_1_1_4: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option5_1_1_5: [{
                        value: 'a',
                        label: 'D0'
                    },
                    {
                        value: 'b',
                        label: 'D1'
                    },
                    {
                        value: 'c',
                        label: 'D1+'
                    },
                    {
                        value: 'd',
                        label: 'D2'
                    },
                    {
                        value: 'e',
                        label: '无法确定或者无记录'
                    },
                ],
                option6_1: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option6_1_1_1: [{
                        value: 'a',
                        label: '内镜活检标本'
                    },
                    {
                        value: 'a',
                        label: '内镜下黏膜切除术/内镜下黏膜剥离术标本'
                    },
                    {
                        value: 'a',
                        label: '根治切除标本'
                    },
                    {
                        value: 'a',
                        label: '非根治切除标本'
                    },
                ],
                option6_1_1_2: [{
                        value: 'a',
                        label: '单发'
                    },
                    {
                        value: 'b',
                        label: '多发'
                    },
                ],
                option6_1_1_3: [{
                        value: 'a',
                        label: 'U'
                    },
                    {
                        value: 'b',
                        label: 'M'
                    },
                    {
                        value: 'c',
                        label: 'L'
                    },
                    {
                        value: 'd',
                        label: 'D'
                    },
                    {
                        value: 'e',
                        label: '跨区域组合'
                    },
                ],
                option6_1_1_4: [{
                        value: 'a',
                        label: '前壁'
                    },
                    {
                        value: 'b',
                        label: '后壁'
                    },
                    {
                        value: 'c',
                        label: '小弯'
                    },
                    {
                        value: 'd',
                        label: '大弯'
                    },
                    {
                        value: 'e',
                        label: '环周'
                    },
                    {
                        value: 'f',
                        label: '不明'
                    },
                ],
                option6_1_1_7: [{
                        value: 'a',
                        label: '低/高级别上皮内瘤变（in）'
                    },
                    {
                        value: 'b',
                        label: '乳头状腺癌（pap）'
                    },
                    {
                        value: 'c',
                        label: '管状腺癌（tub）'
                    },
                    {
                        value: 'd',
                        label: '粘液腺癌（muc）'
                    },
                    {
                        value: 'e',
                        label: '印戎细胞癌（sig）'
                    },
                    {
                        value: 'f',
                        label: '神经内分泌肿瘤（nen）'
                    },
                    {
                        value: 'g',
                        label: '其他'
                    },
                ],
                option6_1_1_8: [{
                        value: 'a',
                        label: '高分化（G1）'
                    },
                    {
                        value: 'b',
                        label: '中分化（G2）'
                    },
                    {
                        value: 'c',
                        label: '低分化（G3）'
                    },
                    {
                        value: 'd',
                        label: '未分化（G4）'
                    },
                    {
                        value: 'e',
                        label: '分级无法评估（Gx）'
                    },
                ],
                option6_1_1_9: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option6_1_1_10: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option6_1_1_11: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option6_1_1_11_1_1: [{
                        value: 'a',
                        label: '0期 Tis N0 M0'
                    },
                    {
                        value: 'b',
                        label: 'IA期 T1 N0 M0'
                    },
                    {
                        value: 'c',
                        label: 'IB期 T1 N1 M0'
                    },
                    {
                        value: 'd',
                        label: 'IB期 T2 N0 M0'
                    },
                    {
                        value: 'e',
                        label: 'IIA期 T1 N2 M0'
                    },
                    {
                        value: 'f',
                        label: 'IIA期 T2 N1 M0'
                    },
                    {
                        value: 'g',
                        label: 'IIA期 T3 N0 M0'
                    },
                    {
                        value: 'h',
                        label: 'IIB期 T1 N3a M0'
                    },
                    {
                        value: 'i',
                        label: 'IIB期 T2 N2 M0'
                    },
                    {
                        value: 'j',
                        label: 'IIB期 T3 N1 M0'
                    },
                    {
                        value: 'k',
                        label: 'IIB期 T4a N0 M0'
                    },
                    {
                        value: 'l',
                        label: 'IIIA期 T2 N3a M0'
                    },
                    {
                        value: 'm',
                        label: 'IIIA期 T3 N2 M0'
                    },
                    {
                        value: 'n',
                        label: 'IIIA期 T4a N1 M0'
                    },
                    {
                        value: 'o',
                        label: 'IIIA期 T4a N2 M0'
                    },
                    {
                        value: 'p',
                        label: '无法确定或无记录'
                    },
                ],
                option6_1_1_12: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option7_1: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option7_1_1_1: [{
                        value: 'a',
                        label: '青霉素类'
                    },
                    {
                        value: 'b',
                        label: '多西环素'
                    },
                    {
                        value: 'c',
                        label: '大环内酯类'
                    },
                    {
                        value: 'd',
                        label: '第一代或第二代头孢菌素'
                    },
                    {
                        value: 'e',
                        label: '喹诺酮类'
                    },
                    {
                        value: 'f',
                        label: 'β-内酰胺类/β-内酰胺酶抑制剂'
                    },
                    {
                        value: 'g',
                        label: '碳青霉烯类及替加环素等特殊使用级抗菌药物'
                    },
                    {
                        value: 'h',
                        label: '其他'
                    },
                ],
                option7_3: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option7_3_1_1: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option7_4: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option7_4_1_1: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option8_1: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option8_1_1_1: [{
                        value: 'a',
                        label: '切口感染'
                    },
                    {
                        value: 'b',
                        label: '腹腔积液/脓肿'
                    },
                    {
                        value: 'c',
                        label: '腹腔内出血'
                    },
                    {
                        value: 'd',
                        label: '消化道出血'
                    },
                    {
                        value: 'e',
                        label: '肠梗阻'
                    },
                    {
                        value: 'f',
                        label: '肠瘘'
                    },
                    {
                        value: 'g',
                        label: '吻合口出血'
                    },
                    {
                        value: 'h',
                        label: '吻合口瘘'
                    },
                    {
                        value: 'i',
                        label: '吻合口狭窄'
                    },
                    {
                        value: 'j',
                        label: '淋巴漏'
                    },
                    {
                        value: 'k',
                        label: '十二指肠残端瘘'
                    },
                    {
                        value: 'l',
                        label: '切口肺感染性并发症'
                    },
                    {
                        value: 'm',
                        label: '胃瘫'
                    },
                    {
                        value: 'n',
                        label: '胰瘘'
                    },
                    {
                        value: 'o',
                        label: '肺部感染'
                    },
                    {
                        value: 'p',
                        label: '泌尿系感染'
                    },
                    {
                        value: 'q',
                        label: '肾功能不全'
                    },
                    {
                        value: 'r',
                        label: '肝功能不全'
                    },
                    {
                        value: 's',
                        label: '心脑血管意外'
                    },
                    {
                        value: 't',
                        label: '深静脉血栓'
                    },
                    {
                        value: 'u',
                        label: '其他'
                    },
                ],
                option8_1_1_1_1_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_2_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_3_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_4_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_5_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_6_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_7_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_8_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_9_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_10_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_11_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_12_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_13_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_14_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_15_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_16_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_17_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_18_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_19_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option8_1_1_1_20_1: [{
                        value: 'a',
                        label: 'I'
                    },
                    {
                        value: 'b',
                        label: 'II'
                    },
                    {
                        value: 'c',
                        label: 'IIIa'
                    },
                    {
                        value: 'd',
                        label: 'IIIb'
                    },
                    {
                        value: 'e',
                        label: 'IVa'
                    },
                    {
                        value: 'f',
                        label: 'IVb'
                    },
                    {
                        value: 'g',
                        label: 'V'
                    },
                ],
                option9_1: [{
                        value: 'a',
                        label: '使用NRS-2002进行营养评估'
                    },
                    {
                        value: 'b',
                        label: '使用PG-SGA进行营养评估'
                    },
                    {
                        value: 'c',
                        label: '使用MNA进行营养评估'
                    },
                    {
                        value: 'd',
                        label: '未进行营养评估'
                    },
                ],
                option9_1_2_1: [{
                        value: 'a',
                        label: 'A级 营养良好'
                    },
                    {
                        value: 'b',
                        label: 'B级 中度或可疑营养不良'
                    },
                    {
                        value: 'c',
                        label: 'C级 严重营养不良'
                    },
                ],
                option9_2: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option9_2_1_1: [{
                        value: 'a',
                        label: 'NRS-2002≥3分或PG-SGA评分在2～8分的患者，术前给予营养支持'
                    },
                    {
                        value: 'b',
                        label: 'NRS-2002≥3分或PG-SGA评分≥9分的择期手术患者给予10~14天的营养支持后手术'
                    },
                    {
                        value: 'c',
                        label: '开腹大手术患者，手术前使用免疫营养5~7天，并持续到手术后7天或患者经口摄食>60%需要量时为止'
                    },
                    {
                        value: 'd',
                        label: '给予患者同时包含ω-3PUFA、精氨酸和核苷酸三类底物的免疫增强型肠内营养'
                    },
                    {
                        value: 'e',
                        label: '其他'
                    },
                    {
                        value: 'f',
                        label: '无法确定或无记录'
                    },
                ],
            }
        },
        methods: {
            submit() {
                let _this = this;
                console.log(_this);
            }
        }
    }
</script>