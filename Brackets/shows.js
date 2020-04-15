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

    if(i%2 == 0){
      nextId++;
    }

  }
}

function ContenderMatch(object, contenderId, listenId, voteId, nextId) {
  console.table(object, contenderId, listenId, voteId, nextId);
  document.querySelector(contenderId).innerHTML = object.name;
  document.querySelector(listenId).href = object.url;
  document.getElementById(voteId).addEventListener("click", function(){ 
    vote(object, nextId);
  });
}

function vote(contender, nextId)
{
  alert("Voting for: " + contender.name + ". Goes to: " + nextId);
  document.querySelector("contender" + nextId).innerHTML = contender.name;
  document.querySelector("listen" + nextId).href = contender.url;
}

