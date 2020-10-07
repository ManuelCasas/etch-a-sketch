

function randomColor(){
    colors = ['red' , 'yellow', 'blue','orange','green','purple'];
    return colors[Math.floor(Math.random()*colors.length)];
}


function box(sideLength){
let totalGrids = (sideLength * sideLength);

if (sideLength > 100){
    alert("Side length has to be <= 100");
}
else{

    for (i=0; i<totalGrids; i++){
        let divNum = document.createElement('div');
        divNum.setAttribute('id', 'D'+i);
        let divContent = document.createTextNode('');
        divNum.appendChild(divContent);
        container.appendChild(divNum);
        divNum.style.backgroundColor = 'gray';
        divNum.style.width=(960/sideLength)+ 'px';
        divNum.style.height=(960/sideLength)+ 'px';
    
    }
}
}
box(16);
draw();

let divContainer = document.querySelectorAll("div[id^='D']");

function draw(){
    const elements = document.querySelectorAll("div[id^='D']");
    elements.forEach(function(element){
        element.addEventListener('mouseover',function(event){
            event.target.style.background = randomColor();
        })
    })
    
}
    

document.querySelector('#reset').addEventListener('click', function(){
    container.innerHTML="";
    let side = prompt('What will be the length of your new square grid?')
    box(side);
    draw();

   
})
