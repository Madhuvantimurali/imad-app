console.log('Loaded!');
alert("HI, javaSCRIPT is working");
var element = document.getElementById('main-text');
element.innerHTML='Madhu is working';
//move an image
var img = document.getElementById('madi');
var marginLeft =0;

function moveRight(){
    marginLeft= marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};
