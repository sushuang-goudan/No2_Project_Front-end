<template>
    <div>
        <el-collapse-item title="二、手术前评估和治疗前临床TNM分期" name="formGroup2">
            <el-form ref="form2" :model="form2" label-width="300px">
                <el-form-item label="临床TNM分期前主要检查项目">
                    <el-checkbox-group v-model="form2.NJ2_1">
                        <el-checkbox v-for="item in option2_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="治疗前是否完成胃癌CT分期">
                    <el-radio-group v-model="form2.NJ2_2" placeholder="请选择">
                        <el-radio v-for="item in option2_2" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="CT分期病理学定义" v-show="form2.NJ2_2==='a'">
                    <el-select v-model="form2.NJ2_2_1_1" placeholder="请选择">
                        <el-option v-for="item in option2_2_1_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="治疗前是否完成胃癌超声内镜（EUS）分期">
                    <el-radio-group v-model="form2.NJ2_3" placeholder="请选择">
                        <el-radio v-for="item in option2_3" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="UT分期病理学定义" v-show="form2.NJ2_3==='a'">
                    <el-select v-model="form2.NJ2_3_1_1" placeholder="请选择">
                        <el-option v-for="item in option2_3_1_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="治疗前是否完成临床TNM分期">
                    <el-radio-group v-model="form2.NJ2_4" placeholder="请选择">
                        <el-radio v-for="item in option2_4" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="原发肿瘤（T）分期" v-show="form2.NJ2_4==='a'">
                    <el-select v-model="form2.NJ2_4_1_1" placeholder="请选择">
                        <el-option v-for="item in option2_4_1_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="区域淋巴结（N）分期" v-show="form2.NJ2_4==='a'">
                    <el-select v-model="form2.NJ2_4_1_2" placeholder="请选择">
                        <el-option v-for="item in option2_4_1_2" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="远处转移（M）分期" v-show="form2.NJ2_4==='a'">
                    <el-select v-model="form2.NJ2_4_1_3" placeholder="请选择">
                        <el-option v-for="item in option2_4_1_3" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="胃癌治疗前cTNM分期结论" v-show="form2.NJ2_4==='a'">
                    <el-select v-model="form2.NJ2_4_1_4" placeholder="请选择">
                        <el-option v-for="item in option2_4_1_4" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否是治疗前接受过2个或以上治疗科室会诊的患者">
                    <el-radio-group v-model="form2.NJ2_5" placeholder="请选择">
                        <el-radio v-for="item in option2_5" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="患者术前心肺功能等级">
                    <el-select v-model="form2.NJ2_6" placeholder="请选择">
                        <el-option v-for="item in option2_6" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="患者是否做过术前血栓风险评估">
                    <el-radio-group v-model="form2.NJ2_7" placeholder="请选择">
                        <el-radio v-for="item in option2_7" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="血栓风险评估结果">
                    <el-select v-model="form2.NJ2_7_1_1" placeholder="请选择">
                        <el-option v-for="item in option2_7_1_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否相应接受过抗凝治疗">
                    <el-radio-group v-model="form2.NJ2_7_1_2" placeholder="请选择">
                        <el-radio v-for="item in option2_7_1_2" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="抗凝治疗方案">
                    <el-input v-model="form2.NJ2_7_1_2_1_1"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit(1)" >保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="三、早期胃癌内镜治疗情况" name="formGroup3">
            <el-form ref="form3" :model="form3" label-width="300px">
                <el-form-item label="是否是0-IA期胃癌">
                    <el-radio-group v-model="form3.NJ3_1" placeholder="请选择">
                        <el-radio v-for="item in option3_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否选择内镜下治疗" v-show="form3.NJ3_1==='a'">
                    <el-radio-group v-model="form3.NJ3_1_1_1" placeholder="请选择">
                        <el-radio v-for="item in option3_1_1_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否有术前评估" v-show="form3.NJ3_1==='a'&&form3.NJ3_1_1_1==='a'">
                    <el-radio-group v-model="form3.NJ3_1_1_1_1_1" placeholder="请选择">
                        <el-radio v-for="item in option3_1_1_1_1_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术前评估内容"
                    v-show="form3.NJ3_1==='a'&&form3.NJ3_1_1_1==='a'&&form3.NJ3_1_1_1_1_1==='a'">
                    <el-checkbox-group v-model="form3.NJ3_1_1_1_1_1_1_1">
                        <el-checkbox v-for="item in option3_1_1_1_1_1_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="治疗的适应证" v-show="form3.NJ3_1==='a'">
                    <el-select v-model="form3.NJ3_1_1_2" placeholder="请选择">
                        <el-option v-for="item in option3_1_1_2" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否有内镜治疗禁忌证" v-show="form3.NJ3_1==='a'">
                    <el-radio-group v-model="form3.NJ3_1_1_3" placeholder="请选择">
                        <el-radio v-for="item in option3_1_1_3" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="治疗禁忌证" v-show="form3.NJ3_1==='a'&&form3.NJ3_1_1_3==='a'">
                    <el-select v-model="form3.NJ3_1_1_3_1_1" placeholder="请选择">
                        <el-option v-for="item in option3_1_1_3_1_1" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="其他治疗禁忌证"
                    v-show="form3.NJ3_1==='a'&&form3.NJ3_1_1_3==='a'&&form3.NJ3_1_1_3_1_1==='d'">
                    <el-input v-model="form3.NJ3_1_1_3_1_1_4_1"></el-input>
                </el-form-item>
                <el-form-item label="术式选择" v-show="form3.NJ3_1==='a'">
                    <el-select v-model="form3.NJ3_1_1_4" placeholder="请选择">
                        <el-option v-for="item in option3_1_1_4" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit(2)">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="四、围术期抗菌药物使用情况" name="formGroup4">
            <el-form ref="form4" :model="form4" label-width="300px">
                <el-form-item label="是否使用预防性抗菌药物">
                    <el-radio-group v-model="form4.NJ4_1" placeholder="请选择">
                        <el-radio v-for="item in option4_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="预防性抗菌药物选择" v-show="form4.NJ4_1==='a'">
                    <el-checkbox-group v-model="form4.NJ4_1_1_1">
                        <el-checkbox v-for="item in option4_1_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="使用首剂抗菌药物起始时间">
                    <el-date-picker v-model="form4.NJ4_2" type="date" placeholder="请选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="手术时间是否≥3小时">
                    <el-radio-group v-model="form4.NJ4_3" placeholder="请选择">
                        <el-radio v-for="item in option4_3" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="手术时间≥3小时情况下，是否术中追加抗菌药物" v-show="form4.NJ4_3==='a'">
                    <el-radio-group v-model="form4.NJ4_3_1_1" placeholder="请选择">
                        <el-radio v-for="item in option4_3_1_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术中出血量是否≥1500ml">
                    <el-radio-group v-model="form4.NJ4_4" placeholder="请选择">
                        <el-radio v-for="item in option2_2" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术中出血量≥1500ml情况下，是否术中追加抗菌药物" v-show="form4.NJ4_4==='a'">
                    <el-radio-group v-model="form4.NJ4_4_1_1" placeholder="请选择">
                        <el-radio v-for="item in option4_4_1_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术后抗菌药物停止使用时间">
                    <el-date-picker v-model="form4.NJ4_5" type="date" placeholder="请选择日期"></el-date-picker>
                </el-form-item>
                <el-form-item label="使用抗菌药物时间使用时间分层">
                    <el-input v-model="form4.NJ4_6"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit(3)">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="五、术后并发症与再手术情况" name="formGroup5">
            <el-form ref="form5" :model="form5" label-width="300px">
                <el-form-item label="内镜治疗术后并发症">
                    <el-radio-group v-model="form5.NJ5_1" placeholder="请选择">
                        <el-radio v-for="item in option5_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="并发症" v-show="form5.NJ5_1==='a'">
                    <el-checkbox-group v-model="form5.NJ5_1_1_1">
                        <el-checkbox v-for="item in option5_1_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="术后并发症处理" v-show="form5.NJ5_1==='a'">
                    <el-select v-model="form5.NJ5_1_1_2" placeholder="请选择">
                        <el-option v-for="item in option5_1_1_2" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit(4)">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="六、营养支持治疗情况" name="formGroup6">
            <el-form ref="form6" :model="form6" label-width="300px">
                <el-form-item label="术前是否进行营养评估">
                    <el-checkbox-group v-model="form6.NJ6_1">
                        <el-checkbox v-for="item in option6_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="NRS-2002评估分值" v-show="form6.NJ6_1.indexOf('使用NRS-2002进行营养评估')>-1">
                    <el-input v-model="form6.NJ6_1_1_1"></el-input>
                </el-form-item>
                <el-form-item label="PG-SGA评估分级" v-show="form6.NJ6_1.indexOf('使用PG-SGA进行营养评估')>-1">
                    <el-select v-model="form6.NJ6_1_2_1" placeholder="请选择">
                        <el-option v-for="item in option6_1_2_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="MNA评估分值" v-show="form6.NJ6_1.indexOf('使用MNA进行营养评估')>-1">
                    <el-input v-model="form6.NJ6_1_3_1"></el-input>
                </el-form-item>
                <el-form-item label="术前是否给予营养支持">
                    <el-radio-group v-model="form6.NJ6_2" placeholder="请选择">
                        <el-radio v-for="item in option6_2" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术前给予营养支持符合原则规范" v-show="form6.NJ6_2==='a'">
                    <el-checkbox-group v-model="form6.NJ6_2_1_1">
                        <el-checkbox v-for="item in option6_2_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="其他术前给予营养支持符合原则规范" v-show="form6.NJ6_2==='a'&&form6.NJ6_2_1_1.indexOf('其他')>-1">
                    <el-input v-model="form6.NJ6_2_1_1_5_1"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit(5)">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="七、住院期间为患者提供术前、术后健康教育与出院时提供教育告知五要素情况" name="formGroup7">
            <el-form ref="form7" :model="form7" label-width="300px">
                <el-form-item label="胃癌患者履行出院知情告知">
                    <el-radio-group v-model="form7.NJ7_1" placeholder="请选择">
                        <el-radio v-for="item in option7_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="交与患者“出院小结”的副本告知患者出院时风险因素" v-show="form7.NJ7_1==='a'">
                    <el-checkbox-group v-model="form7.NJ7_1_1_1">
                        <el-checkbox v-for="item in option7_1_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="告知出院时的病情风险情况" v-show="form7.NJ7_1==='a'">
                    <el-checkbox-group v-model="form7.NJ7_1_1_2">
                        <el-checkbox v-for="item in option7_1_1_2" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="出院后合理的进餐制度和正确的进餐方式预防合并症" v-show="form7.NJ7_1==='a'">
                    <el-checkbox-group v-model="form7.NJ7_1_1_3">
                        <el-checkbox v-for="item in option7_1_1_3" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="告知胃癌术后常见并发症的应对措施" v-show="form7.NJ7_1==='a'">
                    <el-checkbox-group v-model="form7.NJ7_1_1_4">
                        <el-checkbox v-for="item in option7_1_1_4" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="出院时教育与随访" v-show="form7.NJ7_1==='a'">
                    <el-checkbox-group v-model="form7.NJ7_1_1_5">
                        <el-checkbox v-for="item in option7_1_1_5" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit(6)">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="八、离院方式" name="formGroup8">
            <el-form ref="form8" :model="form8" label-width="300px">
                <el-form-item label="住院天数">
                    <el-input v-model="form8.NJ8_1"></el-input>
                </el-form-item>
                <el-form-item label="术后住院天数">
                    <el-input v-model="form8.NJ8_2"></el-input>
                </el-form-item>
                <el-form-item label="离院方式选择">
                    <el-select v-model="form8.NJ8_3" placeholder="请选择">
                        <el-option v-for="item in option8_3" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="非医嘱离院可能涉及因素" v-show="form8.NJ8_3==='d'">
                    <el-checkbox-group v-model="form8.NJ8_3_4_1">
                        <el-checkbox v-for="item in option8_3_4_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="其他非医嘱离院可能涉及因素" v-show="form8.NJ8_3==='d'&&form8.NJ8_3_4_1==='g'">
                    <el-input v-model="form8.NJ8_3_4_1_7_1"></el-input>
                </el-form-item>
                <el-form-item label="死亡可能涉及因素" v-show="form8.NJ8_3==='e'">
                    <el-select v-model="form8.NJ8_3_5_1" placeholder="请选择">
                        <el-option v-for="item in option8_3_5_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit(7)">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="九、住院费用" name="formGroup9">
            <el-form ref="form9" :model="form9" label-width="300px">
                <el-form-item label="住院总费用">
                    <el-input v-model="form9.NJ9_1"></el-input>
                </el-form-item>
                <el-form-item label="手术治疗费">
                    <el-input v-model="form9.NJ9_2"></el-input>
                </el-form-item>
                <el-form-item label="麻醉费">
                    <el-input v-model="form9.NJ9_3"></el-input>
                </el-form-item>
                <el-form-item label="手术费">
                    <el-input v-model="form9.NJ9_4"></el-input>
                </el-form-item>
                <el-form-item label="药品费">
                    <el-input v-model="form9.NJ9_5"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit(8)">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
    </div>
