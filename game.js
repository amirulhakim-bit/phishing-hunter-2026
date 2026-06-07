const API_URL = "YOUR_GOOGLE_SCRIPT_URL";

function addScore(points){
    let score = parseInt(localStorage.getItem("score"));
    score += points;
    localStorage.setItem("score", score);
}

function submitAnswer(station, answer, correct){

    let team = localStorage.getItem("team");
    let score = parseInt(localStorage.getItem("score"));

    if(answer === correct){
        score += 10;
        localStorage.setItem("score", score);
    }

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            team: team,
            station: station,
            score: score,
            answer: answer
        })
    });
}