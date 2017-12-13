$(document).ready(function() {

    var timeleft = 30;
    var downloadTimer = setInterval(function(){
    timeleft--;

    document.getElementById('timer').textContent = timeleft;
    
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000)
  });
