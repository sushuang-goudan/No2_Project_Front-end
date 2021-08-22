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
    <el-row :gutter="24">
      <el-col :span="8" offset="1">
        <div class="grid-content4 bg-purple" id="chartdiv41"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content4 bg-purple" id="chartdiv42"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4charts from "@amcharts/amcharts4/charts";

  export default {
    name: "ShuZhong",
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
        label2.x = am4core.percent(33);
        label2.y = am4core.percent(90);

      },
      createChart33(container, data, titleText) {
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
        legend.x = -148;
        legend.y = 218;
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
      createChart41(container, data, titleText) {
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
      },
      createChart42(container, data, titleText) {
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
        label.align = "center";
        chart.radius = am4core.percent(90);

        //添加图例
        let legend = new am4charts.Legend();
        chart.legend = legend;
        legend.position = "right";
        legend.scrollable = true;
        legend.fontSize = 12;
        legend.maxWidth = 150;
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
      let container32 = am4core.create("chartdiv32", am4core.Container);
      let container33 = am4core.create("chartdiv33", am4core.Container);
      let container41 = am4core.create("chartdiv41", am4core.Container);
      let container42 = am4core.create("chartdiv42", am4core.Container);

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

      container42.width = am4core.percent(100);
      container42.height = am4core.percent(100);
      container42.layout = "horizontal";

      //创建data
      let data31 = 50;

      let data32 = 20;

      let data33 = [{
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

      let data41 = [{
        "key": "是",
        "value": 70
      }, {
        "key": "否",
        "value": 30
      }];

      let data42 = [{
        "key": "内镜下胃黏膜切除术(EMR)",
        "value": 25
      }, {
        "key": "内镜下胃黏膜剥离术(ESD)",
        "value": 25
      }, {
        "key": "内镜下经黏膜下隧道胃病损切除术(STER)",
        "value": 25
      }, {
        "key": "无法确定或无记录",
        "value": 10
      }, {
        "key": "其他",
        "value": 15
      }];

      //创建Chart
      _this.createChart312(container31, data31, "手术时间 ≥ 3小时");
      _this.createChart312(container32, data32, "出血量 ≥ 1500ml");
      _this.createChart33(container33, data33, "患者性别年龄统计");
      _this.createChart41(container41, data41, "术中是否使用抗菌药物");
      _this.createChart42(container42, data42, "术式选择");
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