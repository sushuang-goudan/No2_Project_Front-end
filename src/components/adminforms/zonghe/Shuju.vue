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
    <el-row :gutter="30">
      <el-col :span="10">
        <div class="grid-content4 bg-purple" id="chartdiv41"></div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content4 bg-purple" id="chartdiv42"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4charts from "@amcharts/amcharts4/charts";

  export default {
    name: "Shuju",
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
        valueAxis.renderer.minGridDistance = 30;
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
        title.text = "[font-size: 14]" + titleText;
        title.align = "left";
        title.marginBottom = 10;
        //设置宽度
        series.columns.template.width = am4core.percent(40);
      },
      createChart412(container, data, titleText) {
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
                series.labels.template.disabled = true;
                let label = chart.createChild(am4core.Label);
                label.text = titleText;
                label.align = "left";
                label.marginLeft=20;
                label.marginBottom=20;
                chart.radius = am4core.percent(90);

                //添加图例
                let legend = new am4charts.Legend();
                chart.legend = legend;
                legend.position = "right";
                legend.scrollable = true;
                legend.fontSize = 12;
                legend.maxWidth = 200;
                series.legendSettings.labelText = "{key}";
                series.legendSettings.valueText = " ";
                 let marker = legend.markers.template.children.getIndex(0);
                marker.strokeOpacity = 1;
                marker.stroke = am4core.color("#fff");
                let markerTemplate = chart.legend.markers.template;
                markerTemplate.width = 15;
                markerTemplate.height = 15;
      }
    },
    mounted() {
      let _this = this;
      //创建container
      let container31 = am4core.create("chartdiv31", am4core.Container);
      let container41 = am4core.create("chartdiv41", am4core.Container);
      let container42 = am4core.create("chartdiv42", am4core.Container);
      //设置container
      container31.width = am4core.percent(60);
      container31.height = am4core.percent(100);
      container31.layout = "horizontal";

      container41.width = am4core.percent(100);
      container41.height = am4core.percent(100);
      container41.layout = "horizontal";

      container42.width = am4core.percent(100);
      container42.height = am4core.percent(100);
      container42.layout = "horizontal";

      //创建data
      let data31 = [{
        "key": "放疗",
        "value": 50
      }, {
        "key": "化疗",
        "value": 47
      }, {
        "key": "靶向治疗",
        "value": 40
      }, {
        "key": "免疫治疗",
        "value": 18
      }, {
        "key": "不良反应",
        "value": 15
      }];

      let data41 = [{
        "key": "螺旋断层增强放疗(TOMO)",
        "value": 6
      }, {
        "key": "立体定向放疗(SBRT)",
        "value": 7
      }, {
        "key": "容积旋转增强放疗给(VMAT)",
        "value": 10
      }, {
        "key": "三维适形放疗(3D-CRT)",
        "value": 9
      }, {
        "key": "无法确定或无法记录",
        "value": 3
      }];

      let data42 = [{
        "key": "三药联合方案",
        "value": 26
      }, {
        "key": "单药方案",
        "value": 18
      }, {
        "key": "奥沙利铂＋氟尿嘧啶类",
        "value": 24
      }, {
        "key": "顺铂＋氟尿嘧啶类",
        "value": 26
      }, {
        "key": "其他",
        "value": 6
      }];

      //创建Chart
      _this.createChart31(container31, data31, "%");
      _this.createChart412(container41, data41, "放疗方案");
      _this.createChart412(container42, data42, "化疗方案");
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