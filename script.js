function calculateResults() {
    var numSubjects = parseInt(prompt("Enter the number of subjects:"));

    if (isNaN(numSubjects) || numSubjects <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    var results = [];
    var totalScore = 0;

    for (var i = 1; i <= numSubjects; i++) {
        var result = parseFloat(prompt("Enter the result for Subject " + i + ":"));

        if (isNaN(result) || result < 0 || result > 100) {
            alert("Please enter a valid result between 0 and 100 for Subject " + i + ".");
            return;
        }

        results.push(result);
        totalScore += result;
    }

    var average = totalScore / numSubjects;
    var grade = calculateGrade(average);

    alert("Results: " + results.join(", ") +
          "\nOverall Average: " + average.toFixed(2) +
          "\nGrade: " + grade);
}

function calculateGrade(average) {
    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}
