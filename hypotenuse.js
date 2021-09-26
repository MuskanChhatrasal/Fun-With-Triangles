const base_value = document.querySelector('#base_value')
const height_value = document.querySelector('#height_value')
const result_section = document.getElementById('result_section')
const submit_button = document.getElementById('submit_button')




function calculateSumOfSquare(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}
  
function calculateHypotenuse() {
  if(!base_value.value || !height_value.value){
    return  result_section.innerText = "Enter valid data" 
  }else if(base_value.value <= 0 ||height_value.value <=0){
    return  result_section.innerText = "Please Enter Positive Value" 
  }else {
    const sumOfSquares = calculateSumOfSquare(
      Number(base_value.value),
      Number(height_value.value)
    )
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    result_section.innerText = "The length of hypotenuse is " + lengthOfHypotenuse;
  }
  
  
  }
  
submit_button.addEventListener("click", calculateHypotenuse);
