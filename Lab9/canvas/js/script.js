var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
ctx2.moveTo(0, 0);
ctx2.lineTo(200, 100);
ctx2.stroke();

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");
ctx3.beginPath();
ctx3.moveTo(0, 0);
ctx3.lineTo(200, 100);
ctx3.lineWidth = 10;
ctx3.strokeStyle = "red";
ctx3.stroke();

var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext("2d");
ctx4.beginPath();
ctx4.arc(95, 50, 40, 0, 2 * Math.PI);
ctx4.stroke();

var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext("2d");
ctx5.rect(10, 10, 150, 100);
ctx5.stroke();

var c6 = document.getElementById("myCanvas6");
var ctx6 = c6.getContext("2d");
ctx6.fillStyle = "green";
ctx6.fillRect(10, 10, 100, 100);

var c7 = document.getElementById("myCanvas7");
var ctx7 = c7.getContext("2d");
ctx7.fillStyle = "green";
ctx7.fillRect(10, 10, 100, 100);
ctx7.strokeStyle = "blue";
ctx7.lineWidth = 5;
ctx7.strokeRect(10, 10, 100, 100);

var c8 = document.getElementById("myCanvas8");
var ctx8 = c8.getContext("2d");
ctx8.beginPath();
ctx8.moveTo(20, 20);
ctx8.lineTo(100, 20);
ctx8.lineTo(175, 100);
ctx8.lineTo(20, 100);
ctx8.closePath();
ctx8.stroke();

var c9 = document.getElementById("myCanvas9");
var ctx9 = c9.getContext("2d");
ctx9.beginPath();
ctx9.moveTo(100, 20);
ctx9.lineTo(180, 100);
ctx9.lineTo(20, 100);
ctx9.closePath();
ctx9.stroke();

var c10 = document.getElementById("myCanvas10");
var ctx10 = c10.getContext("2d");
ctx10.fillStyle = "pink";
ctx10.fillRect(10, 10, 150, 100);
ctx10.clearRect(60, 35, 50, 50);

var c11 = document.getElementById("myCanvas11");
var ctx11 = c11.getContext("2d");
ctx11.beginPath();
ctx11.arc(95, 50, 40, 0, Math.PI);
ctx11.fillStyle = "red";
ctx11.fill();
ctx11.stroke();

var c12 = document.getElementById("myCanvas12");
var ctx12 = c12.getContext("2d");
ctx12.beginPath();
ctx12.arc(95, 50, 40, 0, 0.5 * Math.PI);
ctx12.stroke();

var c13 = document.getElementById("myCanvas13");
var ctx13 = c13.getContext("2d");
ctx13.beginPath();
ctx13.arc(95, 50, 40, 0, 0.5 * Math.PI, true);
ctx13.stroke();

var c14 = document.getElementById("myCanvas14");
var ctx14 = c14.getContext("2d");
ctx14.beginPath();
ctx14.moveTo(10, 100);
ctx14.quadraticCurveTo(250, 170, 230, 20);
ctx14.stroke();

var c15 = document.getElementById("myCanvas15");
var ctx15 = c15.getContext("2d");
ctx15.beginPath();
ctx15.moveTo(20, 20);
ctx15.bezierCurveTo(110, 150, 180, 10, 210, 140);
ctx15.stroke();

var c16 = document.getElementById("myCanvas16");
var ctx16 = c16.getContext("2d");
ctx16.font = "30px Arial";
ctx16.fillText("Hello World", 10, 50);

var c17 = document.getElementById("myCanvas17");
var ctx17 = c17.getContext("2d");
ctx17.font = "30px Arial";
ctx17.strokeText("Hello World", 10, 50);

var c18 = document.getElementById("myCanvas18");
var ctx18 = c18.getContext("2d");
var grd = ctx18.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx18.fillStyle = grd;
ctx18.fillRect(10, 10, 150, 80);

var c19 = document.getElementById("myCanvas19");
var ctx19 = c19.getContext("2d");
var grd2 = ctx19.createRadialGradient(75, 50, 5, 90, 60, 100);
grd2.addColorStop(0, "red");
grd2.addColorStop(1, "white");
ctx19.fillStyle = grd2;
ctx19.fillRect(10, 10, 150, 80);

var c20 = document.getElementById("myCanvas20");
var ctx20 = c20.getContext("2d");
ctx20.shadowColor = "lightblue";
ctx20.shadowOffsetX = 10;
ctx20.shadowOffsetY = 10;
ctx20.fillStyle = "blue";
ctx20.fillRect(20, 20, 100, 100);
ctx20.lineWidth = 4;
ctx20.strokeStyle = "blue";
ctx20.strokeRect(170, 20, 100, 100);

var c21 = document.getElementById("myCanvas21");
var ctx21 = c21.getContext("2d");
ctx21.shadowColor = "lightblue";
ctx21.shadowBlur = 8;
ctx21.shadowOffsetX = 10;
ctx21.shadowOffsetY = 10;
ctx21.fillStyle = "blue";
ctx21.fillRect(20, 20, 100, 100);
ctx21.lineWidth = 4;
ctx21.strokeStyle = "blue";
ctx21.strokeRect(170, 20, 100, 100);

var c22 = document.getElementById("myCanvas22");
var ctx22 = c22.getContext("2d");
ctx22.lineWidth = 4;

ctx22.beginPath();
ctx22.arc(150, 150, 100, 0, 2 * Math.PI);
ctx22.stroke();
ctx22.beginPath();
ctx22.arc(120, 120, 10, 0, 2 * Math.PI);
ctx22.stroke();
ctx22.beginPath();
ctx22.arc(180, 120, 10, 0, 2 * Math.PI);
ctx22.stroke();
ctx22.beginPath();
ctx22.arc(150, 160, 60, 0, Math.PI);
ctx22.stroke();
