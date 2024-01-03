let page = 0;

function controller(x){
    page += x;
    slidshow(page);
}

slidshow(page);

function slidshow(num){
    let slider = document.getElementsByClassName("slider");

    if(num == slider.length){
        page = 0;
        num = 0;
    }
    if(num < 0){
        page = slider.length-1;
        num = slider.length-1;
    }
    
    for(let img of slider){
        img.style.display = "none";
    }

    slider[num].style.display = "block";
}























// let page = 0;

// function controller(x){
//     page += x; 
//     slidshow(page);
// }

// slidshow(page);


// function slidshow(num){
//     let slider =document.getElementsByClassName("slider");
    
//     if(num == slider.length){
//         page = 0;
//         num = 0;
//     }
//     if(num < 0){
//         page = slider.length-1;
//         num = slider.length-1;
//     }

//     for(let y of slider){
//         y.style.display = "none";
//     }
//     slider[num].style.display = "block";
    

    

// }