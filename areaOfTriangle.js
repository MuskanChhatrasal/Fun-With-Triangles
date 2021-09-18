const first_side = document.querySelector('#first_side')
const second_side = document.querySelector('#second_side')
const third_side = document.querySelector('#third_side')
const submit_button = document.getElementById('submit_button')
const result_section = document.getElementById('result_section')



function calculateArea(e) {
    e.preventDefault();
  
    const firstSideValue = Number(first_side.value);
    const secondSideValue = Number(second_side.value);
    const thirdSideValue = Number(third_side.value);
  
    if (
      firstSideValue + secondSideValue > thirdSideValue &&
      secondSideValue + thirdSideValue > firstSideValue &&
      firstSideValue + thirdSideValue > secondSideValue
    ) {
      const semiPerimeter =
        (firstSideValue + secondSideValue + thirdSideValue) / 2;
  
      const result = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - firstSideValue) *
          (semiPerimeter - secondSideValue) *
          (semiPerimeter - thirdSideValue)
      ).toFixed(4);
      result_section.innerText = `Area of a triangle using heron's formula is ${result} units`;
    } else {
        result_section.innerText = "Enter invalid side lengths";
    }
  }
  
  submit_button.addEventListener("click", calculateArea);