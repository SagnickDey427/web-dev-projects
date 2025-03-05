const loadText = document.querySelector(".loading-text")
const bg = document.querySelector(".bg")

let load =0

let interv = setInterval(blurry,30);
function blurry(){
    load++;
    if(load ==100){
        clearInterval(interv);
    }



    loadText.innerHTML=`${load} %`
    loadText.style.opacity = scale(load,0,100,1,0)

}

const scale = (num,in_min,in_max,out_min,out_max) =>((num-in_min)*(out_max-out_min))/(in_max-in_min) + out_min