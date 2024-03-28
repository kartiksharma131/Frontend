var hellobutton = document.getElementById('btn');


hellobutton.addEventListener('click',function () {
    alert('Hello World')
})

var outerDiv= document.getElementById('outer');
outerDiv.addEventListener('mouseover',function(){
    console.log("mosuse over");
})

outerDiv.addEventListener('mouseout',function(){
    console.log('mouse out');
})

var searchBox = document.getElementsByTagName('btn');
searchBox.addEventListener('keypress',function(){
    console.log("key pressed");
})


document.addEventListener('keypress',function(event){
    console.log('key pressed on document in ascii is ', event.keyCode);
})

