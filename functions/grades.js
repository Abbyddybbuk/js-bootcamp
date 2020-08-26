let studentScore = 419
let maxScore = 500

let gradeCalculator = function(score, maxScore) {
   let percentage = (studentScore / maxScore) * 100
   let grade
   if (percentage >= 90) {
       grade = 'A'
   } else if ( percentage >= 80 && percentage <= 89) {
       grade = 'B'
   } else if ( percentage >=  70 && percentage <= 79) {
       grade = 'C'
   } else if ( percentage >= 60 && percentage <= 69) {
       grade = 'D'
   } else {
       grade = 'E'
   }

   return `You got a ${grade} (${percentage}%)!`
}

let calcGrade = gradeCalculator(studentScore, maxScore)
console.log(calcGrade)

