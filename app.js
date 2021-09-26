var inputAngle = document.querySelectorAll(".input-angle");
var isTriangleButton = document.querySelector("#is-triangle-button");
var outputDiv = document.querySelector("#output");
isTriangleButton.addEventListener("click",isTriangle)

function isTriangle(){
    var angle1 = Number(inputAngle[0].value);
    var angle2 = Number(inputAngle[1].value);
    var angle3 = Number(inputAngle[2].value);
  
    if(angle1 == 0 || angle2 == 0 || angle3 == 0){
        outputDiv.innerText = "Please Enter all required fields 🧐";
    }
    else if(angle1 < 0 || angle2 < 0 || angle3 < 0){
        outputDiv.innerText = "Please Enter positive values only 😐";
    }
    else{
    var sumAngles = calculateSumOfAngles(angle1,angle2,angle3);
    if(sumAngles == 180){
        showOutput("Yayy, the angles form a triangle");
    
    }
    else {
        showOutput("Oh no!, the angles do not form a triangle");
        
    }
}
}

function calculateSumOfAngles(angle1,angle2,angle3){
    var sum = angle1+angle2+angle3;
    return sum;
}

function hideOutput(){
    outputDiv.style.display = "none";
}

function showOutput(message) {
    outputDiv.style.display = "block";
    outputDiv.innerText = message;
    
}
