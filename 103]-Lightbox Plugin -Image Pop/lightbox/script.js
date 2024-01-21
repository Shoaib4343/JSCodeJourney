// Function to include html popup code 

function includeHtmlPopup(){
    let HTML = '<div id="viv_pop_up"><span id="pop_up_cross" onclick="closePopUp()"><img id="viv_cross_cross" src="lightbox/images/cross.png" alt=""></span><img id="write" src="lightbox/images/write.png" alt=""><img id="left" src="lightbox/images/left.png" alt=""><img id="main_popup_image" src="../images/pexels-lumn-167684.jpg" alt=""></div>';

   let popdiv = document.createElement('div');
   
   popdiv.innerHTML = HTML;

   document.body.insertBefore(popdiv, document.body.firstChild);


}

let image;

function initImagePopup(target){

    // select all images with class names
    image = document.getElementsByClassName(target);

    // add event listeners on all selected images
    for(var i = 0; i < image.length; i++){
        image[i].style.cursor = 'pointer';

        // add event listeners
        image[i].addEventListener("click", function(){
            document.getElementById("main_popup_image").src = this.src;
            document.getElementById("viv_pop_up").style.display = "block";
            ChecArrow();
             if(image.length === 1 ){
                document.getElementById("left").style.display = "none";
                document.getElementById("write").style.display = "none";
            }
        });
    }


    includeHtmlPopup();



    // next button click
    document.getElementById("write").addEventListener("click", function(){
        next();
    });



     // prev button click
     document.getElementById("left").addEventListener("click", function(){
        prev();
    });

}


// close button function

function closePopUp(){
    document.getElementById("main_popup_image").src = "";
    document.getElementById("viv_pop_up").style.display = "none";

}

// next function
function next(){

    getCurrentiImage();
    current++;
    document.getElementById("main_popup_image").src = image[current].src;
    ChecArrow();

}    



// prev function
function prev(){  

    getCurrentiImage();
    current--;
    document.getElementById("main_popup_image").src = image[current].src;
    ChecArrow();
}



function getCurrentiImage(){
    for(var i=0;i<image.length;i++){
        if (image[i].src == document.getElementById("main_popup_image").src){
            current = i;
        }
    }
}


function ChecArrow(){
    getCurrentiImage();
    if(current == 0){
        document.getElementById("left").style.display = "none";
    }
    else if(current == image.length -1){
        document.getElementById("write").style.display = "none";
        
    }

    // else if(image.length === 1 ){
    //     document.getElementById("left").style.display = "none";
    //     document.getElementById("write").style.display = "none";
    // }


    else{
        
        document.getElementById("write").style.display = "block";
        document.getElementById("left").style.display = "block";
    }
}