//Part 1 — Grade Validator

//1.1   isValidScore(score)

function isValidScore(score){
    if(score === undefined || score === null || score === "" ) {
        console.log("Warning: no score provided");
        return false;
    }
    else if ( score > 0 && score <= 100){
        return true;
    } else {
        return false;
    }
}

console.log("//1.1   isValidScore(score)")
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

console.log("//1.2   calculateGrade(score)");
console.log(getLetterGrade(92));       
console.log(getLetterGrade(58));       
console.log(getLetterGrade(58, 60));   
console.log(getLetterGrade(110)); 

// 1.3   The == vs === trap

const formScore = "85";

console.log("// 1.3   The == vs === trap");
console.log(formScore == 85);    // ?
console.log(formScore === 85);   // ?
console.log(isValidScore(formScore));  // does your function handle this correctly?

// Part 2 — Score Calculators

// 2.1   calculateAverage(s1, s2, s3, s4 = 0, count = 3)

const calculateAverage = (s1, s2, s3, s4 = 0, count = 3) => {
    const averege = (s1 + s2 + s3 + s4)/count;
    return averege.toFixed(2);
    
}

console.log(calculateAverage(70, 80, 90));
console.log(calculateAverage(70, 80, 90, 100, 4));
console.log("2.2   calculateWeightedScore(exam, homework, bonus = 0)")

// 2.2   calculateWeightedScore(exam, homework, bonus = 0)

const calculateWeightedScore = (exam, homework, bonus = 0) => {
    const finalScore = (exam * 0.6) + (homework * 0.4) + bonus;
    return finalScore.toFixed(2);
}

console.log(calculateWeightedScore(80, 90));         // 0.6*80 + 0.4*90 + 0 = 84.00
console.log(calculateWeightedScore(80, 90, 5));      // 84 + 5 = 89.00
console.log(calculateWeightedScore(55, 70, 0));      // 0.6*55 + 0.4*70 = 61.00
 
// 2.3   isEligibleForRetake(score, attendance)

const isEligibleForRetake = (score ,  attendance) => {
    return score < 60 && attendance >= 75;
}

console.log(isEligibleForRetake(45, 80));
console.log(isEligibleForRetake(45, 60));
console.log(isEligibleForRetake(75, 80));

// Part 3 — Score Processor

// 3.1   processScore(score, callback)


const processScore = function(score, callback) {
  if (!isValidScore(score)) {
    console.log("Error , invalid score");
    return null;
  }
  return callback(score);
};
 
// Test with different callbacks:
console.log(processScore(78, getLetterGrade));
// "B"
 
console.log(processScore(78, score => score >= 60 ? "Pass" : "Fail"));
// "Pass"
 
console.log(processScore(78, score => Math.round(score * 1.1)));
// 86  (10% bonus applied)
 
console.log(processScore(110, getLetterGrade));
// Error: invalid score. → null


// 3.2   applyToAll(s1, s2, s3, callback)

function applyToAll(s1 ,s2 ,s3 , callback) {
    console.log(`Score ${s1} :  ${callback(s1)}`);
    console.log(`Score ${s2} :  ${callback(s2)}`);
    console.log(`Score ${s3} :  ${callback(s3)}`);
}

console.log("3.2   applyToAll(s1, s2, s3, callback)");
applyToAll(55, 72, 91, getLetterGrade);
applyToAll(55, 72, 91, score => score >= 60 ? "Pass" : "Fail");


// Part 4 — Score Tracker

function createTracker(subjectName, passingScore = 60) {
  let count   = 0;
  let total   = 0;
  let highest = 0;
  let lowest  = 100;
 
  return function(score) {
    if (!isValidScore(score)) {
        console.log(`${subjectName}  Error : invalid score`)
        return;
    }
    count ++;
    total += score;
    if (score > highest) {
        highest = score;
    }
    if (score < lowest) {
        lowest = score;
    }

    const avg = (total / count).toFixed(2);   

    // const avg = calculateAverage(total, 0, 0, 0, count);  


    const status = score >= passingScore ? "Pass " : "Fail" 

    console.log(`${subjectName} #${count} score: ${score} avg: ${avg} hight ${highest} low: ${lowest} -> ${status}`)

  };
}

const mathTracker = createTracker("Mathematics");

(mathTracker(78));
(mathTracker(45));
(mathTracker(92));
console.log('Bonus — The Final Report')

// Bonus — The Final Report

function  printStudentReport(name, exam, homework, attendance, bonus) {
    let finalScore = calculateWeightedScore(exam, homework, bonus);
    let grade= getLetterGrade(finalScore)
    let retake = isEligibleForRetake(finalScore, attendance) ? "YES" : "No"


    console.log(`Student: ${name}
------------------------------
Exam:       ${exam}   (weight: 60%) 
Homework:   ${homework}   (weight: 40%)
Bonus:       ${bonus}    pts 
Final score: ${finalScore} 
Grade:       ${grade}
Attadence:   ${attendance}% 
Retake:      ${retake}
================================`)
}


printStudentReport("Petra Novak", 10,18, 81, 3);