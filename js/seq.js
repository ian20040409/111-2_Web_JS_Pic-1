//循序播放陣列中指定的圖檔
var jslmg = new Array("images/OOl.jpg","images/OO2.jpg","images/OO3.jpg","images/OO4.jpg","images/OO5.jpg",)
var jslmg 1en = jslmg.length; //圖檔量

var i=0;

//設定每兩秒執行一次 sequent 主 此行要在 function 之外
setInterval ( "sequImg ( )",2000);
function sequImg() {  //循序播放
    document.getElementById("my_div").innerHTML = "<img src='"+jsImg[i]+"' width: 1140px>";
        i++;
        if (i>=jsTmg_len) i=0;
}