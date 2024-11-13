let calculation = "";
function print (unit)
{
    calculation+=unit
    console.log(calculation);
    document.getElementById('result').innerHTML = `${calculation}`
}
