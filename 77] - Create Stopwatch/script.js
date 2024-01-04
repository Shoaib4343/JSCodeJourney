let hr = 0;
let minut = 0;
let sec = 0;
let count = 0;

let time = false;





function start(){
    time = true;
    stopwatch();
}

function stop(){
    time = false;
    
}

function restart(){
    time = false;

    count = 0;
    sec = 0;
    min = 0;
    hr = 0;


    document.getElementById("mili-sec-dig").innerHTML = "00";
    document.getElementById("sec-dig").innerHTML = "00";
    document.getElementById("min-dig").innerHTML = "00";
    document.getElementById("hr-dig").innerHTML = "00";
}

function stopwatch(){
    if(time == true) {
        count += 1;

        if(count == 100){
            sec += 1;
            count = 0;
        }
        if(sec == 60){
            minut += 1;
            sec = 0;
        }

        if(min == 60){
            hr += 1;
            min = 0;
        }


        let stringhr = hr;
        let stringminut = minut;
        let stringsec = sec;
        let stringcount = count;

        if(stringcount < 10){
            stringcount = "0" +stringcount;
        }

        if(stringsec < 10){
            stringsec = "0" +stringsec;
        }

        if(stringminut < 10){
            stringminut = "0" +stringminut;
        }

        if(stringhr < 10){
            stringhr = "0" +stringhr;
        }


        document.getElementById("mili-sec-dig").innerHTML = stringcount;
        document.getElementById("sec-dig").innerHTML = stringsec;
        document.getElementById("min-dig").innerHTML = stringminut;
        document.getElementById("hr-dig").innerHTML = stringhr;

        setTimeout("stopwatch()", 10 );
    }
}