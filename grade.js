//Part 1 — Grade Validator

//1.1   isValidScore(score)

function isValidScore(score){
    if(score === undefined || score === null) {
       console.warn("warning:no score provided.");
        return false;
    }
    if (typeof score !=="number" || score < 0 || score > 100){

        return false;
    }
    return true;

}

console.log(isValidScore(85));
console.log(isValidScore(101));
console.log(isValidScore(-5));
console.log(isValidScore(null));
console.log(isValidScore(0));


//1.2   calculateGrade(score)

function getLetterGrade(score, passingScore = 50) {
    if (!isValidScore(score)) {
        return "Invalid";
    }

    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 75 && score <= 89) {
        return "B";
    } else if (score >= 60 && score <= 74) {
        return "C";
    } else if (score >= passingScore && score <= 59) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getLetterGrade(92));       
console.log(getLetterGrade(58));       
console.log(getLetterGrade(58, 60));   
console.log(getLetterGrade(110));      


// 1.3   The == vs === trap

const formScore = "85";

console.log(formScore == 85);  
console.log(formScore === 85);   
console.log(isValidScore(formScore)); 


// Part 2 — Score Calculators
//  2.1   calculateAverage(s1, s2, s3, s4 = 0, count = 3)

function calculateAverage(s1, s2, s3, s4 = 0, count = 3) {
    const total = s1 + s2 +s3 +s4;
    const average = total / count;
    return average;
}

console.log(calculateAverage(70, 80, 90));
console.log(calculateAverage(70, 80, 90, 100, 4));

// 2.2   calculateWeightedScore(exam, homework, bonus = 0)

function calculateWeightedScore(exam, homework, bonus = 0) {
    
}