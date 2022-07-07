let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0];

let all_grades_div = document.getElementById("all-grades");
let search_grades_div = document.getElementById("search-grades");
let A_grades_div = document.getElementById("A-grades");
let bonus_grades_div = document.getElementById("bonus-grades");
let random_grade_div = document.getElementById("random-grade");

// grades.pop();
// console.log(grades)
grades.push(99);
console.log(grades)

// grades.forEach(
//   (grade,index)=>(all_grades_div.innerHTML+=   `<span> #${index}: ${grade} </span>`
//   )
// )

for (let i = 0; i < grades.length; i++) {
  all_grades_div.innerHTML+=   `<span> #${i}: ${grades[i]} </span>`

  
}


  
function search() {
  let inputValue = document.getElementById("input").value;
  let grade= grades.filter(grade=>grade==inputValue);

    search_grades_div.innerHTML = `<span> ${grade} </span>`
   
}


let grade = grades.filter(grade=>grade>90);
A_grades_div.innerHTML=`<span> ${grade} </span>`;





let bonusGrade = grades.map((grade=>grade+3));
bonus_grades_div.innerHTML = `<span>  ${bonusGrade} </span>`

// another way for map function
// const Grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0];
// let gradesBonus = Grades.map(myFunction)
// bonus_grades_div.innerHTML = `<span>  ${gradesBonus} </span>`

// function myFunction(value){
// return value+3
// }



let randomIndex = Math.floor(Math.random()*grades.length)
random_grade_div.innerHTML = `<span> #${randomIndex}: ${grades[randomIndex]} </span>`