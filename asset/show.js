
window.onload = function(){
   let theshow= document.getElementById('theshow');

    let colors = theshow.getElementsByTagName('li');

    for(let i=0;i<colors.length;i++){                          
        colors[i].addEventListener('click',showColor,false);
    };
    for(let j = 0;j<=colors.length;j = 2+j){
        colors[j].style.color='red';
    }
    //for(let l = 1;l=colors.length;l = 2+l){
    //    colors[l].style.color='green';

    function showColor(e){

        let  x = e.target;

        alert("The color is " + x.innerHTML);

    }
}












