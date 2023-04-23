"use strict";
var outputElement = document.getElementById("output");
/1901年以降の数値をランダムで出力するように提起/;
var year = Math.round(Math.random() * 120) + 1901;
/出力された年号から元号を割り出す/;
if (year < 1912) {
    var gengou = year - 1867;
    outputElement.textContent =("".concat(year, "\u5E74\u306F\u660E\u6CBB").concat(gengou, "\u5E74"));
}
else if (year < 1926) {
    var gengou = year - 1911;
    outputElement.textContent =("".concat(year, "\u5E74\u306F\u5927\u6B63").concat(gengou, "\u5E74"));
}
else if (year < 1989) {
    var gengou = year - 1925;
    outputElement.textContent =("".concat(year, "\u5E74\u306F\u662D\u548C").concat(gengou, "\u5E74"));
}
else if (year < 2019) {
    var gengou = year - 1988;
    outputElement.textContent =("".concat(year, "\u5E74\u306F\u5E73\u6210").concat(gengou, "\u5E74"));
}
else {
    var gengou = year - 2018;
    outputElement.textContent =("".concat(year, "\u5E74\u306F\u4EE4\u548C").concat(gengou, "\u5E74"));
}
