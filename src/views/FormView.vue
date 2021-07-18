<template>
    <div id="form-view">
        <div id="side">
            <side-bar></side-bar>
        </div>
        <div id="form">
            <el-collapse v-model="activeFormGroup" accordion>
                <el-collapse-item title="基本信息" name="formGroup1">
                    <el-form ref="form01" :model="form01" label-width="300px">
                        <el-form-item label="主刀医师">
                            <el-input v-model="form01.HB01_1"></el-input>
                        </el-form-item>
                        <el-form-item label="质控医师（科主任）">
                            <el-input v-model="form01.HB01_2"></el-input>
                        </el-form-item>
                        <el-form-item label="质控护士（护士长）">
                            <el-input v-model="form01.HB01_3"></el-input>
                        </el-form-item>
                        <el-form-item label="主控医师（管床医生）">
                            <el-input v-model="form01.HB01_4"></el-input>
                        </el-form-item>
                        <el-form-item label="责任护士（管床护士）">
                            <el-input v-model="form01.HB01_5"></el-input>
                        </el-form-item>
                        <el-form-item label="上报科室">
                            <el-input v-model="form01.HB01_6"></el-input>
                        </el-form-item>
                        <el-form-item label="患者住院号">
                            <el-input v-model="form01.HB01_7"></el-input>
                        </el-form-item>
                        <el-form-item label="患者身份证号">
                            <el-input v-model="form01.HB01_8"></el-input>
                        </el-form-item>
                        <el-form-item label="出生日期">
                            <el-input v-model="form01.HB01_9"></el-input>
                        </el-form-item>
                        <el-form-item label="患者性别">
                            <el-select v-model="form01.HB01_10" placeholder="请选择">
                                <el-option v-for="item in option01_10" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="患者体重（kg）">
                            <el-input v-model="form01.HB01_11"></el-input>
                        </el-form-item>
                        <el-form-item label="患者身高（cm）">
                            <el-input v-model="form01.HB01_12"></el-input>
                        </el-form-item>
                        <el-form-item label="体重指数（kg/m2）">
                            <el-input v-model="form01.HB01_13" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="主要诊断ICD-10四位亚目编码与名称">
                            <el-select v-model="form01.HB01_14" placeholder="请选择">
                                <el-option v-for="item in option01_14" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="主要诊断ICD-10六位临床扩展编码与名称">
                            <el-select v-model="form01.HB01_15" placeholder="请选择">
                                <el-option
                                    v-for="item in option01_15[form01.HB01_14.charCodeAt()-'a'.charCodeAt()]"
                                    :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="是否出院后31天内重复住院">
                            <el-select v-model="form01.HB01_16" placeholder="请选择">
                                <el-option v-for="item in option01_16" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="费用支付方式">
                            <el-select v-model="form01.HB01_17" placeholder="请选择">
                                <el-option v-for="item in option01_17" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="入院时间">
                            <el-date-picker v-model="form01.HB01_18" type="date" placeholder="请选择日期"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="出院时间">
                            <el-date-picker v-model="form01.HB01_19" type="date" placeholder="请选择日期"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="此次入院目的">
                            <el-select v-model="form01.HB01_20" placeholder="请选择">
                                <el-option v-for="item in option01_20" :key="item.value" :label="item.label"
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
                <router-view></router-view>
                <el-collapse-item title="住院期间为患者提供术前、术后健康教育与出院时提供教育告知五要素情况" name="formGroup02">
                    <el-form ref="form02" :model="form02" label-width="300px">
                        <el-form-item label="胃癌患者履行出院知情告知">
                            <el-select v-model="form02.HB02_1" placeholder="请选择">
                                <el-option v-for="item in option02_1" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="交与患者“出院小结”的副本告知患者出院时风险因素">
                            <el-checkbox-group v-model="form02.HB02_1_1_1">
                                <el-checkbox v-for="item in option02_1" :key="item.value" :label="item.label">
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="告知出院时的病情风险情况">
                            <el-checkbox-group v-model="form02.HB02_1_1_2">
                                <el-checkbox v-for="item in option02_1_1_2" :key="item.value" :label="item.label">
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="出院后合理的进餐制度和正确的进餐方式预防合并症">
                            <el-checkbox-group v-model="form02.HB02_1_1_3">
                                <el-checkbox v-for="item in option02_1_1_3" :key="item.value" :label="item.label">
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="告知胃癌术后常见并发症的应对措施">
                            <el-checkbox-group v-model="form02.HB02_1_1_4">
                                <el-checkbox v-for="item in option02_1_1_4" :key="item.value" :label="item.label">
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="出院时教育与随访">
                            <el-checkbox-group v-model="form02.HB02_1_1_5">
                                <el-checkbox v-for="item in option02_1_1_5" :key="item.value" :label="item.label">
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submit">保存</el-button>
                            <el-button>重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
                <el-collapse-item title="离院方式" name="formGroup03">
                    <el-form ref="form03" :model="form03" label-width="300px">
                        <el-form-item label="住院天数">
                            <el-input v-model="form03.HB03_1"></el-input>
                        </el-form-item>
                        <el-form-item label="术后住院天数">
                            <el-input v-model="form03.HB03_2"></el-input>
                        </el-form-item>
                        <el-form-item label="离院方式选择">
                            <el-select v-model="form03.HB03_3" placeholder="请选择">
                                <el-option v-for="item in option03_3" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="非医嘱离院可能涉及因素">
                            <el-checkbox-group v-model="form03.HB03_3_4_1">
                                <el-checkbox v-for="item in option03_3_4_1" :key="item.value" :label="item.label">
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="其他非医嘱离院可能涉及因素">
                            <el-input v-model="form03.HB03_3_4_1_7_1"></el-input>
                        </el-form-item>
                        <el-form-item label="死亡可能涉及因素">
                            <el-select v-model="form03.HB03_3_5_1" placeholder="请选择">
                                <el-option v-for="item in option03_3_5_1" :key="item.value" :label="item.label"
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
                <el-collapse-item title="住院费用" name="formGroup04">
                    <el-form ref="form04" :model="form04" label-width="300px">
                        <el-form-item label="住院总费用">
                            <el-input v-model="form04.HB04_1"></el-input>
                        </el-form-item>
                        <el-form-item label="手术治疗费">
                            <el-input v-model="form04.HB04_2"></el-input>
                        </el-form-item>
                        <el-form-item label="麻醉费">
                            <el-input v-model="form04.HB04_3"></el-input>
                        </el-form-item>
                        <el-form-item label="手术费">
                            <el-input v-model="form04.HB04_4"></el-input>
                        </el-form-item>
                        <el-form-item label="药品费">
                            <el-input v-model="form04.HB04_5"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submit">保存</el-button>
                            <el-button>重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
    import SideBar from '../components/bars/SideBar.vue'

    export default {
        components: {
            SideBar
        },
        data: function () {
            return {
                activeFormGroup: '',
                form01: {
                    HB01_1: '',
                    HB01_2: '',
                    HB01_3: '',
                    HB01_4: '',
                    HB01_5: '',
                    HB01_6: '',
                    HB01_7: '',
                    HB01_8: '',
                    HB01_9: '',
                    HB01_10: '',
                    HB01_11: '',
                    HB01_12: '',
                    HB01_13: '',
                    HB01_14: '',
                    HB01_15: '',
                    HB01_16: '',
                    HB01_17: '',
                    HB01_18: '',
                    HB01_19: '',
                    HB01_20: '',
                },
                option01_10: [{
                        value: 'm',
                        label: ' 男'
                    },
                    {
                        value: 'f',
                        label: ' 女'
                    },
                ],
                option01_14: [{
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
                option01_15: [
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
                option01_16: [{
                        value: 'y',
                        label: ' 是'
                    },
                    {
                        value: 'n',
                        label: ' 否'
                    },
                ],
                option01_17: [{
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
                option01_20: [{
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
                form02: {
                    HB02_1: '',
                    HB02_1_1_1: [],
                    HB02_1_1_2: [],
                    HB02_1_1_3: [],
                    HB02_1_1_4: [],
                    HB02_1_1_5: [],
                },
                option02_1: [{
                        value: 'y',
                        label: ' 是'
                    },
                    {
                        value: 'n',
                        label: ' 否'
                    },
                ],
                option02_1_1_1: [{
                        value: 'a',
                        label: ' 交与患者的出院小结或记录中有告知胃癌患者手术后病理检查报告结果和全身辅助治疗的选择意见'
                    },
                    {
                        value: 'b',
                        label: ' 将出院医嘱及告知内容按规范的要求，通过短信或其他安全的方式发送至患者留置的信息平台(手机或网络邮箱)'
                    },
                    {
                        value: 'c',
                        label: ' 出院时若患者认知障碍（如反应迟钝，迷糊）时则向其亲属交与患者“出院小结”的副本，并告知患者出院时风险因素'
                    },
                    {
                        value: 'd',
                        label: ' 无法确定或无记录'
                    },
                ],
                option02_1_1_2: [{
                        value: 'a',
                        label: ' 手术恢复是一个较为长期的过程，出院后如遇任何明显不适症状，请及时回院就诊或与主管医生联系'
                    },
                    {
                        value: 'b',
                        label: ' 坚持按出院时医生要求完成术后化疗及放疗。密切关注化疗期间的各种反应，放疗注意保护照射区皮肤干燥，避免摩擦、热敷、理疗、涂刺激性药物和肥皂水擦洗'
                    },
                    {
                        value: 'c',
                        label: ' 胃被部分切除和全切除后，并不影响进食，因为肠完全可以代替胃的功能。但胃在被大部分切除后，仍然有可能得残胃癌,有相关症状者应及早手术'
                    },
                    {
                        value: 'd',
                        label: ' 无法确定或无记录'
                    },
                ],
                option02_1_1_3: [{
                        value: 'a',
                        label: ' 少食多餐：是胃癌切除后病人的重要饮食制度，每天进餐6—7次，定时定量进餐可以使胃内不空不用，也可以逐步适应残胃的消化功能'
                    },
                    {
                        value: 'b',
                        label: ' 干稀分食：为使食物在胃内停留时间延长，进餐时只吃较干食物，不喝水，可以在进餐30分钟以后喝水，从而避免食物被快速冲入小肠，并能缓慢通过小肠，并促进食物的进一步吸收'
                    },
                    {
                        value: 'c',
                        label: ' 限制碳水化合物摄入，预防倾倒综合症'
                    },
                    {
                        value: 'd',
                        label: ' 无法确定或无记录'
                    },
                ],
                option02_1_1_4: [{
                        value: 'a',
                        label: ' 倾倒综合症：由于幽门对胃对食物的控制能力丧失，进食大量食物后骤然进入小肠，使病人感到上腹饱满，不适，恶心，呕吐，头晕，乏力，出汗，心悸，衰弱，血压稍高，面色苍白，一般休息10—20分钟可以缓解'
                    },
                    {
                        value: 'b',
                        label: ' 低血糖：由于饭后葡萄糖在小肠内吸收过快，造成暂时性血糖升高，刺激胰岛分泌增加，继而发生出血糖过低。病人表现心悸、头晕，出冷汗等症状，多发生在进食后2—3小时，稍微进食或喝些葡萄糖水可以缓解症状'
                    },
                    {
                        value: 'c',
                        label: ' 体重下降：由于胃内容量变小后影响胃的纳食和消化功能，进食方式不当，可以造成营养素和热量不足，使病人的体重下降'
                    },
                    {
                        value: 'd',
                        label: ' 贫血：多见于缺铁性贫血，由于胃液分泌减少和肠液返流，使胃酸明显减少，直接影响到口服铁的吸收，造成贫血'
                    },
                    {
                        value: 'e',
                        label: ' 无法确定或无记录'
                    },
                ],
                option02_1_1_5: [{
                        value: 'a',
                        label: ' 术后2周的时间回院取病理结果并与主治医生商定进一步治疗方案'
                    },
                    {
                        value: 'b',
                        label: ' 若病情需要且身体条件允许，宜于术后1个月开始术后放、化疗'
                    },
                    {
                        value: 'c',
                        label: ' 术后2年内每3个月复查一次，3-5年内每6个月复查一次，5年后每1年复查一次，化疗患者定期检查血常规'
                    },
                    {
                        value: 'd',
                        label: ' 无法确定或无记录'
                    },
                ],
                form03: {
                    HB03_1: '',
                    HB03_2: '',
                    HB03_3: '',
                    HB03_3_4_1: [],
                    HB03_3_4_1_7_1: '',
                    HB03_3_5_1: '',
                },
                option03_3: [{
                        value: 'a',
                        label: ' 医嘱离院'
                    },
                    {
                        value: 'b',
                        label: ' 医嘱转院'
                    },
                    {
                        value: 'c',
                        label: ' 医嘱转社区卫生服务机构/乡镇卫生院'
                    },
                    {
                        value: 'd',
                        label: ' 非医嘱离院'
                    },
                    {
                        value: 'e',
                        label: ' 死亡'
                    },
                    {
                        value: 'f',
                        label: ' 其他方式离院'
                    },
                ],
                option03_3_4_1: [{
                        value: 'a',
                        label: ' 经济原因'
                    },
                    {
                        value: 'b',
                        label: ' 医疗保险付费方式原因'
                    },
                    {
                        value: 'c',
                        label: ' 患者/家人要求原因'
                    },
                    {
                        value: 'd',
                        label: ' 医院技术原因'
                    },
                    {
                        value: 'e',
                        label: ' 医院环境原因'
                    },
                    {
                        value: 'f',
                        label: ' 媒体资讯原因'
                    },
                    {
                        value: 'g',
                        label: ' 其他'
                    },
                    {
                        value: 'h',
                        label: ' 无法确定或无记录'
                    },
                ],
                option03_3_5_1: [{
                        value: 'a',
                        label: ' 死亡与胃癌有直接关系'
                    },
                    {
                        value: 'b',
                        label: ' 死亡与胃癌有间接关系'
                    },
                    {
                        value: 'c',
                        label: ' 死亡与胃癌无关，即死于不相关的疾病，如癌症或其他意外'
                    },
                    {
                        value: 'd',
                        label: ' 死亡，不知是否与胃癌相关'
                    },
                ],
                form04: {
                    HB04_1: '',
                    HB04_2: '',
                    HB04_3: '',
                    HB04_4: '',
                    HB04_5: '',
                }

            }
        },
        methods: {
            submit() {
                let _this = this;
                if (_this.form01.HB01_20 === 'a') {
                    _this.$router.replace('/shou-shu');
                    _this.activeFormGroup = '';
                } else if (_this.form01.HB01_20 === 'b') {
                    _this.$router.replace('/nei-jing');
                    _this.activeFormGroup = '';
                } else if (_this.form01.HB01_20 === 'c') {
                    _this.$router.replace('/zong-he');
                    _this.activeFormGroup = '';
                }
            }
        },
    }
</script>

<style scoped>
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

    .el-collapse {
        width: 80%;
        margin: 0 10%
    }

    .el-form {
        margin-top: 4%;
        margin-right: 20%
    }
</style>