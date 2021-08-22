<template>
  <div id="main">
    <el-row>
      <el-col :span="8">
        <div class="grid-content2 bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="7">
        <div class="grid-content3 bg-purple" id="chartdiv31"></div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content3 bg-purple" id="chartdiv32"></div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content3 bg-purple" id="chartdiv33"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content4 bg-purple" id="chartdiv41"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4charts from "@amcharts/amcharts4/charts";

  export default {
    name: "ShuHou",
    data: function () {
      return {}
    },
    methods: {
      createChart312(container, data, titleText) {
        let chart = container.createChild(am4charts.GaugeChart);
        chart.innerRadius = am4core.percent(80);
        let axis = chart.xAxes.push(new am4charts.ValueAxis());
        axis.min = 0;
        axis.max = 100;
        axis.renderer.labels.template.adapter.add("text", function (text) {
          return "[font-size: 12]" + text + "%";
        })
        axis.renderer.labels.template.disabled = true;
        axis.renderer.inside = true;
        axis.renderer.line.strokeOpacity = 1;
        axis.renderer.ticks.template.disabled = false
        axis.renderer.ticks.template.strokeOpacity = 1;
        axis.renderer.ticks.template.length = 6;
        axis.renderer.grid.template.disabled = true;
        axis.renderer.radius = am4core.percent(80);

        let colorSet = new am4core.ColorSet();

        let axis2 = chart.xAxes.push(new am4charts.ValueAxis());
        axis2.min = 0;
        axis2.max = 100;
        axis2.renderer.radius = am4core.percent(110);
        axis2.strictMinMax = true;
        axis2.renderer.labels.template.disabled = true;
        axis2.renderer.ticks.template.disabled = true;
        axis2.renderer.grid.template.disabled = true;

        var range0 = axis2.axisRanges.create();
        range0.value = 0;
        range0.endValue = 50;
        range0.axisFill.fillOpacity = 1;
        range0.axisFill.fill = colorSet.getIndex(0);

        var range1 = axis2.axisRanges.create();
        range1.value = 50;
        range1.endValue = 100;
        range1.axisFill.fillOpacity = 1;
        range1.axisFill.fill = colorSet.getIndex(2);

        var label = chart.radarContainer.createChild(am4core.Label)
        label.fontSize = 32;
        label.isMeasured = false;
        label.x = am4core.percent(50);
        label.y = am4core.percent(100);
        label.horizontalCenter = "middle";
        label.verticalCenter = "bottom";

        var hand = chart.hands.push(new am4charts.ClockHand());
        hand.axis = axis2;
        hand.innerRadius = am4core.percent(36);
        hand.startWidth = 1;
        hand.pin.disabled = true;
        hand.value = data;

        hand.events.on("propertychanged", function (ev) {
          range0.endValue = ev.target.value;
          range1.value = ev.target.value;
          label.text = axis2.positionToValue(hand.currentPosition) + "%";
          axis2.invalidate();
        });

        //设置标签
        let label2 = chart.createChild(am4core.Label);
        label2.text = "[font-size: 14]" + titleText;
        label2.align = "center";
        label2.isMeasured = false;
        label2.x = am4core.percent(37);
        label2.y = am4core.percent(90);

      },
      createChart33(container, data, titleText) {
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
        labelBullet.label.text = "[font-size: 14]{values.valueX.workingValue}";
        labelBullet.locationX = 1;

        series.columns.template.adapter.add("fill", function (fill, target) {
          return chart.colors.getIndex(target.dataItem.index);
        });

        categoryAxis.sortBySeries = series;
        //设置标题
        let title = chart.titles.create();
        title.text = "[font-size: 16]" + titleText;
        title.align = "left";
        title.marginBottom = 10;

      },
      createChart41(container, data, titleText) {
        //创建图
        let chart = container.createChild(am4charts.XYChart);
        chart.data = data;
        //设置categoryAxis
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "key";
        categoryAxis.renderer.labels.template.fontSize = 12;
        categoryAxis.renderer.minGridDistance = 30;
        //设置valueAxis
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.renderer.labels.template.fontSize = 12;
        valueAxis.renderer.minGridDistance = 30;
        //设置series1
        let series1 = chart.series.push(new am4charts.ColumnSeries());
        series1.dataFields.valueY = "value1";
        series1.dataFields.categoryX = "key";
        series1.stacked = false;
        series1.name = "男";
        //设置series2
        let series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = "value2";
        series2.dataFields.categoryX = "key";
        series2.stacked = true;
        series2.name = "女";
        //设置legend
        let legend = new am4charts.Legend();
        chart.legend = legend;
        legend.position = "absolute";
        legend.x = -213;
        legend.y = 187;
        let marker = legend.markers.template.children.getIndex(0);
        marker.strokeOpacity = 1;
        marker.stroke = am4core.color("#fff");
        let markerTemplate = chart.legend.markers.template;
        markerTemplate.width = 10;
        markerTemplate.height = 10;
        series1.legendSettings.labelText = "[font-size: 12]男";
        series2.legendSettings.labelText = "[font-size: 12]女";
        //设置标题
        let title = chart.titles.create();
        title.text = "[font-size: 14]" + titleText;
        title.align = "left";
        title.marginBottom = 25;
        //设置宽度
        series1.columns.template.width = am4core.percent(45);
        series2.columns.template.width = am4core.percent(45);
      },
    },
    mounted() {
      let _this = this;
      //创建container
      let container31 = am4core.create("chartdiv31", am4core.Container);
      let container32 = am4core.create("chartdiv32", am4core.Container);
      let container33 = am4core.create("chartdiv33", am4core.Container);
      let container41 = am4core.create("chartdiv41", am4core.Container);

      //设置container
      container31.width = am4core.percent(100);
      container31.height = am4core.percent(100);
      container31.layout = "horizontal";

      container32.width = am4core.percent(100);
      container32.height = am4core.percent(100);
      container32.layout = "horizontal";

      container33.width = am4core.percent(100);
      container33.height = am4core.percent(100);
      container33.layout = "horizontal";

      container41.width = am4core.percent(100);
      container41.height = am4core.percent(100);
      container41.layout = "horizontal";


      //创建data
      let data31 = 50;

      let data32 = 20;

      let data33 = [{
        "key": "肠梗阻",
        "value": 9
      }, {
        "key": "吻合口狭窄",
        "value": 8
      }, {
        "key": "食物反流",
        "value": 7
      }, {
        "key": "消化不良",
        "value": 6
      }, {
        "key": "倾倒综合征",
        "value": 5
      }, {
        "key": "胃排空迟缓",
        "value": 4
      }, {
        "key": "切口疝",
        "value": 3
      }, {
        "key": "其他",
        "value": 2
      }];

      let data41 = [{
        "key": "11-01",
        "value1": 15,
        "value2": 12
      }, {
        "key": "11-02",
        "value1": 13,
        "value2": 18
      }, {
        "key": "11-03",
        "value1": 7,
        "value2": 14
      }, {
        "key": "11-04",
        "value1": 17,
        "value2": 7
      }, {
        "key": "11-05",
        "value1": 15,
        "value2": 20
      }, {
        "key": "11-06",
        "value1": 25,
        "value2": 6
      }, {
        "key": "11-07",
        "value1": 18,
        "value2": 27
      }];

      //创建Chart
      _this.createChart312(container31, data31, "并发症发生率");
      _this.createChart312(container32, data32, "追加手术率");
      _this.createChart33(container33, data33, "并发症排名");
      _this.createChart41(container41, data41, "平均住院天数统计");
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