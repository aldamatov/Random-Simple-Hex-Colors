let button  = document.querySelector('button');
let spanElement = document.querySelector('span'); 
let colors = ['Red', 'Green', 'Blue', 'Orange', 'Yellow', 'Gold', 'Black', 'Purple', 'White', 'Skyblue'];
let hexElement = document.querySelector('#hex');
let simpleElement = document.querySelector('#simple');
let simpleMode = true;
let hexMode = false;
let mainElement = document.querySelector('main');


//Hex 
hexElement.addEventListener('click', function(){
    simpleElement.classList.remove('active');
    hexElement.classList.add('active');
    hexMode = true;
    simpleMode = false;
});
//Simple
simpleElement.addEventListener('click', function(){
    hexElement.classList.remove('active');
    simpleElement.classList.add('active');


    simpleMode = true;
    hexMode = false;
})



//Flip Simple Background
button.addEventListener('click', flipBackgroundColor);

function flipBackgroundColor(){

    if (simpleMode){
        let randomColor = colors[Math.floor(Math.random()* colors.length)];
    spanElement.innerText = randomColor;
    mainElement.style.backgroundColor = randomColor;
    } else{
        let hexColor = "#" + Math.floor(Math.random() * 16777220).toString(16);


        spanElement.innerHTML = hexColor;
        mainElement.style.backgroundColor = hexColor;

    }
     
    
  
}
