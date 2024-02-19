let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;




let Start = () =>{
    timer = true;
    Stop_Watch();
}

let Stop = () =>{
    timer = false;
}

let Restart = () =>{
    timer = false;
     hr = 0;
     min = 0;
     sec = 0;
     count = 0;
    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00" ;
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hr").innerHTML =  "00";
}

let Stop_Watch = () =>{
    if(timer == true){
        count += 1;
        if(count == 100){
            sec +=1;
            count = 0;
        }
        if(sec == 60){
            min += 1;
            sec = 0;
        }
        if(min == 60){
            hr += 1;
            min = 0;
        }

        let strhr = hr;
        let strmin = min;
        let strsec = sec;
        let strcount = count;

        if(strhr < 10){
            strhr = "0" + strhr;
        }
        if(strmin < 10){
            strmin = "0" + strmin;
        }
        if(strsec < 10){
            strsec = "0" + strsec;
        }
        if(strcount < 10){
            strcount = "0" + strcount;
        }
        

        
        

        document.getElementById("count").innerHTML = strcount;
        document.getElementById("sec").innerHTML = strsec;
        document.getElementById("min").innerHTML = strmin;
        document.getElementById("hr").innerHTML = strhr;



        setTimeout(Stop_Watch,10);
    }
}