</template>

<script>
    export default {
        name:'NeiJing',
        data: function () {
            return {
                form2: {
                    NJ2_1: [],
                    NJ2_2: '',
                    NJ2_2_1_1: '',
                    NJ2_3: '',
                    NJ2_3_1_1: '',
                    NJ2_4: '',
                    NJ2_4_1_1: '',
                    NJ2_4_1_2: '',
                    NJ2_4_1_3: '',
                    NJ2_4_1_4: '',
                    NJ2_5: '',
                    NJ2_6: '',
                    NJ2_7: '',
                    NJ2_7_1_1: '',
                    NJ2_7_1_2: '',
                    NJ2_7_1_2_1_1: '',
                },
                form3: {
                    NJ3_1: '',
                    NJ3_1_1_1: '',
                    NJ3_1_1_1_1_1: '',
                    NJ3_1_1_1_1_1_1_1: [],
                    NJ3_1_1_2: '',
                    NJ3_1_1_3: '',
                    NJ3_1_1_3_1_1: '',
                    NJ3_1_1_3_1_1_4_1: '',
                    NJ3_1_1_4: '',
                },
                form4: {
                    NJ4_1: '',
                    NJ4_1_1_1: [],
                    NJ4_2: '',
                    NJ4_3: '',
                    NJ4_3_1_1: '',
                    NJ4_4: '',
                    NJ4_4_1_1: '',
                    NJ4_5: '',
                    NJ4_6: '',
                },
                form5: {
                    NJ5_1: '',
                    NJ5_1_1_1: [],
                    NJ5_1_1_2: '',
                },
                form6: {
                    NJ6_1: [],
                    NJ6_1_1_1: '',
                    NJ6_1_2_1: '',
                    NJ6_1_3_1: '',
                    NJ6_2: '',
                    NJ6_2_1_1: [],
                    NJ6_2_1_1_5_1: '',
                },
                form7: {
                    NJ7_1: '',
                    NJ7_1_1_1: [],
                    NJ7_1_1_2: [],
                    NJ7_1_1_3: [],
                    NJ7_1_1_4: [],
                    NJ7_1_1_5: [],
                },
                form8: {
                    NJ8_1: '',
                    NJ8_2: '',
                    NJ8_3: '',
                    NJ8_3_4_1: [],
                    NJ8_3_4_1_7_1: '',
                    NJ8_3_5_1: '',
                },
                form9: {
                    NJ9_1: '',
                    NJ9_2: '',
                    NJ9_3: '',
                    NJ9_4: '',
                    NJ9_5: '',
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
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
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
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
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
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
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
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
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
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
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
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
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
                option3_1_1_1: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option3_1_1_1_1_1: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option3_1_1_1_1_1_1_1: [{
                        value: 'a',
                        label: '组织学类型'
                    },
                    {
                        value: 'b',
                        label: '大小'
                    },
                    {
                        value: 'c',
                        label: '是否存在溃疡'
                    },
                    {
                        value: 'd',
                        label: '浸润深度'
                    },
                    {
                        value: 'e',
                        label: '无法确定或无记录'
                    },
                ],
                option3_1_1_2: [{
                        value: 'a',
                        label: '肉眼可见黏膜内（cT1a）分化癌，必须无溃疡（瘢痕）发生，即UL（－）'
                    },
                    {
                        value: 'b',
                        label: '肉眼可见黏膜内（cT1a）分化癌，直径≦3cm，有溃疡（瘢痕）发生，即UL（+）'
                    },
                    {
                        value: 'c',
                        label: '无法确定或无记录'
                    },
                ],
                option3_1_1_3: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option3_1_1_3_1_1: [{
                        value: 'a',
                        label: '明确淋巴结转移的早期胃癌'
                    },
                    {
                        value: 'b',
                        label: '癌症侵犯固有肌层'
                    },
                    {
                        value: 'c',
                        label: '患者存在凝血功能障碍'
                    },
                    {
                        value: 'd',
                        label: '其他'
                    },
                ],
                option3_1_1_4: [{
                        value: 'a',
                        label: '内镜下经黏膜下隧道胃病损切除术（STER）（治疗性操作）ICD-9-CM-3:43.4106'
                    },
                    {
                        value: 'b',
                        label: '内镜下胃黏膜下剥离术[ESD]（治疗性操作）ICD-9-CM-3:43.4107'
                    },
                    {
                        value: 'c',
                        label: '内镜下胃黏膜切除术[EMR]（治疗性操作）ICD-9-CM-3:43.4108'
                    },
                    {
                        value: 'd',
                        label: '其他'
                    },
                    {
                        value: 'e',
                        label: '无法确定或无记录'
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
                option4_1_1_1_7_1: [{
                        value: 'a',
                        label: '临床医师认为有使用规范内的抗菌药物治疗的禁忌症者'
                    },
                    {
                        value: 'b',
                        label: '甲氧西林葡萄球菌发生率高的医疗机构，可选用去甲万古霉素预防感染'
                    },
                    {
                        value: 'c',
                        label: '临床主任医师下达医嘱，认为有使用《特殊使用级抗菌药物》的指征'
                    },
                    {
                        value: 'd',
                        label: '其他因素'
                    },
                    {
                        value: 'e',
                        label: '无法确定或无记录'
                    },
                ],
                option4_1_1_1_8_1: [{
                        value: 'a',
                        label: '临床医师认为有使用规范内的抗菌药物治疗的禁忌症者'
                    },
                    {
                        value: 'b',
                        label: '甲氧西林葡萄球菌发生率高的医疗机构，可选用去甲万古霉素预防感染'
                    },
                    {
                        value: 'c',
                        label: '临床主任医师下达医嘱，认为有使用《特殊使用级抗菌药物》的指征'
                    },
                    {
                        value: 'd',
                        label: '其他因素'
                    },
                    {
                        value: 'e',
                        label: '无法确定或无记录'
                    },
                ],
                option4_3: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option4_3_1_1: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option4_4: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option4_4_1_1: [{
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
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option5_1_1_1: [{
                        value: 'a',
                        label: '出血'
                    },
                    {
                        value: 'b',
                        label: '穿孔'
                    },
                    {
                        value: 'c',
                        label: '狭窄'
                    },
                    {
                        value: 'd',
                        label: '腹疼'
                    },
                    {
                        value: 'e',
                        label: '其他'
                    },
                ],
                option5_1_1_2: [{
                        value: 'a',
                        label: '术中出血推荐直接电凝止血'
                    },
                    {
                        value: 'b',
                        label: '迟发性出血可用止血夹或电止血钳止血'
                    },
                    {
                        value: 'c',
                        label: '术中穿孔多数病例可通过金属夹闭裂口进行修补'
                    },
                    {
                        value: 'd',
                        label: '当穿孔较大需要紧急开腹手术内镜柱状气囊扩张'
                    },
                    {
                        value: 'e',
                        label: '临床观察，仅为对症处理，无须手术处理'
                    },
                    {
                        value: 'f',
                        label: '其他'
                    },
                    {
                        value: 'g',
                        label: '无法确定或无记录'
                    },
                ],
                option6_1: [{
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
                option6_1_2_1: [{
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
                option6_2: [{
                        value: 'a',
                        label: '是'
                    },
                    {
                        value: 'b',
                        label: '否'
                    },
                ],
                option6_2_1_1: [{
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
        activated(){
            let _this=this;
            _this.$emit('athing')
        },
        methods: {
            submit(val) {
                let _this = this;
                console.log(_this);
                _this.$emit('getSuccess',val);
                _this.$router.push({
                    name:'NeiJing'
                })                
            }
        }
    }
</script>