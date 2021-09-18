const angle1 = document.getElementById('angle-1')
const angle2 = document.getElementById('angle-2')
const angle3 = document.getElementById('angle-3')
const submit_button = document.getElementById('submit_button')
const result_section = document.getElementById('result_section')


submit_button.addEventListener('click',()=>{
    if(!angle1.value ||!angle2.value ||!angle3.value ){
        return result_section.innerHTML = "Invalid data 😶"
    }
    const angleTotal = Number(angle1.value)+ Number(angle2.value)+Number(angle3.value)
    if(angleTotal===180){
        return result_section.innerHTML = "Yay 😎! The angles form a triangle"
    }else{
        return result_section.innerHTML = "Opps 😕! The angles doesn't form a triangle"
    }
})