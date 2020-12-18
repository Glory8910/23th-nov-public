
function create(name, element, classname, idname) {
  var name = document.createElement('element');
  name.classList("class", classname)
  name.setAttribute("id", idname);

}

var screen = document.getElementById('displayarea')


var presentvalue = ' ';
var previousval = 0;
var operators = ' ';
let screenval = '';



console.log('value', presentvalue, operators)
screen.innerHTML = presentvalue;


let exp = [];

document.getElementById('all').addEventListener('click', call, false)
let array = [];
function call(e) {
  let val = ' '
  if (e.target !== e.currentTarget && e.target.innerHTML !== "M-" && e.target.innerHTML !== "M+" && e.target.innerHTML !== "=" &&  e.target.innerHTML !== "X") {
   
   
    val = e.target.innerHTML;

    presentvalue = presentvalue + val;
    screen.innerHTML = presentvalue;

  }
   array.push(screen.innerHTML)
 
  if (e.target.innerHTML === "X") {
    console.log(exp,'am exp');
    console.log(screen.innerHTML,'yse',array);
    array.pop();
    array.pop()
    console.log(array,"aft pop")
    if(array.length!==0){
    presentvalue=array[array.length-1];
  }
  else if(array.length===0){
    presentvalue="";
  }
  
    screen.innerHTML=presentvalue;
    console.log(typeof screen.innerHTML)


  }


  if (e.target.innerHTML === "=") {

    exp.push(screen.innerHTML);


    pae(exp);
    console.log(pae(exp))
    previousval = presentvalue;
    presentvalue = pae(exp);
    screen.innerHTML = presentvalue


  }

  
  if (e.target.innerHTML === "AC") {

   
    previousval = "";
    presentvalue = "";
    screen.innerHTML = presentvalue;


  }


  console.log(exp)

  let valtostore="";
  if (e.target.innerHTML === "M+"){
    valtostore=presentvalue
    sessionStorage.setItem("screen",valtostore);
    
    }
    else if(e.target.innerHTML==="M-"){
      sessionStorage.getItem('screen');
     
     presentvalue= sessionStorage.getItem('screen');
     screen.innerHTML=screen.innerHTML+presentvalue
    
    }

 
}


function pae(strr) {

  return Function(` return (${strr})`)()

}


