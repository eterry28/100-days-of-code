var shows;
var sortedShows;
var defaultChoice = 0;
let selectedBracket = getSelectedBracket(defaultChoice);
loadBracket(selectedBracket);

document.querySelector("#bracket-selector").addEventListener("change", function(){ 
  var choice = document.querySelector("#bracket-selector").value;
  clearSelections();
  var bracket = getSelectedBracket(choice);
  loadBracket(bracket);
});


function clearSelections()
{
  for(i=32; i<62; i++)
  {
    document.querySelector("#contender" + i).innerHTML = "";
    document.querySelector("#listen" + i).href = "";
    document.querySelector("#listen" + i).target = "";
    document.querySelector("#listen" + i).innerHTML = "";
  }
}

function loadBracket(selectedBracket)
{
  const request = async () => {
    const response = await fetch(selectedBracket);
    shows = await response.json();
    sortedShows = shows.sort(function (a, b) { return 0.5 - Math.random() });
    displayRound1(sortedShows);
  }
  request();
}

function getSelectedBracket(option)
{
  var selected = "shows.json";
  switch(option){
    case "1":
      selected = "60s.json";
      break;
    case "2":
      selected = "70s.json";
      break;
    default:
      break;
  }
  return selected;
}

function displayRound1(sortedShows) {
  let nextId = 32;
  for (i=0; i<32; i++) {  
    let Contender = sortedShows[i];
    Contender.id = i;
    Contender.selector = "#contender";
    Contender.listenSelector = "#listen";   
    Contender.nextId = nextId; 
    ContenderMatch(Contender);

    if(i%2 == 1){
      nextId++;
    }
  }
}

function ContenderMatch(Contender) {  
  document.querySelector(Contender.selector + Contender.id).innerHTML = Contender.name;
  document.querySelector(Contender.listenSelector + Contender.id).href = Contender.url;
  document.querySelector(Contender.listenSelector + Contender.id).target = "_blank";
  document.querySelector(Contender.listenSelector + Contender.id).innerHTML = '<i class="fas fa-volume-up"></i>';
  document.getElementById("contender"+Contender.id).addEventListener("click", function(){     
    vote(Contender);
  });
}

function vote(Contender)
{
  displayContenderContent(Contender);
    document.getElementById("contender"+Contender.nextId).addEventListener("click", function(){ 
    round2(Contender);
  });
}

function displayContenderContent(Contender)
{
  document.querySelector(Contender.selector + Contender.nextId).innerHTML = Contender.name;  
  document.querySelector(Contender.listenSelector + Contender.nextId).href = Contender.url;
  document.querySelector(Contender.listenSelector + Contender.nextId).target = "_blank";
  document.querySelector(Contender.listenSelector + Contender.nextId).innerHTML = '<i class="fas fa-volume-up"></i>';

}

function round2(Contender){
  switch(Contender.nextId){
    case 32:
      Contender.nextId += 16;
      break;
    case 33:
    case 34:
      Contender.nextId += 15;
      break;
    case 35:
    case 36:
      Contender.nextId += 14;
      break;
    case 37:
    case 38:
      Contender.nextId += 13;
      break;
    case 39:
    case 40:
      Contender.nextId += 12;
      break;
    case 41:
    case 42:
      Contender.nextId += 11;
      break;
    case 43:
    case 44:
      Contender.nextId += 10;
      break;  
    case 45:
    case 46:
      Contender.nextId += 9;
      break;  
    case 47:
      Contender.nextId += 8;
    default:
      break;
  }

  displayContenderContent(Contender);
  document.getElementById("contender"+Contender.nextId).addEventListener("click", function(){ 
    round3(Contender);
  });
}

function round3(Contender){  
  switch(Contender.nextId){
    case 48:
      Contender.nextId += 8;
      break;
    case 49:
    case 50:
      Contender.nextId += 7;
      break;
    case 51:
    case 52:
      Contender.nextId += 6;
      break;
    case 53:
    case 54:
      Contender.nextId += 5;
      break;
    case 55:
      Contender.nextId += 4;
      break;
    default:
      break;
  }

  displayContenderContent(Contender);
  document.getElementById("contender"+Contender.nextId).addEventListener("click", function(){ 
    round4(Contender);
  });
}


function round4(Contender){  
  switch(Contender.nextId){
    case 56:
      Contender.nextId += 4;
      break;
    case 57:
    case 58:
      Contender.nextId += 3;
      break;
    case 59:
      Contender.nextId += 2;
    default:
      break;
  }

  displayContenderContent(Contender);
  document.getElementById("contender"+Contender.nextId).addEventListener("click", function(){ 
    showWinner(Contender);
  });
}

function showWinner(Contender)
{
  var winner = document.getElementById("winner");
  winner.classList.add("winner");
  winner.innerHTML = Contender.name;

}