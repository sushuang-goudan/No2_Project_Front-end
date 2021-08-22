<template>
    <div id="main">
        <el-row>
            <el-col :span="8">
                <div class="grid-content2 bg-purple"></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content3 bg-purple" id="chartdiv31"></div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content4 bg-purple" id="chartdiv41"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content4 bg-purple" id="chartdiv42"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content4 bg-purple" id="chartdiv43"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content4 bg-purple" id="chartdiv44"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";

    export default {
        name: "ShuQian",
        data: function () {
            return {}
        },
        methods: {
            createChart31(container, data, titleText) {
                //创建图
                let chart = container.createChild(am4charts.XYChart);
                //绑定图数据
                chart.data = data;
                let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                categoryAxis.dataFields.category = "key";
                let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.min = 0;
                let series = chart.series.push(new am4charts.ColumnSeries());
                series.dataFields.valueY = "value";
                series.dataFields.categoryX = "key";
                //设置标签
                categoryAxis.renderer.labels.template.fontSize = 12;
                categoryAxis.renderer.minGridDistance = 30;
                valueAxis.renderer.labels.template.fontSize = 12;
                valueAxis.renderer.minGridDistance = 20;
                //删除蓝边
                series.columns.template.strokeOpacity = 0;
                //设置不透明度
                series.columns.template.fillOpacity = 0.8;
                //鼠标移动颜色会加深
                let hoverState = series.columns.template.states.create("hover");
                //设置不透明度
                hoverState.properties.fillOpacity = 1;
                //增加颜色系列
                series.columns.template.adapter.add("fill", function (fill, target) {
                    return chart.colors.getIndex(target.dataItem.index);
                });
                //设置标题
                let title = chart.titles.create();
                title.text = "[font-size: 16]" + titleText;
                title.align = "left";
                title.marginBottom = 30;
                //设置宽度
                series.columns.template.width = am4core.percent(40);
            },
            createChart41234(container, data, titleText) {
                //创建图
                let chart = container.createChild(am4charts.PieChart);
                //绑定图数据
                chart.data = data;
                //创建series
                let series = chart.series.push(new am4charts.PieSeries());
                //设置series字段
                series.dataFields.value = "value";
                series.dataFields.category = "key";
                //设置边框
                series.slices.template.stroke = am4core.color("#fff");
                series.slices.template.strokeOpacity = 0.5;
                //设置不透明度
                series.slices.template.fillOpacity = 0.75;
                //鼠标移动颜色会加深
                let hoverState = series.slices.template.states.create("hover");
                //设置不透明度
                hoverState.properties.fillOpacity = 1;
                //设置标签
                series.ticks.template.disabled = true;
                series.alignLabels = false;
                series.labels.template.text = "{key}\n{value.percent.formatNumber('#.0')}%";
                series.labels.template.fontSize = 14;
                series.labels.template.radius = am4core.percent(-40);
                series.labels.template.fill = am4core.color("#fff");
                let label = chart.createChild(am4core.Label);
                label.text = titleText;
                label.align = "center";
            }
        },
        mounted() {
            let _this = this;
            //创建container
            let container31 = am4core.create("chartdiv31", am4core.Container);
            let container41 = am4core.create("chartdiv41", am4core.Container);
            let container42 = am4core.create("chartdiv42", am4core.Container);
            let container43 = am4core.create("chartdiv43", am4core.Container);
            let container44 = am4core.create("chartdiv44", am4core.Container);
            //设置container
            container31.width = am4core.percent(100);
            container31.height = am4core.percent(100);
            container31.layout = "horizontal";

            container41.width = am4core.percent(100);
            container41.height = am4core.percent(100);
            container41.layout = "horizontal";

            container42.width = am4core.percent(100);
            container42.height = am4core.percent(100);
            container42.layout = "horizontal";

            container43.width = am4core.percent(100);
            container43.height = am4core.percent(100);
            container43.layout = "horizontal";

            container44.width = am4core.percent(100);
            container44.height = am4core.percent(100);
            container44.layout = "horizontal";

            let data31 = [{
                "key": "胸部增强CT",
                "value": 3
            }, {
                "key": "腹部增强CT",
                "value": 7
            }, {
                "key": "胃镜检查",
                "value": 10
            }, {
                "key": "全身PCT-CT",
                "value": 5
            }, {
                "key": "上腹部增强MRI",
                "value": 1
            }, {
                "key": "超声内镜",
                "value": 5
            }, {
                "key": "全身骨扫描",
                "value": 2
            }, {
                "key": "肿瘤标志物",
                "value": 5
            }, {
                "key": "ECT扫描",
                "value": 2
            }, {
                "key": "X线气钡双重对比造影",
                "value": 7
            }];

            let data41 = [{
                "key": "是",
                "value": 70
            }, {
                "key": "否",
                "value": 30
            }];

            let data42 = [{
                "key": "是",
                "value": 60
            }, {
                "key": "否",
                "value": 40
            }];

            let data43 = [{
                "key": "是",
                "value": 75
            }, {
                "key": "否",
                "value": 25
            }];

            let data44 = [{
                "key": "是",
                "value": 65
            }, {
                "key": "否",
                "value": 32
            }];
            //创建Chart
            _this.createChart31(container31, data31, "临床分期检查项目");
            _this.createChart41234(container41, data41, "心肺功能评级");
            _this.createChart41234(container42, data42, "血栓风险评估");
            _this.createChart41234(container43, data43, "营养支持");
            _this.createChart41234(container44, data44, "MDT");
            //去除logo
            let eles = document.querySelectorAll("[aria-labelledby$=-title]")
            for (let i = 0; i < eles.length; i++) {
                eles[i].style.visibility = "hidden"
            }
        }
    }
</script>

<style scoped>
    .el-row {
        margin-top: 10px;
    }

    .grid-content2 {
        height: 30px;
    }

    .grid-content3 {
        height: 300px;
    }

    .grid-content4 {
        height: 270px;
    }

    .bg-purple {
        background: #fff;
        border-radius: 4px;
    }

    #main {
        width: 100%;
        background: #F9FAFC;
    }
</style>