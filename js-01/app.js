
let result = document.getElementById('result')
let Score = prompt('Your Score:')
if (Score>=80) {
    result.innerHTML = "Your GPA = A"
}else if (Score>=70) {
    result.innerHTML = "Your GPA = B"
}else if (Score>=60) {
    result.innerHTML = "Your GPA = C"
}else if (Score>=50) {
    result.innerHTML = "Your GPA = D"
}else{
    result.innerHTML = "Your GPA = F"
}