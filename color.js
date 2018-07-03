function colorhsl(){
    var h = document.hsl.h.value;
    var s = document.hsl.s.value;
    var l = document.hsl.l.value;
    var c = "hsl("+ h + ", " + s + "%, " + l +"%)";
    document.body.style.backgroundColor = c;
    document.color.hsv.value = c;
    var r, g, b;
    var rgb =hsvToRgb(Number(h), Number(s)/100, Number(l)/100);
    r = rgb[0];
    g = rgb[1];
    b = rgb[2];
    c = "rgb(" + r + ","+ g+ "," + b + ")";
    document.color.rgb.value= c;
    document.color.rrggbb.value = "#" + toHex(r) + toHex(g) + toHex(b);    
}

function colorrgb(){
    var r = document.rgb.r.value;
    var g = document.rgb.g.value;
    var b = document.rgb.b.value;
    var c = "rgb(" + r + ","+ g+ "," + b + ")"
    document.body.style.backgroundColor = c;
    document.color.rgb.value= c;
    document.color.rrggbb.value = "#" + toHex(r) + toHex(g) + toHex(b);
}

function toHex(i){
    var n = Number(i).toString(16);
    if(i < 16){
        n = "0" + n;
    }
    return n;
}

function hsvToRgb(H,S,V) {

    var C = V * S;
    var Hp = H / 60;
    var X = C * (1 - Math.abs(Hp % 2 - 1));

    var R, G, B;
    if (0 <= Hp && Hp < 1){
        R=C;
        G=X;
        B=0;
    }
    if (1 <= Hp && Hp < 2) {
        R=X;
        G=C;
        B=0;
    }
    if (2 <= Hp && Hp < 3) {
        R=0;
        G=C;
        B=X;
    }
    if (3 <= Hp && Hp < 4) {
        R=0;
        G=X;
        B=C;
    }
    if (4 <= Hp && Hp < 5) {
        R=X;
        G=0;
        B=C;
    }
    if (5 <= Hp && Hp < 6) {
        R=C;
        G=0;
        B=X;
    }

    var m = V - C;
    R = R+m;
    G = G+m;
    B = B+m;

    R = Math.floor(R * 255);
    G = Math.floor(G * 255);
    B = Math.floor(B * 255);

    return [R ,G, B];
}