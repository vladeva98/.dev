console.log("Connected");
console.log("Connected");



function startCountDown(){
    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;
    var seconds = document.getElementById("seconds").value;

    var totalSeconds = hours*3600 + minutes*60 + seconds;
    var countdown = document.getElementById("countdown");

    setInterval(function(){
        totalSeconds--;

        var hours = Math.floor(totalSeconds/3600);
        var minutes = Math.floor((totalSeconds-hours*3600)/60);
        var seconds = totalSeconds - hours *3600 - minutes*60;

        hours = hours<10?"0" + hours : hours;
        minutes = minutes<10?"0" + minutes:minutes;
        seconds= seconds<10?"0" + seconds:seconds

        countdown.innerHTML=hours +":"+minutes+":"+seconds;

        if(totalSeconds <=0){
            clearInterval();
            countdown.innerHTML = "Countdown complite";
        }
    },1000);

}