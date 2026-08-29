const scores = [45, 80, 65, 92, 30, 75];

const passedScores = scores.filter((score) => {
    return score >= 60;
});
console.log("Passed:", passedScores);

const gradedScores = passedScores.map((score) => {
    return score * 1.1;
});

console.log("Final Graded Scores:", gradedScores);
