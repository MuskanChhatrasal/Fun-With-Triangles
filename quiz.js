const input_section = document.querySelector('.input_section')
const result_section = document.getElementById('result_section')
const submit_button = document.getElementById('submit_button')

const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "45°",
    "no",
    "Equilateral triangle",
];

function calculateScore() {
    const formResults = new FormData(input_section);
    let score = 0
    correctAnswers.map((value,index)=>{
        if(formResults.get(`${"option"+(1+index)}`) === value){
            score = score +1
        }
    })
    if(score===0){
        result_section.innerText = "You have not attempted any question!"
        result_section.style['color']="red"
    }else{
        result_section.innerText = "The score is " + score
    }
   
}

submit_button.addEventListener('click',calculateScore)