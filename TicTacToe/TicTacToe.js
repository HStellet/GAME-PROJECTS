var val = [];
val = document.querySelectorAll("td");
var but = document.querySelector(".b");

for(let i=0;i<val.length;i++){

val[i].addEventListener("click",function(){
  let x = val[i].textContent;
  if(x =="")
  {
    val[i].textContent="X";
  }
  else if(x =="X")
  {
    val[i].textContent="O";
  }
  else {
    val[i].textContent="";
  }
});

}


but.addEventListener("click",function(){
  for(var i=0;i<val.length;i++)
  {
    val[i].textContent="";
  }
});
