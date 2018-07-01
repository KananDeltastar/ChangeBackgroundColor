function colorhsl(){
    var h = document.hsl.h.value;
    var s = document.hsl.s.value;
    var l = document.hsl.l.value;
    var c = "hsl("+ h + ", " + s + "%, " + l +"%)";
    document.body.style.backgroundColor = c;
}
function colorrgb(){
    var r = document.rgb.r.value;
    var g = document.rgb.g.value;
    var b = document.rgb.b.value;
    var c = "rgb(" + r + ","+ g+ "," + b + ")"
    document.body.style.backgroundColor = c;
}