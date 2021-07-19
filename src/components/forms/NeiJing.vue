<template>
    <div>
        <el-collapse-item title="手术前评估和治疗前临床TNM分期" name="formGroup2">
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
                <el-form-item label="CT分期病理学定义" v-show="form2.NJ2_2==='y'">
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
                <el-form-item label="UT分期病理学定义" v-show="form2.NJ2_3==='y'">
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
                <el-form-item label="原发肿瘤（T）分期" v-show="form2.NJ2_4==='y'">
                    <el-select v-model="form2.NJ2_4_1_1" placeholder="请选择">
                        <el-option v-for="item in option2_4_1_1" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="区域淋巴结（N）分期" v-show="form2.NJ2_4==='y'">
                    <el-select v-model="form2.NJ2_4_1_2" placeholder="请选择">
                        <el-option v-for="item in option2_4_1_2" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="远处转移（M）分期" v-show="form2.NJ2_4==='y'">
                    <el-select v-model="form2.NJ2_4_1_3" placeholder="请选择">
                        <el-option v-for="item in option2_4_1_3" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="胃癌治疗前cTNM分期结论" v-show="form2.NJ2_4==='y'">
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
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="早期胃癌内镜治疗情况" name="formGroup3">
            <el-form ref="form3" :model="form3" label-width="300px">
                <el-form-item label="是否是0-IA期胃癌">
                    <el-radio-group v-model="form3.NJ3_1" placeholder="请选择">
                        <el-radio v-for="item in option3_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否选择内镜下治疗" v-show="form3.NJ3_1==='y'">
                    <el-radio-group v-model="form3.NJ3_1_1_1" placeholder="请选择">
                        <el-radio v-for="item in option3_1_1_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="是否有术前评估" v-show="form3.NJ3_1==='y'&&form3.NJ3_1_1_1==='y'">
                    <el-radio-group v-model="form3.NJ3_1_1_1_1_1" placeholder="请选择">
                        <el-radio v-for="item in option3_1_1_1_1_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="术前评估内容"
                    v-show="form3.NJ3_1==='y'&&form3.NJ3_1_1_1==='y'&&form3.NJ3_1_1_1_1_1==='y'">
                    <el-checkbox-group v-model="form3.NJ3_1_1_1_1_1_1_1">
                        <el-checkbox v-for="item in option3_1_1_1_1_1_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="治疗的适应证" v-show="form3.NJ3_1==='y'">
                    <el-select v-model="form3.NJ3_1_1_2" placeholder="请选择">
                        <el-option v-for="item in option3_1_1_2" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否有内镜治疗禁忌证" v-show="form3.NJ3_1==='y'">
                    <el-radio-group v-model="form3.NJ3_1_1_3" placeholder="请选择">
                        <el-radio v-for="item in option3_1_1_3" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="治疗禁忌证" v-show="form3.NJ3_1==='y'&&form3.NJ3_1_1_3==='y'">
                    <el-select v-model="form3.NJ3_1_1_3_1_1" placeholder="请选择">
                        <el-option v-for="item in option3_1_1_3_1_1" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="其他治疗禁忌证"
                    v-show="form3.NJ3_1==='y'&&form3.NJ3_1_1_3==='y'&&form3.NJ3_1_1_3_1_1==='d'">
                    <el-input v-model="form3.NJ3_1_1_3_1_1_4_1"></el-input>
                </el-form-item>
                <el-form-item label="术式选择" v-show="form3.NJ3_1==='y'">
                    <el-select v-model="form3.NJ3_1_1_4" placeholder="请选择">
                        <el-option v-for="item in option3_1_1_4" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="围术期抗菌药物使用情况" name="formGroup4">
            <el-form ref="form4" :model="form4" label-width="300px">
                <el-form-item label="是否使用预防性抗菌药物">
                    <el-radio-group v-model="form4.NJ4_1" placeholder="请选择">
                        <el-radio v-for="item in option4_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="预防性抗菌药物选择" v-show="form4.NJ4_1==='y'">
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
                <el-form-item label="手术时间≥3小时情况下，是否术中追加抗菌药物" v-show="form4.NJ4_3==='y'">
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
                <el-form-item label="术中出血量≥1500ml情况下，是否术中追加抗菌药物" v-show="form4.NJ4_4==='y'">
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
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="术后并发症与再手术情况" name="formGroup5">
            <el-form ref="form5" :model="form5" label-width="300px">
                <el-form-item label="内镜治疗术后并发症">
                    <el-radio-group v-model="form5.NJ5_1" placeholder="请选择">
                        <el-radio v-for="item in option5_1" :key="item.value" :label="item.value">{{item.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="并发症" v-show="form5.NJ5_1==='y'">
                    <el-checkbox-group v-model="form5.NJ5_1_1_1">
                        <el-checkbox v-for="item in option5_1_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="术后并发症处理" v-show="form5.NJ5_1==='y'">
                    <el-select v-model="form5.NJ5_1_1_2" placeholder="请选择">
                        <el-option v-for="item in option5_1_1_2" :key="item.value" :label="item.label"
                            :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="营养支持治疗情况" name="formGroup6">
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
                <el-form-item label="术前给予营养支持符合原则规范" v-show="form6.NJ6_2==='y'">
                    <el-checkbox-group v-model="form6.NJ6_2_1_1">
                        <el-checkbox v-for="item in option6_2_1_1" :key="item.value" :label="item.label">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="其他术前给予营养支持符合原则规范" v-show="form6.NJ6_2==='y'&&form6.NJ6_2_1_1.indexOf('其他')>-1">
                    <el-input v-model="form6.NJ6_2_1_1_5_1"></el-input>
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
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option3_1_1_1_1_1: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
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
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
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
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
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
                option4_3: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option4_3_1_1: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option4_4: [{
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
                        label: '否'
                    },
                ],
                option4_4_1_1: [{
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
                        value: 'y',
                        label: '是'
                    },
                    {
                        value: 'n',
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