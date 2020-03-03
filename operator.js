function calculate() {
var a=parseInt(document.querySelector('.value1').value);
var b=parseInt(document.querySelector('.value2').value);
var operator=document.querySelector('.operator').value;
var result;

if(operator=='add'){
    result=a+b;
}
else if(operator=='min'){
    result=a-b;
}
else if(operator=='div'){
    result=a/b;
}else if(operator=='mul'){
    result=a*b;
}
document.querySelector('.result').innerHTML=result;
}
