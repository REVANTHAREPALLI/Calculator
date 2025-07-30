function one(){
  document.getElementById("ip").value += 1;
}

function two(){
  document.getElementById("ip").value += 2;
}

function three(){
  document.getElementById("ip").value += 3;
}

function four(){
  document.getElementById("ip").value += 4;
}

function five(){
  document.getElementById("ip").value += 5;
}

function six(){
  document.getElementById("ip").value += 6;
}

function seven(){
  document.getElementById("ip").value += 7;
}

function eight(){
  document.getElementById("ip").value += 8;
}

function nine(){
  document.getElementById("ip").value += 9;
}
function zero(){
  document.getElementById("ip").value += 0;
}
function plus(){
  document.getElementById("ip").value += '+';
}
function minus(){
  document.getElementById("ip").value += '-';
}
function multiply(){
  document.getElementById("ip").value += '*';
}
function division(){
  document.getElementById("ip").value += '/';
}
function result(){
  const x=document.getElementById("ip").value;
document.getElementById("ip").value=eval(x)
}
function clearall(){
  document.getElementById("ip").value = '';
}
function clear2(){
const  x=document.getElementById("ip").value;
document.getElementById("ip").value = x.slice(0,-1)
}
