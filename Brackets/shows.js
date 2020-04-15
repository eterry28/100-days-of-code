var shows;
var sortedShows;

const request = async () => {

  const response = await fetch('shows.json');
  shows = await response.json();
  //console.log(shows);

  sortedShows = shows.sort(function (a, b) { return 0.5 - Math.random() });
  //console.log(sortedShows);
  displayRound1(sortedShows);
}

request();

function displayRound1(sortedShows) {
  let nextId = 32;
  for (i=0; i<32; i++) {
    
    let Contender = sortedShows[i];
    let contenderId = "#contender"+i;
    let listenId = "#listen"+i;
    let voteId = "vote"+i;
    ContenderMatch(Contender, contenderId, listenId, voteId, nextId);

    if(i%2 == 1){
      nextId++;
    }

  }
}

function ContenderMatch(object, contenderId, listenId, voteId, nextId) {
  //console.table(object, contenderId, listenId, voteId, nextId);
  document.querySelector(contenderId).innerHTML = object.name;
  document.querySelector(listenId).href = object.url;
  document.getElementById(voteId).addEventListener("click", function(){ 
    //document.querySelector(contenderId).classList.add("winner");
    vote(object, nextId);
  });
}

function vote(contender, nextId)
{
  //alert("Voting for: " + contender.name + ". Goes to: " + nextId);
  document.querySelector("#contender" + nextId).innerHTML = contender.name;  
  document.querySelector("#listen" + nextId).href = contender.url;
  document.getElementById("vote"+nextId).addEventListener("click", function(){ 
    //document.querySelector("#contender" + nextId).classList.add("winner");
    round2(contender, nextId);
  });
}

function round2(contender, lastId){
  let nextId = -1;  
  switch(lastId){
    case 32:
      nextId = lastId + 16;
      break;
    case 33:
    case 34:
      nextId = lastId + 15;
      break;
    case 35:
    case 36:
      nextId = lastId + 14;
      break;
    case 37:
    case 38:
      nextId = lastId + 13;
      break;
    case 39:
    case 40:
      nextId = lastId + 12;
      break;
    case 41:
    case 42:
      nextId = lastId + 11;
      break;
    case 43:
    case 44:
      nextId = lastId + 10;
      break;  
    case 45:
    case 46:
      nextId = lastId + 9;
      break;  
    case 47:
      nextId = lastId + 8;
    default:
      break;
  }

  //alert("Voting for: " + contender.name + ". Last ID: " + lastId + ". Goes to: " + nextId);
  document.querySelector("#contender" + nextId).innerHTML = contender.name;
  document.querySelector("#listen" + nextId).href = contender.url;
  document.getElementById("vote"+nextId).addEventListener("click", function(){ 
    round3(contender, nextId);
  });
}

function round3(contender, lastId){
  let nextId = -1; 
  switch(lastId){
    case 48:
      nextId = lastId + 8;
      break;
    case 49:
    case 50:
      nextId = lastId + 7;
      break;
    case 51:
    case 52:
      nextId = lastId + 6;
      break;
    case 53:
    case 54:
      nextId = lastId + 5;
      break;
    case 55:
      nextId = lastId + 4;
      break;
    default:
      break;
  }

  //alert("Voting for: " + contender.name + ". Last ID: " + lastId + ". Goes to: " + nextId);
  document.querySelector("#contender" + nextId).innerHTML = contender.name;
  document.querySelector("#listen" + nextId).href = contender.url;
  document.getElementById("vote"+nextId).addEventListener("click", function(){ 
    round4(contender, nextId);
  });
}


function round4(contender, lastId){
  let nextId = -1;
  console.table(contender);
  console.log("lastId: " + lastId);
  
  switch(lastId){
    case 56:
      nextId = lastId + 4;
      break;
    case 57:
    case 58:
      nextId = lastId + 3;
      break;
    case 59:
      nextId = lastId + 2;
    default:
      break;
  }

  alert("Voting for: " + contender.name + ". Last ID: " + lastId + ". Goes to: " + nextId);
  document.querySelector("#contender" + nextId).innerHTML = contender.name;
  document.querySelector("#listen" + nextId).href = contender.url;
  document.getElementById("vote"+nextId).addEventListener("click", function(){ 
    round3(contender, nextId);
  });
}