<template>
    <div>
        <el-collapse-item title="二、术后精确放疗应用情况" name="formGroup2">
            <el-form ref="form2" :model="form2" label-width="300px">
                <el-form-item label="是否进行术后辅助放疗">
                    <el-radio-group v-model="form2.ZH2_1" placeholder="请选择">
                        <el-radio v-for="item in option2_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术后辅助放疗指征的选择" v-show="form2.ZH2_1==='a'">
                    <el-select v-model="form2.ZH2_1_1_1" placeholder="请选择">
                        <el-option v-for="item in option2_1_1_1" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="精确放疗技术的选择" v-show="form2.ZH2_1==='a'">
                    <el-select v-model="form2.ZH2_1_1_2" placeholder="请选择">
                        <el-option v-for="item in option2_1_1_2" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="三、术后胃癌放疗技术/靶区定义/剂量记录" name="formGroup3">
            <el-form ref="form3" :model="form3" label-width="300px">
                <el-form-item label="是否有关于放疗总剂量的记录">
                    <el-radio-group v-model="form3.ZH3_1" placeholder="请选择">
                        <el-radio v-for="item in option3_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否有关于剂量分割方式的记录">
                    <el-radio-group v-model="form3.ZH3_2" placeholder="请选择">
                        <el-radio v-for="item in option3_2" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否明确记录肿瘤区（GTV）">
                    <el-radio-group v-model="form3.ZH3_3" placeholder="请选择">
                        <el-radio v-for="item in option3_3" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否有临床靶区（CTV）的记录">
                    <el-radio-group v-model="form3.ZH3_4" placeholder="请选择">
                        <el-radio v-for="item in option3_4" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否有计划靶区（PTV）的记录">
                    <el-radio-group v-model="form3.ZH3_5" placeholder="请选择">
                        <el-radio v-for="item in option3_5" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="常规二维放疗的放疗靶区范围是否明确记录了放疗野范围">
                    <el-radio-group v-model="form3.ZH3_6" placeholder="请选择">
                        <el-radio v-for="item in option3_6" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="四、胃癌化疗方案" name="formGroup4">
            <el-form ref="form4" :model="form4" label-width="300px">
                <el-form-item label="是否为临床或病理分期为M1的胃癌病例">
                    <el-radio-group v-model="form4.ZH4_1" placeholder="请选择">
                        <el-radio v-for="item in option4_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否为胃癌初次化疗" v-show="form4.ZH4_1==='a'">
                    <el-radio-group v-model="form4.ZH4_1_1_1" placeholder="请选择">
                        <el-radio v-for="item in option4_1_1_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="胃癌初次化疗采用方案" v-show="form4.ZH4_1==='a'&&form4.ZH4_1_1_1==='a'">
                    <el-checkbox-group v-model="form4.ZH4_1_1_1_1_1">
                        <el-checkbox v-for="item in option4_1_1_1_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="顺铂＋氟尿嘧啶类"
                    v-show="form4.ZH4_1==='a'&&form4.ZH4_1_1_1==='a'&&form4.ZH4_1_1_1_1_1.indexOf('顺铂＋氟尿嘧啶类')>-1">
                    <el-select v-model="form4.ZH4_1_1_1_1_1_1_1" placeholder="请选择">
                        <el-option v-for="item in option4_1_1_1_1_1_1_1" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="奥沙利铂＋氟尿嘧啶类"
                    v-show="form4.ZH4_1==='a'&&form4.ZH4_1_1_1==='a'&&form4.ZH4_1_1_1_1_1.indexOf('奥沙利铂＋氟尿嘧啶类')>-1">
                    <el-select v-model="form4.ZH4_1_1_1_1_1_2_1" placeholder="请选择">
                        <el-option v-for="item in option4_1_1_1_1_1_2_1" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="三药联合方案"
                    v-show="form4.ZH4_1==='a'&&form4.ZH4_1_1_1==='a'&&form4.ZH4_1_1_1_1_1.indexOf('三药联合方案')>-1">
                    <el-select v-model="form4.ZH4_1_1_1_1_1_3_1" placeholder="请选择">
                        <el-option v-for="item in option4_1_1_1_1_1_3_1" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="单药方案"
                    v-show="form4.ZH4_1==='a'&&form4.ZH4_1_1_1==='a'&&form4.ZH4_1_1_1_1_1.indexOf('单药方案')>-1">
                    <el-select v-model="form4.ZH4_1_1_1_1_1_4_1" placeholder="请选择">
                        <el-option v-for="item in option4_1_1_1_1_1_4_1" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="其他胃癌初次化疗采用方案"
                    v-show="form4.ZH4_1==='a'&&form4.ZH4_1_1_1==='a'&&form4.ZH4_1_1_1_1_1.indexOf('其他方案')>-1">
                    <el-input v-model="form4.ZH4_1_1_1_1_1_5_1"></el-input>
                </el-form-item>
                <el-form-item label="手术后是否使用靶向治疗药物" v-show="form4.ZH4_1==='a'">
                    <el-radio-group v-model="form4.ZH4_1_1_2" placeholder="请选择">
                        <el-radio v-for="item in option4_1_1_2" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="胃癌常用靶向治疗药物" v-show="form4.ZH4_1==='a'&&form4.ZH4_1_1_2==='a'">
                    <el-select v-model="form4.ZH4_1_1_2_1_1" placeholder="请选择">
                        <el-option v-for="item in option4_1_1_2_1_1" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="其他靶向治疗药物"
                    v-show="form4.ZH4_1==='a'&&form4.ZH4_1_1_2==='a'&&form4.ZH4_1_1_2_1_1==='d'">
                    <el-input v-model="form4.ZH4_1_1_2_1_1_4_1"></el-input>
                </el-form-item>
                <el-form-item label="手术后是否使用免疫治疗">
                    <el-radio-group v-model="form4.ZH4_2" placeholder="请选择">
                        <el-radio v-for="item in option4_2" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="五、抗肿瘤药物疗效评价" name="formGroup5">
            <el-form ref="form5" :model="form5" label-width="300px">
                <el-form-item label="抗肿瘤药物疗效的选择">
                    <el-select v-model="form5.ZH5_1" placeholder="请选择">
                        <el-option v-for="item in option5_1" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="目标病灶的评价" v-show="form5.ZH5_1=='a'||form5.ZH5_1=='b'||form5.ZH5_1=='c'">
                    <el-select v-model="form5.ZH5_2" placeholder="请选择">
                        <el-option v-for="item in option5_2" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="非目标病灶的评价" v-show="form5.ZH5_1=='a'||form5.ZH5_1=='b'||form5.ZH5_1=='c'">
                    <el-select v-model="form5.ZH5_3" placeholder="请选择">
                        <el-option v-for="item in option5_3" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="新病灶" v-show="form5.ZH5_1=='a'||form5.ZH5_1=='b'||form5.ZH5_1=='c'">
                    <el-select v-model="form5.ZH5_4" placeholder="请选择">
                        <el-option v-for="item in option5_4" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="总疗效" v-show="form5.ZH5_1=='a'||form5.ZH5_1=='b'||form5.ZH5_1=='c'">
                    <el-select v-model="form5.ZH5_5" placeholder="请选择">
                        <el-option v-for="item in option5_5" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="免疫治疗(iRECIST)--靶病灶" v-show="form5.ZH5_1=='a'||form5.ZH5_1=='b'||form5.ZH5_1=='c'">
                    <el-select v-model="form5.ZH5_6" placeholder="请选择">
                        <el-option v-for="item in option5_6" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="免疫治疗(iRECIST)--非靶病灶" v-show="form5.ZH5_1=='a'||form5.ZH5_1=='b'||form5.ZH5_1=='c'">
                    <el-select v-model="form5.ZH5_7" placeholder="请选择">
                        <el-option v-for="item in option5_7" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="六、抗肿瘤药不良反应评价" name="formGroup6">
            <el-form ref="form6" :model="form6" label-width="300px">
                <el-form-item label="是否使用了抗癌药的药物">
                    <el-radio-group v-model="form6.ZH6_1" placeholder="请选择">
                        <el-radio v-for="item in option6_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="有无抗癌药的药物不良反应" v-show="form6.ZH6_1==='a'">
                    <el-radio-group v-model="form6.ZH6_1_1_1" placeholder="请选择">
                        <el-radio v-for="item in option6_1_1_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="抗癌药的药物不良反应" v-show="form6.ZH6_1==='a'&&form6.ZH6_1_1_1==='a'">
                    <el-checkbox-group v-model="form6.ZH6_1_1_1_1_1">
                        <el-checkbox v-for="item in option6_1_1_1_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="其它抗癌药的药物不良反应"
                    v-show="form6.ZH6_1==='a'&&form6.ZH6_1_1_1==='a'&&form6.ZH6_1_1_1_1_1.indexOf('其他')>-1">
                    <el-input v-model="form6.ZH6_1_1_1_1_1_13_1"></el-input>
                </el-form-item>
                <el-form-item label="不良反应定级" v-show="form6.ZH6_1==='a'&&form6.ZH6_1_1_1==='a'">
                    <el-select v-model="form6.ZH6_1_1_1_1_2" placeholder="请选择">
                        <el-option v-for="item in option6_1_1_1_1_2" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="七、住院期间为患者提供术前、术后健康教育与出院时提供教育告知五要素情况" name="formGroup7">
            <el-form ref="form7" :model="form7" label-width="300px">
                <el-form-item label="胃癌患者履行出院知情告知">
                    <el-radio-group v-model="form7.ZH7_1" placeholder="请选择">
                        <el-radio v-for="item in option7_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="交与患者“出院小结”的副本告知患者出院时风险因素" v-show="form7.ZH7_1==='a'">
                    <el-checkbox-group v-model="form7.ZH7_1_1_1">
                        <el-checkbox v-for="item in option7_1_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="告知出院时的病情风险情况" v-show="form7.ZH7_1==='a'">
                    <el-checkbox-group v-model="form7.ZH7_1_1_2">
                        <el-checkbox v-for="item in option7_1_1_2" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="出院后合理的进餐制度和正确的进餐方式预防合并症" v-show="form7.ZH7_1==='a'">
                    <el-checkbox-group v-model="form7.ZH7_1_1_3">
                        <el-checkbox v-for="item in option7_1_1_3" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="告知胃癌术后常见并发症的应对措施" v-show="form7.ZH7_1==='a'">
                    <el-checkbox-group v-model="form7.ZH7_1_1_4">
                        <el-checkbox v-for="item in option7_1_1_4" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="出院时教育与随访" v-show="form7.ZH7_1==='a'">
                    <el-checkbox-group v-model="form7.ZH7_1_1_5">
                        <el-checkbox v-for="item in option7_1_1_5" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="八、离院方式" name="formGroup8">
            <el-form ref="form8" :model="form8" label-width="300px">
                <el-form-item label="住院天数">
                    <el-input v-model="form8.ZH8_1"></el-input>
                </el-form-item>
                <el-form-item label="术后住院天数">
                    <el-input v-model="form8.ZH8_2"></el-input>
                </el-form-item>
                <el-form-item label="离院方式选择">
                    <el-select v-model="form8.ZH8_3" placeholder="请选择">
                        <el-option v-for="item in option8_3" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="非医嘱离院可能涉及因素" v-show="form8.ZH8_3==='d'">
                    <el-checkbox-group v-model="form8.ZH8_3_4_1">
                        <el-checkbox v-for="item in option8_3_4_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="其他非医嘱离院可能涉及因素" v-show="form8.ZH8_3==='d'&&form8.ZH8_3_4_1==='g'">
                    <el-input v-model="form8.ZH8_3_4_1_7_1"></el-input>
                </el-form-item>
                <el-form-item label="死亡可能涉及因素" v-show="form8.ZH8_3==='e'">
                    <el-select v-model="form8.ZH8_3_5_1" placeholder="请选择">
                        <el-option v-for="item in option8_3_5_1" :key="item.value" :label="item.label"
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
        <el-collapse-item title="九、住院费用" name="formGroup9">
            <el-form ref="form9" :model="form9" label-width="300px">
                <el-form-item label="住院总费用">
                    <el-input v-model="form9.ZH9_1"></el-input>
                </el-form-item>
                <el-form-item label="手术治疗费">
                    <el-input v-model="form9.ZH9_2"></el-input>
                </el-form-item>
                <el-form-item label="麻醉费">
                    <el-input v-model="form9.ZH9_3"></el-input>
                </el-form-item>
                <el-form-item label="手术费">
                    <el-input v-model="form9.ZH9_4"></el-input>
                </el-form-item>
                <el-form-item label="药品费">
                    <el-input v-model="form9.ZH9_5"></el-input>
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
                    ZH2_1: '',
                    ZH2_1_1_1: '',
                    ZH2_1_1_2: '',
                },
                form3: {
                    ZH3_1: '',
                    ZH3_2: '',
                    ZH3_3: '',
                    ZH3_4: '',
                    ZH3_5: '',
                    ZH3_6: '',
                },
                form4: {
                    ZH4_1: '',
                    ZH4_1_1_1: '',
                    ZH4_1_1_1_1_1: [],
                    ZH4_1_1_1_1_1_1_1: '',
                    ZH4_1_1_1_1_1_2_1: '',
                    ZH4_1_1_1_1_1_3_1: '',
                    ZH4_1_1_1_1_1_4_1: '',
                    ZH4_1_1_1_1_1_5_1: '',
                    ZH4_1_1_2: '',
                    ZH4_1_1_2_1_1: '',
                    ZH4_1_1_2_1_1_4_1: '',
                    ZH4_2: '',
                },
                form5: {
                    ZH5_1: '',
                    ZH5_2: '',
                    ZH5_3: '',
                    ZH5_4: '',
                    ZH5_5: '',
                    ZH5_6: '',
                    ZH5_7: '',
                },
                form6: {
                    ZH6_1: '',
                    ZH6_1_1_1: '',
                    ZH6_1_1_1_1_1: [],
                    ZH6_1_1_1_1_1_13_1: '',
                    ZH6_1_1_1_1_2: '',
                },
                form7: {
                    ZH7_1: '',
                    ZH7_1_1_1: [],
                    ZH7_1_1_2: [],
                    ZH7_1_1_3: [],
                    ZH7_1_1_4: [],
                    ZH7_1_1_5: [],
                },
                form8: {
                    ZH8_1: '',
                    ZH8_2: '',
                    ZH8_3: '',
                    ZH8_3_4_1: [],
                    ZH8_3_4_1_7_1: '',
                    ZH8_3_5_1: '',
                },
                form9: {
                    ZH9_1: '',
                    ZH9_2: '',
                    ZH9_3: '',
                    ZH9_4: '',
                    ZH9_5: '',
                },
                option2_1: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option2_1_1_1: [{
                        value: 'a',
                        label: '无远处转移'
                    },
                    {
                        value: 'b',
                        label: '非根治性切除，有肿瘤残存，切缘阳性'
                    },
                    {
                        value: 'c',
                        label: '小于D2手术∶术后病理提示T3、T4和（或）淋巴结转移'
                    },
                    {
                        value: 'd',
                        label: 'D2手术∶ 术后病理提示淋巴结转移'
                    },
                    {
                        value: 'e',
                        label: '无法确定或无记录'
                    },
                ],
                option2_1_1_2: [{
                        value: 'a',
                        label: '三维适形放疗（3D-CRT）'
                    },
                    {
                        value: 'b',
                        label: '容积旋转调强放疗（VMAT）'
                    },
                    {
                        value: 'c',
                        label: '立体定向放疗（SBRT）'
                    },
                    {
                        value: 'd',
                        label: '螺旋断层调强放疗（TOMO）'
                    },
                    {
                        value: 'e',
                        label: '无法确定或无记录'
                    },
                ],
                option3_1: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                    {
                        value: 'c',
                        label: '不确定'
                    },
                ],
                option3_2: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                    {
                        value: 'c',
                        label: '不确定'
                    },
                ],
                option3_3: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                    {
                        value: 'c',
                        label: '不确定'
                    },
                ],
                option3_4: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                    {
                        value: 'c',
                        label: '不确定'
                    },
                ],
                option3_5: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                    {
                        value: 'c',
                        label: '不确定'
                    },
                ],
                option3_6: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                    {
                        value: 'c',
                        label: '不确定'
                    },
                ],
                option4_1: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option4_1_1_1: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option4_1_1_1_1_1: [{
                        value: 'a',
                        label: '顺铂＋氟尿嘧啶类'
                    },
                    {
                        value: 'b',
                        label: '奥沙利铂＋氟尿嘧啶类'
                    },
                    {
                        value: 'c',
                        label: '三药联合方案'
                    },
                    {
                        value: 'd',
                        label: '单药方案'
                    },
                    {
                        value: 'e',
                        label: '其他方案'
                    },
                ],
                option4_1_1_1_1_1_1_1: [{
                        value: 'a',
                        label: 'PF'
                    },
                    {
                        value: 'b',
                        label: 'XP'
                    },
                    {
                        value: 'c',
                        label: 'SP'
                    },
                ],
                option4_1_1_1_1_1_2_1: [{
                        value: 'a',
                        label: '奥沙利铂 ＋ 5-FU/CF'
                    },
                    {
                        value: 'b',
                        label: 'XELOX'
                    },
                    {
                        value: 'c',
                        label: 'SOX'
                    },
                ],
                option4_1_1_1_1_1_3_1: [{
                        value: 'a',
                        label: '奥沙利铂 ＋ 5-FU/CF'
                    },
                    {
                        value: 'b',
                        label: 'XELOX'
                    },
                    {
                        value: 'c',
                        label: 'SOX'
                    },
                ],
                option4_1_1_1_1_1_4_1: [{
                        value: 'a',
                        label: '替吉奥'
                    },
                    {
                        value: 'b',
                        label: '多西他赛单药'
                    },
                    {
                        value: 'c',
                        label: '紫杉醇单药'
                    },
                    {
                        value: 'd',
                        label: '伊立替康单药'
                    },
                ],
                option4_1_1_2: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option4_1_1_2_1_1: [{
                        value: 'a',
                        label: '曲妥珠单抗（+化疗）'
                    },
                    {
                        value: 'b',
                        label: '阿帕替尼'
                    },
                    {
                        value: 'c',
                        label: '雷莫芦单抗（+紫杉醇）'
                    },
                    {
                        value: 'd',
                        label: '其他方案'
                    },
                ],
                option4_2: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option5_1: [{
                        value: 'a',
                        label: '首次PD时为iUPD'
                    },
                    {
                        value: 'b',
                        label: '再次评效时再确定是否为iCPD'
                    },
                    {
                        value: 'c',
                        label: '其他'
                    },
                    {
                        value: 'd',
                        label: '无法确定或无记录'
                    },
                ],
                option5_2: [{
                        value: 'a',
                        label: '完全缓解（CR）∶ 所有靶病灶消失，全部病理淋巴结（包括靶结节和非靶结节）短直径必须减少至<10 mm'
                    },
                    {
                        value: 'b',
                        label: '部分缓解（PR）∶靶病灶直径之和比基线水平减少至少30%'
                    },
                    {
                        value: 'c',
                        label: '病变进展（PD）∶以所有测量的靶病灶直径之和的最小值为参照，直径和相对增加至少20%（如果基线测量值最小就以基线值为参照）;除此之外，必须满足直径和的绝对值增加至少5mm（出现一个或多个新病灶也视为疾病进展）'
                    },
                    {
                        value: 'd',
                        label: '病变稳定（SD）∶靶病灶减小的程度没达到PR，增加的程度也没达到PD水平，介于两者之间，可以直径之和的最小值作为参考'
                    },
                ],
                option5_3: [{
                        value: 'a',
                        label: '完全缓解（CR）。所有非靶病灶消失和肿瘤标志物恢复正常'
                    },
                    {
                        value: 'b',
                        label: '未完全缓解/稳定（IR/SD）。存在一个或多个非靶病灶和（或）肿瘤标志物持续高于正常值'
                    },
                    {
                        value: 'c',
                        label: '病变进展（PD）。出现一个或多个新病灶和（或）已有的非靶病灶明确进展'
                    },
                ],
                option5_4: [{
                        value: 'a',
                        label: '无'
                    },
                    {
                        value: 'b',
                        label: '有'
                    },
                    {
                        value: 'c',
                        label: '有/无'
                    },
                ],
                option5_5: [{
                        value: 'a',
                        label: 'CR（完全缓解）'
                    },
                    {
                        value: 'b',
                        label: 'PR（部分缓解）'
                    },
                    {
                        value: 'c',
                        label: 'PD（病情进展）'
                    },
                    {
                        value: 'd',
                        label: 'SD（病情稳定）'
                    },
                    {
                        value: 'e',
                        label: '死于肿瘤'
                    },
                    {
                        value: 'f',
                        label: '死于毒性'
                    },
                    {
                        value: 'g',
                        label: '死于其它肿瘤'
                    },
                    {
                        value: 'h',
                        label: '不明（没有足够的资料评估）'
                    },
                    {
                        value: 'i',
                        label: '无法确定或无记录'
                    },
                ],
                option5_6: [{
                        value: 'a',
                        label: 'CR（完全缓解）：靶病灶消失，无新病灶，且肿瘤标志物正常，至少维持四周'
                    },
                    {
                        value: 'b',
                        label: 'PR（部分缓解）：靶病灶长径总和缩小≥30%，至少维持四周'
                    },
                    {
                        value: 'c',
                        label: 'PD（病情进展）：靶病灶长径总和增加≥20%，或出现新病灶'
                    },
                    {
                        value: 'd',
                        label: 'SD（病情稳定）：靶病灶长径总和有缩小但未达PR或有增加但未达PD'
                    },
                    {
                        value: 'e',
                        label: '无法确定或无记录'
                    },
                ],
                option5_7: [{
                        value: 'a',
                        label: 'CR（完全缓解）：非靶病灶消失，且肿瘤标志物正常，至少维持四周'
                    },
                    {
                        value: 'b',
                        label: 'PR（部分缓解）：非靶病灶减少，仍有一个或多个病灶存在，肿瘤标志物正常'
                    },
                    {
                        value: 'c',
                        label: 'PD（病情进展）：出现有一个或多个病灶新病灶'
                    },
                    {
                        value: 'd',
                        label: 'SD（病情稳定）：非靶病灶减少，肿瘤标志物不正常'
                    },
                    {
                        value: 'e',
                        label: '无法确定或无记录'
                    },
                ],
                option6_1: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                    {
                        value: 'c',
                        label: '不确定'
                    },
                ],
                option6_1_1_1: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option6_1_1_1_1_1: [{
                        value: 'a',
                        label: '血液毒性(白细胞减少、中性粒细胞减少、红细胞减少、血小板减少)'
                    },
                    {
                        value: 'b',
                        label: '消化道反应(恶心、呕吐、食欲不振、腹泻、便秘、口腔内膜炎)'
                    },
                    {
                        value: 'c',
                        label: '心毒性(心肌损害、心功能不全、心律不齐)'
                    },
                    {
                        value: 'd',
                        label: '肺毒性(间质性肺炎、肺纤维化)'
                    },
                    {
                        value: 'e',
                        label: '肝毒性(肝功能障碍)'
                    },
                    {
                        value: 'f',
                        label: '肾毒性(肾功能障碍、肾小管损害)'
                    },
                    {
                        value: 'g',
                        label: '膀胱毒性(出血性膀胱炎)'
                    },
                    {
                        value: 'h',
                        label: '神经毒性(末梢神经障碍、中枢神经障碍)'
                    },
                    {
                        value: 'i',
                        label: '皮肤毒性(皮肤角化、肥厚、色素沉着、皮疹、指甲改变、毛发脱落、渗出性皮肤障碍)'
                    },
                    {
                        value: 'j',
                        label: '性腺毒性(性功能不全)'
                    },
                    {
                        value: 'k',
                        label: '过敏反应(呼吸困难、血压降低、血管性浮肿)'
                    },
                    {
                        value: 'l',
                        label: '继发癌'
                    },
                    {
                        value: 'm',
                        label: '其他'
                    },
                    {
                        value: 'b',
                        label: '无法确定或无记录'
                    },
                ],
                option6_1_1_1_1_2: [{
                        value: 'a',
                        label: '一级：轻度/轻度毒性'
                    },
                    {
                        value: 'b',
                        label: '二级：中度/中度毒性'
                    },
                    {
                        value: 'c',
                        label: '三级：重度/重度毒性'
                    },
                    {
                        value: 'd',
                        label: '四级：威胁生命或不能活动的毒性'
                    },
                    {
                        value: 'e',
                        label: '五级：死于毒性（具有因果关系）'
                    },
                ],
                option7_1: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option7_1_1_1: [{
                        value: 'a',
                        label: '交与患者的出院小结或记录中有告知胃癌患者手术后病理检查报告结果和全身辅助治疗的选择意见'
                    },
                    {
                        value: 'b',
                        label: '将出院医嘱及告知内容按规范的要求，通过短信或其他安全的方式发送至患者留置的信息平台(手机或网络邮箱)'
                    },
                    {
                        value: 'c',
                        label: '出院时若患者认知障碍（如反应迟钝，迷糊）时则向其亲属交与患者“出院小结”的副本，并告知患者出院时风险因素'
                    },
                    {
                        value: 'd',
                        label: '无法确定或无记录'
                    },
                ],
                option7_1_1_2: [{
                        value: 'a',
                        label: '手术恢复是一个较为长期的过程，出院后如遇任何明显不适症状，请及时回院就诊或与主管医生联系'
                    },
                    {
                        value: 'b',
                        label: '坚持按出院时医生要求完成术后化疗及放疗。密切关注化疗期间的各种反应，放疗注意保护照射区皮肤干燥，避免摩擦、热敷、理疗、涂刺激性药物和肥皂水擦洗'
                    },
                    {
                        value: 'c',
                        label: '胃被部分切除和全切除后，并不影响进食，因为肠完全可以代替胃的功能。但胃在被大部分切除后，仍然有可能得残胃癌,有相关症状者应及早手术'
                    },
                    {
                        value: 'd',
                        label: '无法确定或无记录'
                    },
                ],
                option7_1_1_3: [{
                        value: 'a',
                        label: '少食多餐：是胃癌切除后病人的重要饮食制度，每天进餐6—7次，定时定量进餐可以使胃内不空不用，也可以逐步适应残胃的消化功能'
                    },
                    {
                        value: 'b',
                        label: '干稀分食：为使食物在胃内停留时间延长，进餐时只吃较干食物，不喝水，可以在进餐30分钟以后喝水，从而避免食物被快速冲入小肠，并能缓慢通过小肠，并促进食物的进一步吸收'
                    },
                    {
                        value: 'c',
                        label: '限制碳水化合物摄入，预防倾倒综合症'
                    },
                    {
                        value: 'd',
                        label: '无法确定或无记录'
                    },
                ],
                option7_1_1_4: [{
                        value: 'a',
                        label: '倾倒综合症：由于幽门对胃对食物的控制能力丧失，进食大量食物后骤然进入小肠，使病人感到上腹饱满，不适，恶心，呕吐，头晕，乏力，出汗，心悸，衰弱，血压稍高，面色苍白，一般休息10—20分钟可以缓解'
                    },
                    {
                        value: 'b',
                        label: '低血糖：由于饭后葡萄糖在小肠内吸收过快，造成暂时性血糖升高，刺激胰岛分泌增加，继而发生出血糖过低。病人表现心悸、头晕，出冷汗等症状，多发生在进食后2—3小时，稍微进食或喝些葡萄糖水可以缓解症状'
                    },
                    {
                        value: 'c',
                        label: '体重下降：由于胃内容量变小后影响胃的纳食和消化功能，进食方式不当，可以造成营养素和热量不足，使病人的体重下降'
                    },
                    {
                        value: 'd',
                        label: '贫血：多见于缺铁性贫血，由于胃液分泌减少和肠液返流，使胃酸明显减少，直接影响到口服铁的吸收，造成贫血'
                    },
                    {
                        value: 'e',
                        label: '无法确定或无记录'
                    },
                ],
                option7_1_1_5: [{
                        value: 'a',
                        label: '术后2周的时间回院取病理结果并与主治医生商定进一步治疗方案'
                    },
                    {
                        value: 'b',
                        label: '若病情需要且身体条件允许，宜于术后1个月开始术后放、化疗'
                    },
                    {
                        value: 'c',
                        label: '术后2年内每3个月复查一次，3-5年内每6个月复查一次，5年后每1年复查一次，化疗患者定期检查血常规'
                    },
                    {
                        value: 'd',
                        label: '无法确定或无记录'
                    },
                ],
                option8_3: [{
                        value: 'a',
                        label: '医嘱离院'
                    },
                    {
                        value: 'b',
                        label: '医嘱转院'
                    },
                    {
                        value: 'c',
                        label: '医嘱转社区卫生服务机构/乡镇卫生院'
                    },
                    {
                        value: 'd',
                        label: '非医嘱离院'
                    },
                    {
                        value: 'e',
                        label: '死亡'
                    },
                    {
                        value: 'f',
                        label: '其他方式离院'
                    },
                ],
                option8_3_4_1: [{
                        value: 'a',
                        label: '经济原因'
                    },
                    {
                        value: 'b',
                        label: '医疗保险付费方式原因'
                    },
                    {
                        value: 'c',
                        label: '患者/家人要求原因'
                    },
                    {
                        value: 'd',
                        label: '医院技术原因'
                    },
                    {
                        value: 'e',
                        label: '医院环境原因'
                    },
                    {
                        value: 'f',
                        label: '媒体资讯原因'
                    },
                    {
                        value: 'g',
                        label: '其他'
                    },
                    {
                        value: 'h',
                        label: '无法确定或无记录'
                    },
                ],
                option8_3_5_1: [{
                        value: 'a',
                        label: '死亡与胃癌有直接关系'
                    },
                    {
                        value: 'b',
                        label: '死亡与胃癌有间接关系'
                    },
                    {
                        value: 'c',
                        label: '死亡与胃癌无关，即死于不相关的疾病，如癌症或其他意外'
                    },
                    {
                        value: 'd',
                        label: '死亡，不知是否与胃癌相关'
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