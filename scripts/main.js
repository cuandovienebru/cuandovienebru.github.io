// var clock = $('.your-clock').FlipClock({
// // ... your options here
// });

var date = new Date("November 24, 2016 10:25:00");
var now = new Date();
var diff = (date.getTime()/1000) - (now.getTime()/1000);

var clock = $('.your-clock').FlipClock(diff,{
    clockFace: 'DailyCounter',
    countdown: true
}); 