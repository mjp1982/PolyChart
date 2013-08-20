
var chart = function() {
$("#container").each(function() {
        tot = $("#container .polychart").length;
        $(this).css({"width": tot + "em"});
        for(var i = 0; i <= tot; i++) {
          name = $("#chart_" + i).attr("title");
          $("#chart_" + i + " .l1").css({
              "border-bottom": name + "em solid #555"
            });
          $("#chart_" + i + " .l2").css({
              "border-bottom": name + "em solid #333"
            });
        };
});
       $("#container").css({"width": tot * 10 + "em"});
};

var columns = function() {
       for(var i = 0; i <= 10; i++) {
           $("#container .columns").append("<span></span>");
       };
       $("#container .columns span:odd").css({"background":"#555"});
       total = $("#container .polychart").length;
       $("#container").css({"width": total * 10 + "em"});
};

$(document).ready(columns);
$(document).ready(chart);