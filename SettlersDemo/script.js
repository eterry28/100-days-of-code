var vault = document.getElementById('vault')
var beginTime, endTime = ""

vault.addEventListener('play', (e) => {
    beginTime = e.timeStamp;
})

vault.addEventListener('ended', (e) => {
    endTime = e.timeStamp;
    var time = (endTime - beginTime) / 1000;
    vault.remove();
    console.log(`Video has finished in ${time} seconds.`);
})