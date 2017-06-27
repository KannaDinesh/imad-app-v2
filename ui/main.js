console.log('Loaded!');

//Change the content//

var element = document.getElementById('change');
element.innerHTML = 'Keep Calm & Love the Life';

//Move the image on click
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    
}
img.onclick = function(){
    var interval = setInterval(moveRight,100);
};

