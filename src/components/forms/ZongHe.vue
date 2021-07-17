<template>
    <div>
        <el-collapse-item title="二、术后精确放疗应用情况" name="formGroup2">
            <el-form ref="form2" :model="form2" label-width="300px">
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="三、术后胃癌放疗技术/靶区定义/剂量记录" name="formGroup3">
            <el-form ref="form3" :model="form3" label-width="300px">
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="四、胃癌化疗方案" name="formGroup4">
            <el-form ref="form4" :model="form4" label-width="300px">
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="五、抗肿瘤药物疗效评价" name="formGroup5">
            <el-form ref="form5" :model="form5" label-width="300px">
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="六、抗肿瘤药不良反应评价" name="formGroup6">
            <el-form ref="form6" :model="form6" label-width="300px">
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="七、住院期间为患者提供术前、术后健康教育与出院时提供教育告知五要素情况" name="formGroup7">
            <el-form ref="form7" :model="form7" label-width="300px">
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="八、离院方式" name="formGroup8">
            <el-form ref="form8" :model="form8" label-width="300px">
                <el-form-item>
                    <el-button type="primary" @click="submit">保存</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </el-collapse-item>
        <el-collapse-item title="九、住院费用" name="formGroup9">
            <el-form ref="form9" :model="form9" label-width="300px">
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

      }
    },
  }
</script>