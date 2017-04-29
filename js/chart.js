function hide() {
  var a = $('a[title]');
  if (a.length == 2) {
    $('image[x]').parent().parent().hide();
    a.hide();
    return;
  }
  setTimeout(hide, 500);
}

function draw(points) {
  if (!points.length) {
    $('#section-4').hide();
    return;
  }
AmCharts.makeChart( "chartdiv", {
  "type": "serial",
  "addClassNames": true,
  "theme": "light",
  "autoMargins": true,
  "marginLeft": 0,
  "marginRight": 0,
  "marginTop": 25,
  "marginBottom": 0,
  "balloon": {
    "adjustBorderColor": false,
    "horizontalPadding": 10,
    "verticalPadding": 8,
    "color": "#ffffff"
  },
    "legend": {
        "equalWidths": false,
        "useGraphSettings": true,
        "valueAlign": "left",
        "valueWidth": 120
    },
  "dataProvider": points,
  "valueAxes": [ {
    "id": "money",
    "title": "本金/持股/獲利(千元)",
    "axisAlpha": 0,
    "position": "left"
  }, {
    "id": "percent",
    "title": "投資報酬率(百分比)",
    "axisAlpha": 0,
    "position": "right",
    "labelFunction": function(value) {
      return value + "%";
    }
  } ],
  "startDuration": 1,
  "graphs": [ {
    "valueAxis": "money",
    "alphaField": "alpha",
    "balloonText": "<span style='font-size:12px;'>[[date]][[title]]:<br><span style='font-size:20px;'>[[value]]千元</span> [[additional]]</span>",
    "fillAlphas": 1,
    "title": "本金",
    "type": "column",
    "valueField": "base",
    "dashLengthField": "dashLengthColumn"
  }, {
    "valueAxis": "money",
    "balloonText": "<span style='font-size:12px;'>[[date]][[title]]:<br><span style='font-size:20px;'>[[value]]千元</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "持股價值",
    "valueField": "value",
    "dashLengthField": "dashLengthLine"
  }, {
    "valueAxis": "money",
    "balloonText": "<span style='font-size:12px;'>[[date]][[title]]:<br><span style='font-size:20px;'>[[value]]千元</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "已實現獲利",
    "valueField": "gain",
    "dashLengthField": "dashLengthLine"
  }, {
    "valueAxis": "percent",
    "balloonText": "<span style='font-size:12px;'>[[date]][[title]]:<br><span style='font-size:20px;'>[[value]]%</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "title": "投報率",
    "valueField": "rate",
    "dashLengthField": "dashLengthLine"
  } ],
  "dataDateFormat": "MM/DD",
  "categoryField": "date",
  "categoryAxis": {
    "dateFormats": [{"period":"DD","format":"MM/DD"},{"period":"WW","format":"MM/DD"},{"period":"MM","format":"MMM"},{"period":"YYYY","format":"YYYY"}],
    "parseDates": true,
    "minPeriod": "DD",
    "gridPosition": "start",
    "axisAlpha": 0,
    "tickLength": 0
  },
} );
AmCharts.makeChart( "chartdiv2", {
  "type": "serial",
  "addClassNames": true,
  "theme": "light",
  "autoMargins": true,
  "marginLeft": 0,
  "marginRight": 0,
  "marginTop": 25,
  "marginBottom": 0,
  "balloon": {
    "adjustBorderColor": false,
    "horizontalPadding": 10,
    "verticalPadding": 8,
    "color": "#ffffff"
  },
    "legend": {
        "equalWidths": false,
        "useGraphSettings": true,
        "valueAlign": "left",
        "valueWidth": 120
    },
  "dataProvider": points,
  "valueAxes": [ {
    "id": "point",
    "title": "加權指數(點)",
    "axisAlpha": 0,
    "position": "left"
  }, {
    "id": "percent2",
    "title": "年化報酬率(百分比)",
    "axisAlpha": 0,
    "position": "right",
    "labelFunction": function(value) {
      return value + "%";
    }
  } ],
  "startDuration": 1,
  "graphs": [ /*{
    "valueAxis": "point",
    "balloonText": "<span style='font-size:12px;'>[[date]][[title]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "lineColor": "#0000FF",
    "title": "加權指數",
    "valueField": "taiex",
    "dashLengthField": "dashLengthLine"
  },*/ {
    "valueAxis": "percent2",
    "balloonText": "<span style='font-size:12px;'>[[date]][[title]]:<br><span style='font-size:20px;'>[[value]]%</span> [[additional]]</span>",
    "bullet": "round",
    "lineThickness": 3,
    "bulletSize": 7,
    "bulletBorderAlpha": 1,
    "bulletColor": "#FFFFFF",
    "useLineColorForBulletBorder": true,
    "bulletBorderThickness": 3,
    "fillAlphas": 0,
    "lineAlpha": 1,
    "lineColor": "#FF00FF",
    "title": "年化報酬率",
    "valueField": "year",
    "dashLengthField": "dashLengthLine"
  } ],
  "dataDateFormat": "MM/DD",
  "categoryField": "date",
  "categoryAxis": {
    "dateFormats": [{"period":"DD","format":"MM/DD"},{"period":"WW","format":"MM/DD"},{"period":"MM","format":"MMM"},{"period":"YYYY","format":"YYYY"}],
    "parseDates": true,
    "minPeriod": "DD",
    "gridPosition": "start",
    "axisAlpha": 0,
    "tickLength": 0
  },
} );
hide();
}
