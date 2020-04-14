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
  for (i in sortedShows) {
    let Contender = sortedShows[i];
    let contenderId = "#contender"+i;
    let listenId = "#listen"+i;
    ContenderMatch(Contender, contenderId, listenId);
  }
}

function ContenderMatch(object, contenderId, listenId) {
  //console.table(object, contenderId, listenId);
  document.querySelector(contenderId).innerHTML = object.name;
  document.querySelector(listenId).href = object.url;
  
}

