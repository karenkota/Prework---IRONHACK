// Rover Object Goes Here
// ======================
// DIRECTIONS & MOVIMENT
// N-10, W-1, E+1, S+10
// ======================

function North (){
  console.log ("turnNorth was called!");
  var x=0;
  for (i=1; i<=100; i=i+1){
    if (document.getElementById("cel"+i).innerHTML == '<img class="rover" src="./Images/rover.png">'){
      
      // para posicao final:
      // x=i-10;
      // se x igual a ultima posicao cel 100, ele retorna para a cel 1
      // if (x==100){
      //    x = x-99;
      // }
 
      // funcao para obstaculos ET:
      if (i==43){
        alert("WATCH OUT!!! Have a E.T. in your route!");
        break;
      }

      // funcao para buraco-negro:
      if (i==96){
        alert("BLACK-HOLE IN WAY!!!");
        document.getElementById("cel96").innerHTML = "";
        document.getElementById("cel14").innerHTML = '<img class="rover" src="./Images/rover.png">';
        break;
      }
      if (i==34){
        alert("BLACK-HOLE IN WAY!!!");
        document.getElementById("cel34").innerHTML = "";
        document.getElementById("cel76").innerHTML = '<img class="rover" src="./Images/rover.png">';
        break;
      }
    
      // verifica posicao, limita o movimento em cel>10 e declara sua posicao final (i-10):
      if (i>10){
        document.getElementById("cel"+i).innerHTML = "";
        document.getElementById("cel"+ (i-10)).innerHTML = '<img class="rover" src="./Images/rover.png">';
        break;
      }
    }
  } 
}
  function South (){
  console.log ("turnSouth was called!")
  
  for (i=1; i<=100; i=i+1){
    if (document.getElementById("cel"+i).innerHTML == '<img class="rover" src="./Images/rover.png">'){
      
      if (i==23){
        alert("WATCH OUT!!! Have a E.T. in your route!");
        break; 
      }

      if (i==76){
        alert("BLACK-HOLE IN WAY!!!");
        document.getElementById("cel76").innerHTML = "";
        document.getElementById("cel34").innerHTML = '<img class="rover" src="./Images/rover.png">';
        break;
      }
      if (i==14){
        alert("BLACK-HOLE IN WAY!!!");
        document.getElementById("cel14").innerHTML = "";
        document.getElementById("cel96").innerHTML = '<img class="rover" src="./Images/rover.png">';
        break;
      }
      if (i<90){
        document.getElementById("cel"+i).innerHTML = "";
        document.getElementById("cel"+ (i+10)).innerHTML = '<img class="rover" src="./Images/rover.png">';
        break;
      }  
    }
  }
}
function West (){
  console.log ("turnWest was called!");
  
  for (i=1; i<=100; i=i+1){
    if (document.getElementById("cel"+i).innerHTML == '<img class="rover" src="./Images/rover.png">'){
      
      if (i==34){
        alert("WATCH OUT!!! Have a E.T. in your route!");
        break; 
      }
      if (i==25){
        alert("BLACK-HOLE IN WAY!!!");
        document.getElementById("cel25").innerHTML = "";
        document.getElementById("cel85").innerHTML = '<img class="rover" src="./Images/rover.png">';
        break;
      }
      if (i==87){
        alert("BLACK-HOLE IN WAY!!!");
        document.getElementById("cel87").innerHTML = "";
        document.getElementById("cel23").innerHTML = '<img class="rover" src="./Images/rover.png">';
        break;
      }
    
       if (i!=1 && i!=11 && i!=21 && i!=31 && i!=41 && i!=51 && i!=61 && i!=71 && i!=81 && i!=91){
        document.getElementById("cel"+i).innerHTML = "";
        document.getElementById("cel"+ (i-1)).innerHTML = '<img class="rover" src="./Images/rover.png">';
        break;
      }
    }
  }
 }

function East (){
  console.log ("turnEast was called!");
  
  for (i=1; i<=100; i=i+1){
    if (document.getElementById("cel"+i).innerHTML == '<img class="rover" src="./Images/rover.png">'){
      
      if (i==32){
        alert("WATCH OUT!!! Have a E.T. in your route!");
        break; 
      }
      if (i==23){
        alert("BLACK-HOLE IN WAY!!!");
        document.getElementById("cel23").innerHTML = "";
        document.getElementById("cel87").innerHTML = '<img class="rover" src="./Images/rover.png">';
        break;
      }
      if (i==85){
        alert("BLACK-HOLE IN WAY!!!");
        document.getElementById("cel85").innerHTML = "";
        document.getElementById("cel25").innerHTML = '<img class="rover" src="./Images/rover.png">';
        break;
      }
    
      if (i!=10 && i!=20 && i!=30 && i!=40 && i!=50 && i!=60 && i!=70 && i!=80 && i!=90 && i!=100){
        document.getElementById("cel"+i).innerHTML = "";
        document.getElementById("cel"+ (i+1)).innerHTML = '<img class="rover" src="./Images/rover.png">';
        break;
      }  
    }
  }
 }
