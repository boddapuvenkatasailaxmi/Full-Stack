const student_marks = [90,97,94,74,86]
console.log(student_marks.push(76));
console.log(student_marks);
console.log(student_marks.pop());
console.log(student_marks);
console.log(student_marks.length);
console.log(student_marks.slice(1,3));
const submit = document.getElementById("submit");
submit.addEventListener("click", calculate_sum);
function calculate_sum(){
    let sum = 0;
    for(let i=0;i<student_marks.length;i++){
         sum+=student_marks[i];
    }
    console.log(sum);
}
function calc_avg(){
    let sum= 0;
    for(let i = 0;i<student_marks.length;i++){
        sum += student_marks[i]; 
    }
      avg = ((sum)/student_marks.length);
    console.log(avg);
}
calc_avg()