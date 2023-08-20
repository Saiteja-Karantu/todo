var inputbox=document.querySelector('#inputbox');
var tasks=document.querySelector('.tasks');




function addtext()
{
if(inputbox.value==="")
alert('write something in input field')
else{

var textbox=document.createElement('li');
textbox.innerHTML=inputbox.value;
tasks.appendChild(textbox);
var delbox=document.createElement('span');

var deltext=document.createTextNode("\u00d7");
delbox.appendChild(deltext);
textbox.appendChild(delbox);
inputbox.value="";
saveData();
tasks.addEventListener('click',function(e){
    if(e.target.tagName==="span")
    e.target.parentElement.remove()
})

}
}
tasks.addEventListener('click',function(e){
    if(e.target.tagName ==="SPAN")
    e.target.parentElement.remove();
saveData();
},);




function saveData()
{
localStorage.setItem('data',tasks.innerHTML);

}
function show(){
tasks.innerHTML=localStorage.getItem('data');
}
show();
