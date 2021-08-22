<template>
    <div id="main">
        <el-row :gutter="20">
            <el-col :span="24">
                <div class="grid-content1 bg-purple"></div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <div class="grid-content2 bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content2 bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content2 bg-purple"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content2 bg-purple"></div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8" :offset="2">
                <div class="grid-content3 bg-purple" id="chartdiv31"></div>
            </el-col>
            <el-col :span="8" :offset="2">
                <div class="grid-content3 bg-purple" id="chartdiv32"></div>
            </el-col>
        </el-row>
        <el-row :gutter="24">
            <el-col :span="9">
                <div class="grid-content4 bg-purple" id="chartdiv41"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content4 bg-purple" id="chartdiv42"></div>
            </el-col>
            <el-col :span="7">
                <div class="grid-content4 bg-purple" id="chartdiv43"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import * as am4core from "@amcharts/amcharts4/core";
    import * as am4charts from "@amcharts/amcharts4/charts";

    export default {
        name: "Huizong",
        data: function () {
            return {}
        },
        methods: {
            createChart31(container, data) {
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
                //设置标题
                let title = chart.titles.create();
                title.text = "[font-size: 18]总手术量";
                title.align = "left";
                title.isMeasured = false;
                title.x = 20;
                title.y = 20;
            },
            createChart32(container, data){
                //创建图
                let chart = container.createChild(am4charts.XYChart);
                //绑定图数据
                chart.data = data;
                let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
                categoryAxis.renderer.grid.template.location = 0;
                categoryAxis.dataFields.category = "key";
                categoryAxis.renderer.minGridDistance = 1;
                categoryAxis.renderer.inversed = true;
                categoryAxis.renderer.grid.template.disabled = true;
                categoryAxis.renderer.labels.template.fontSize = 12;
                categoryAxis.renderer.minGridDistance = 20;

                let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
                valueAxis.min = 0;
                valueAxis.renderer.labels.template.fontSize = 12;
                valueAxis.renderer.minGridDistance = 30;


                let series = chart.series.push(new am4charts.ColumnSeries());
                series.dataFields.categoryY = "key";
                series.dataFields.valueX = "value";
                series.tooltipText = "{valueX.value}"
                series.columns.template.strokeOpacity = 0;
                  series.columns.template.column.cornerRadiusBottomRight = 5;
                series.columns.template.column.cornerRadiusTopRight = 5;
                series.columns.template.width = am4core.percent(50);
                
                let labelBullet = series.bullets.push(new am4charts.LabelBullet())
                labelBullet.label.horizontalCenter = "left";
                labelBullet.label.dx = 10;
                labelBullet.label.text = "[font-size: 14]{values.valueX.workingValue.formatNumber('#.0as')}";
                labelBullet.locationX = 1;

                series.columns.template.adapter.add("fill", function(fill, target){
                    return chart.colors.getIndex(target.dataItem.index);
                });

                categoryAxis.sortBySeries = series;
                 //设置标题
                let title = chart.titles.create();
                title.text = "[font-size: 18]合格率排名";
                title.align = "left";
                title.marginBottom = 10;
                
            },
            createChart41(container, data){
                //创建图
                let chart = container.createChild(am4charts.XYChart);
                //绑定图数据
                chart.data = data;
                let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
                categoryAxis.dataFields.category = "key";
                let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
                valueAxis.min = 0;
                let columnSeries = chart.series.push(new am4charts.ColumnSeries());
                columnSeries.dataFields.valueY = "value";
                columnSeries.dataFields.categoryX = "key";
                let lineSeries = chart.series.push(new am4charts.LineSeries());
                lineSeries.dataFields.valueY = "point";
                lineSeries.dataFields.categoryX = "key";
                //设置标签
                categoryAxis.renderer.labels.template.fontSize = 10;
                categoryAxis.renderer.minGridDistance = 30;
                valueAxis.renderer.labels.template.fontSize = 10;
                valueAxis.renderer.minGridDistance = 30;
                //删除蓝边
                columnSeries.columns.template.strokeOpacity = 0;
                //设置不透明度
                columnSeries.columns.template.fillOpacity = 0.8;
                //鼠标移动颜色会加深
                let hoverState = columnSeries.columns.template.states.create("hover");
                //设置不透明度
                hoverState.properties.fillOpacity = 1;
                //增加颜色系列
                columnSeries.columns.template.adapter.add("fill", function (fill, target) {
                    return chart.colors.getIndex(target.dataItem.index);
                });
                //设置标题
                let title = chart.titles.create();
                title.text = "[font-size: 14]平均住院天数和住院费用";
                title.align = "left";
                title.marginBottom=20;
                //设置宽度
                columnSeries.columns.template.width = am4core.percent(50);
            },
            createChart42(container, data) {
                //创建图
                let chart = container.createChild(am4charts.PieChart);
                //绑定图数据
                chart.data = data;
                //创建series
                let series = chart.series.push(new am4charts.PieSeries());
                //设置series字段
                series.dataFields.value = "value";
                series.dataFields.category = "key";
                //设置设置边框
                series.slices.template.stroke = am4core.color("#fff");
                series.slices.template.strokeOpacity = 0.25;
                //设置不透明度
                series.slices.template.fillOpacity = 0.75;
                //鼠标移动颜色会加深
                let hoverState = series.slices.template.states.create("hover");
                //设置不透明度
                hoverState.properties.fillOpacity = 1;
                //删除标签和标签线
                series.labels.template.disabled = true;
                series.ticks.template.disabled = true;
                //添加图例
                let legend = new am4charts.Legend();
                chart.legend = legend;
                legend.position="right";
                legend.scrollable = true;
                legend.fontSize = 12;
                series.legendSettings.labelText = "{key}";
                series.legendSettings.valueText = " ";
                let marker = legend.markers.template.children.getIndex(0);
                marker.strokeOpacity = 1;
                marker.stroke = am4core.color("#fff");
                let markerTemplate = chart.legend.markers.template;
                markerTemplate.width = 10;
                markerTemplate.height = 10;
                //设置标题
                let title = chart.titles.create();
                title.text = "[font-size: 14]年龄分布";
                title.align = "left";
                title.isMeasured = false;
                title.x = 10;
                title.y = 10;
            },
            createChart43(container, data) {
                //创建图
                let chart = container.createChild(am4charts.PieChart);
                //绑定图数据
                chart.data = data;
                //创建series
                let series = chart.series.push(new am4charts.PieSeries());
                //设置series字段
                series.dataFields.value = "value";
                series.dataFields.category = "key";
                //设置设置边框
                series.slices.template.stroke = am4core.color("#fff");
                series.slices.template.strokeOpacity = 0.25;
                //设置不透明度
                series.slices.template.fillOpacity = 0.75;
                //鼠标移动颜色会加深
                let hoverState = series.slices.template.states.create("hover");
                //设置不透明度
                hoverState.properties.fillOpacity = 1;
                //删除标签和标签线
                series.labels.template.disabled = true;
                series.ticks.template.disabled = true;
                //添加图例
                let legend = new am4charts.Legend();
                chart.legend = legend;
                legend.position = "bottom";
                legend.fontSize = 12;
                let marker = legend.markers.template.children.getIndex(0);
                marker.strokeOpacity = 1;
                marker.stroke = am4core.color("#fff");
                let markerTemplate = chart.legend.markers.template;
                markerTemplate.width = 10;
                markerTemplate.height = 10;
                //设置标题
                let title = chart.titles.create();
                title.text = "[font-size: 14]性别分布";
                title.align = "left";
                title.isMeasured = false;
                title.x = 10;
                title.y = 10;
            },

        },
        mounted() {
            let _this = this;
            //创建container
            let container31 = am4core.create("chartdiv31", am4core.Container);
            let container32 = am4core.create("chartdiv32", am4core.Container);
            let container41 = am4core.create("chartdiv41", am4core.Container);
            let container42 = am4core.create("chartdiv42", am4core.Container);
            let container43 = am4core.create("chartdiv43", am4core.Container);
            //设置container
            container31.width = am4core.percent(100);
            container31.height = am4core.percent(100);
            container31.layout = "horizontal";

            container32.width = am4core.percent(100);
            container32.height = am4core.percent(100);
            container32.layout = "horizontal";

            container41.width = am4core.percent(100);
            container41.height = am4core.percent(100);
            container41.layout = "horizontal";

            container42.width = am4core.percent(100);
            container42.height = am4core.percent(100);
            container42.layout = "horizontal";

            container43.width = am4core.percent(100);
            container43.height = am4core.percent(100);
            container43.layout = "horizontal";
            //创建data
            let data31 = [{
                "key": "内镜下治疗",
                "value": 29
            }, {
                "key": "其他",
                "value": 17
            }, {
                "key": "开腹手术",
                "value": 24
            }, {
                "key": "腹腔镜下手术",
                "value": 30
            }];

            let data32 = [{
                "key": "江苏省人民医院1",
                "value": 90
            }, {
                "key": "江苏省人民医院2",
                "value": 80
            }, {
                "key": "江苏省人民医院3",
                "value": 75
            }, {
                "key": "江苏省人民医院4",
                "value": 66
            }, {
                "key": "江苏省人民医院5",
                "value": 60
            }, {
                "key": "江苏省人民医院6",
                "value": 56
            }, {
                "key": "江苏省人民医院7",
                "value": 49
            }];

            let data41 = [ {
                "key": "CS",
                "value": 23.5,
                "point": 11.1
                }, {
                "key": "PIP",
                "value": 26.2,
                "point": 23.5
                }, {
                "key": "HIP",
                "value": 30.1,
                "point": 18.9
                }, {
                "key": "LC",
                "value": 29.5,
                "point": 27.1
                }, {
                "key": "CAP",
                "value": 30.6,
                "point": 18.2,
                }, {
                "key": "BC",
                "value": 34.1,
                "point": 12.9,
                }, {
                "key": "TIA",
                "value": 30.6,
                "point": 28.2,
                }, {
                "key": "DCT",
                "value": 25.5,
                "point": 22.2,
                }, {
                "key": "CABG",
                "value": 28.7,
                "point": 26.2,
                }, {
                "key": "AE",
                "value": 32.5,
                "point": 23.1,
                }];

            let data42 = [{
                "key": "20岁以下",
                "value": 30
            }, {
                "key": "20-30岁",
                "value": 30
            }, {
                "key": "30-40岁",
                "value": 30
            }, {
                "key": "40-50岁",
                "value": 30
            },{
                "key": "50-60岁",
                "value": 60
            },{
                "key": "60-70岁",
                "value": 30
            },{
                "key": "70岁以上",
                "value": 30
            },];

            let data43 = [{
                "key": "男",
                "value": 30
            }, {
                "key": "女",
                "value": 10
            }];
            //创建Chart
            _this.createChart31(container31, data31);
            _this.createChart32(container32, data32);
            _this.createChart41(container41, data41);
            _this.createChart42(container42, data42);
            _this.createChart43(container43, data43);
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

    .grid-content1 {
        height: 30px;
    }

    .grid-content2 {
        height: 60px;
    }

    .grid-content3 {
        height: 300px;
    }

    .grid-content4 {
        height: 240px;
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