function metricBmiCalculator(weight, height)
{
    var bmi = weight/(Math.pow(height, 2));
    return Math.round(bmi);
}


function imperialBmiCalculator(weight, height)
{
    var bmi = (weight / Math.pow(height, 2)) * 703;
    return Math.round(bmi);
}

var system = prompt("Welcome to BMI Calculator. Do you use [1]Metric System, or [2]Imperial System?");
var weight = prompt("Enter your weight: ");
var height = prompt("Enter your height: ");

if(system == 1)
{
    //console.log("Your Metric BMI is: " + metricBmiCalculator(65, 1.8));
    alert("Your Metric BMI is: " + metricBmiCalculator(weight, height));
}
else
{
    //console.log("Your Imperial BMI is: " + imperialBmiCalculator(200, 76));
    alert("Your Metric BMI is: " + imperialBmiCalculator(weight, height));
}
