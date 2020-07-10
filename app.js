var min = 0;
var sec = 0;
var msec = 0;
var minData = document.getElementById('min');
var secData = document.getElementById('sec');
var msecData = document.getElementById('msec');
var interval;

function timer(){
	msec++;
	msecData.innerHTML = msec;
	if (msec >= 100) {
		sec++;
		secData.innerHTML = sec;
		msec = 0;
	}
	else if (sec >= 60) {
		min++;
		minData.innerHTML = min;
		sec = 0;
	}
}

function start(){
	interval = setInterval(timer, 10)
	document.getElementById('start').disabled = true;	
}

function stop(){
	clearInterval(interval)
	document.getElementById('start').disabled = false;
}

function reset(){
	min = 0;
	sec = 0;
	msec = 0;
	minData.innerHTML = min;
	secData.innerHTML = sec;
	msecData.innerHTML = msec;
	clearInterval(interval)
	document.getElementById('start').disabled = false;
}