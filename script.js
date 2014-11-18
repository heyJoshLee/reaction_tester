
var score = 0;
var playing = false;

var randomColor = '#0000';

var createdTime = 0;
var clickedTime = 0;

var colorArray = ['#2ecc71', '#e74c3c', '#f1c40f', '#34495e', '#2980b9', '#8e44ad', '#95a5a6', '#16a085'];


document.getElementById('start').onclick = function () {
    if (!playing) {
        this.style.visibility = 'hidden';
        
        document.getElementById('centerDiv').style.visibility = 'hidden';
        document.getElementById('score').style.visibility = 'hidden';
        document.getElementById('box').style.visibility = 'hidden';
        document.getElementById('start').style.visibility = 'hidden';

        
        setTimeout(function () {
            document.getElementById('box').style.visibility = "visible";
            document.getElementById('box').innerHTML = "<span id='clickMe'>Click Me</span>";
            createdTime = Date.now();
            document.getElementById('box').style.backgroundColor = colorArray[Math.floor((Math.random() * colorArray.length))];
        }, Math.random() * 3000);
        playing = true;
    }
};


document.getElementById('box').onclick = function () {
    if (playing) {
        playing = false;
        clickedTime = Date.now();
        score = (clickedTime - createdTime) / 1000;
        document.getElementById('score').innerHTML = score + ' seconds';
        document.getElementById('score').style.visibility = 'visible';
        document.getElementById('start').style.visibility = 'visible';
        document.getElementById('centerDiv').style.visibility = 'visible';
    }
};