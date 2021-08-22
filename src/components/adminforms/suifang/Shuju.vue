<template>
  <div id="main">
    <el-row>
      <el-col :span="24">
        <div class="grid-content1 bg-purple"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content2 bg-purple"></div>
      </el-col>
    </el-row>
    <el-row :gutter="36">
      <el-col :span="10">
        <div class="grid-content3 bg-purple" id="chartdiv31"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content3 bg-purple" id="chartdiv32"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content4 bg-purple" id="chartdiv41"></div>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="8">
        <div class="grid-content5 bg-purple" id="chartdiv51"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content5 bg-purple" id="chartdiv52"></div>
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
        valueAxis.renderer.minGridDistance = 20;
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
        legend.y = 195;
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
        title.marginBottom = 20;
        //设置宽度
        series1.columns.template.width = am4core.percent(50);
        series2.columns.template.width = am4core.percent(50);
      },
      createChart32(container, data, titleText) {
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
        title.text = "[font-size: 14]" + titleText;
        title.align = "left";
        title.isMeasured = false;
        title.x = 20;
        title.y = 20;
      },
      createChart41(container, data, titleText) {
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
        title.text = "[font-size: 14]" + titleText;
        title.align = "left";
        title.marginBottom = 30;
        //设置宽度
        series.columns.template.width = am4core.percent(50);
      },
      createChart51(container, data, titleText) {
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
        label.text = "[font-size: 14]" + titleText;
        label.align = "center";
        //设置大小
        chart.radius = am4core.percent(90);
      },
      createChart52(container, data, titleText) {
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
        label2.x = am4core.percent(45 );
        label2.y = am4core.percent(99);

      },
    },
    mounted() {
      let _this = this;
      //创建container
      let container31 = am4core.create("chartdiv31", am4core.Container);
      let container32 = am4core.create("chartdiv32", am4core.Container);
      let container41 = am4core.create("chartdiv41", am4core.Container);
      let container51 = am4core.create("chartdiv51", am4core.Container);
      let container52 = am4core.create("chartdiv52", am4core.Container);
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

      container51.width = am4core.percent(100);
      container51.height = am4core.percent(100);
      container51.layout = "horizontal";

      container52.width = am4core.percent(100);
      container52.height = am4core.percent(100);
      container52.layout = "horizontal";

      //创建data
      let data31 = [{
        "key": "11-01",
        "value1": 150,
        "value2": 120
      }, {
        "key": "11-02",
        "value1": 120,
        "value2": 180
      }, {
        "key": "11-03",
        "value1": 10,
        "value2": 160
      }, {
        "key": "11-04",
        "value1": 170,
        "value2": 70
      }, {
        "key": "11-05",
        "value1": 160,
        "value2": 150
      }, {
        "key": "11-06",
        "value1": 220,
        "value2": 80
      }, {
        "key": "11-07",
        "value1": 150,
        "value2": 300
      }];

      let data32 = [{
        "key": "住院随访",
        "value": 29
      }, {
        "key": "其他",
        "value": 17
      }, {
        "key": "门诊随访",
        "value": 24
      }, {
        "key": "电话随访",
        "value": 30
      }];

      let data41 = [{
        "key": "术后1个月",
        "value": 3
      }, {
        "key": "术后3个月",
        "value": 7
      }, {
        "key": "术后6个月",
        "value": 10
      }, {
        "key": "术后9个月",
        "value": 5
      }, {
        "key": "术后12个月",
        "value": 1
      }, {
        "key": "术后18个月",
        "value": 5
      }, {
        "key": "术后24个月",
        "value": 2
      }, {
        "key": "术后36个月",
        "value": 5
      }, {
        "key": "术后48个月",
        "value": 2
      }, {
        "key": "术后60个月",
        "value": 7
      }];

      let data51 = [{
        "key": "随访调查",
        "value": 83
      }, {
        "key": "异常占比",
        "value": 17
      }];

      let data52 = 10;

      //创建Chart
      _this.createChart31(container31, data31, "患者性别年龄统计");
      _this.createChart32(container32, data32, "随访类型");
      _this.createChart41(container41, data41, "随访时间占比");
      _this.createChart51(container51, data51, "随访调查");
      _this.createChart52(container52, data52, "并发症");
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
    height: 60px;
  }

  .grid-content2 {
    height: 30px;
  }

  .grid-content3 {
    height: 270px;
  }

  .grid-content4 {
    height: 270px;
  }

  .grid-content5 {
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