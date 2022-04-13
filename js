var count=3;
var setcount = setInterval(function() 
{
if(count<=3 && count>0)
{
    count=count-1;
    parseInt(count);
    $(".countdownn").html(count);
    count = $(".countdownn").html();
} 
else {
$(".countdown").css("display","none");}},1000);

//I wrote 14 because in the opening part, program count 4 seconds and timer automatically begin from 6.th second
var time=14;
var settime = setInterval(function()
{  
if(time<=14 && time>0)
{
    time=time-1;
    parseInt(time);
    $(".time").html(time);
    time = $(".time").html();
}  
else {
$(".settimer").css("display","");}},1000);

function rnd(rand1,rand2) {
    return Math.floor(Math.random()* (rand2-rand1+1)+rand1);
}

