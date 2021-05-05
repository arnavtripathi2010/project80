function getparagraph1()
var inputs=[];
for (var i =1 ; i <= 6 ; i++)
{
    inputs.push(document.getElementById("div1_input_box" + i).value); 
    document.getElementById("showparagraph1").innerHTML= inputs.join(". ");
}

function getparagraph2()
var inputs=[];
for (var i =1 ; i <= 6 ; i++)
{
    inputs.push(document.getElementById("div2_input_box" + i).value); 
    document.getElementById("showparagraph2").innerHTML= inputs.join(". ");
}