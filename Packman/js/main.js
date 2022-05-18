let packman = document.getElementById('packman');
let box = document.getElementById('box');

// mouse event>>>

box.addEventListener('click',function(e){
    packman.style.top= e.clientY+'px'
    packman.style.left= e.clientX+'px'
    
    console.log("mouse location:", e.clientX, e.clientY)
    }

)  


// keydown >>>


let speed = 3;
window.addEventListener('keydown',function(e){

    if(e.keyCode == 39){
        if((packman.offsetLeft+speed)<box.offsetWidth-packman.offsetWidth){
            packman.style.left = packman.offsetLeft+speed+'px';
        }
        else{
            packman.style.left = (box.offsetWidth-packman.offsetWidth)+'px'
        }
    }
    else if(e.keyCode == 37){
        if((packman.offsetLeft-speed)>0){
            packman.style.left = packman.offsetLeft-speed+'px';
        }
        else{
            packman.style.left =0+'px'
        }
    }
    else if(e.keyCode==38){
        if((packman.offsetTop-speed)>0){
            packman.style.top = packman.offsetTop-speed+'px';
        }
        else{
            packman.style.top=0+'px'
        }
    }
    else if(e.keyCode==40){
        if((packman.offsetTop+speed)<(box.offsetHeight-packman.offsetHeight)){
            packman.style.top = packman.offsetTop+speed+'px';
        }
        else{
            packman.style.top = box.offsetHeight-packman.offsetHeight+'px';
        }
    }

})