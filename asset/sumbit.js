window.onload = function(){
    let thetxt = document.getElementById('write')
    let show = document.getElementById('show');
    let Ul = document.createElement("ul"); 
    show.appendChild(Ul);
    const clike = document.getElementById('czx')
    clike.onclick = function(){
        let write = thetxt.value;
        let Li = document.createElement('li')
        show.appendChild(Li)
        Li.innerText = write;
        
    }
}