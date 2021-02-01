/*
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update()
})


prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }

    update()
})


function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    } else if(currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }    
}
*/

var data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [5, 2, 4, 2, 0]
    ]
  };

  var options = {
    width: 300,
    height: 200
  };
  
  // Using donut, startAngle and total to draw a gauge chart
new Chartist.Pie('#chart1', {
    series: [20, 10, 30, 40]
  }, {
    donut: true,
    donutWidth: 20,
    startAngle: 270,
    total: 200
  });

  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object.
  new Chartist.Line('#chart2', data, options);
  new Chartist.Line('#chart3', data, options);
  new Chartist.Line('#chart4', data, options);