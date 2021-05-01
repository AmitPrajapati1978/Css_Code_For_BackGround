// var css = document.querySelector('ol');
var ul = document.querySelector("ul");



var color1= document.getElementById('color1');
var color2= document.getElementById('color2');
var body =document.getElementById('body');
var button=document.getElementById('Button');
var button1=document.getElementById('Button2');

// console.log(css,color1.value,color2.value)

function color_maker(){
	// console.log(color1.value);
	body.style.background="linear-gradient(to right,"
	+ color1.value 
	+","
	+color2.value
	+")";
	}


color1.addEventListener('input',color_maker);
color2.addEventListener('input',color_maker);

Button.addEventListener('click',function(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("body.style.background=linear-gradient(to right,"
	+ color1.value 
	+","
	+color2.value
	+");"));
	ul.appendChild(li);

})


Button2.addEventListener('click',function(){

	var remove_list=document.getElementsByTagName('li');   // Get the <ul> element with id="myList"
	while(true){
		ul.removeChild(remove_list[0]);
	} 
})




