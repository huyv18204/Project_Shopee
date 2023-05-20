 var index = 0;
 var slide = document.getElementsByClassName('slide');

 function slideShow(){
        if(index > slide.length - 1){
            index = 0
        }
        if(index < 0){
            index = slide.length - 1
        }
        for(let i = 0; i < slide.length; i++){
            slide[i].style.display = "none";
        }
        slide[index].style.display = "block";
 }

 slideShow();

 function Next(){
    index++;
    slideShow();
 }
function After(){
    index --;
    slideShow();
}
var loop;
 function AutoLoop(){
    setInterval(function(){
        Next();
    },3000);
 }

 AutoLoop()
 
