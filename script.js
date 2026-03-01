const quizData = [
    {
        correctIndex: 0,
        options: [
            { id: "0kQzjDaDxZM", start: 60, title: "한 페이지가 될 수 있게", artist: "DAY6" },
            { id: "kO8fAn_A0p8", start: 60, title: "예뻤어", artist: "DAY6" }
        ]
    },
    {
        correctIndex: 0,
        options: [
            { id: "yvHXYL9D5J0", start: 70, title: "마음짓기 (心做し)", artist: "majiko" },
            { id: "K9HrEhbE1vM", start: 60, title: "야생화", artist: "박효신" }
        ]
    },
    {
        correctIndex: 1,
        options: [
            { id: "I3U0QAXeOW4", start: 45, title: "예뻤어 (교차편집)", artist: "DAY6" },
            { id: "_78CYlWmigI", start: 45, title: "한 페이지가 될 수 있게 (교차편집)", artist: "DAY6" }
        ]
    }
];

let currentIndex = 0;
let currentScore = 0;
let isProcessing = false;

function renderQuiz() {
    const currentData = quizData[currentIndex];
    
    const videoUrl1 = `https://www.youtube.com/embed/${currentData.options[0].id}?start=${currentData.options[0].start}&autoplay=1&mute=1&loop=1&playlist=${currentData.options[0].id}`;
    document.getElementById('videoPlayer1').src = videoUrl1;
    document.getElementById('title1').innerText = currentData.options[0].title;
    document.getElementById('artist1').innerText = currentData.options[0].artist;

    const videoUrl2 = `https://www.youtube.com/embed/${currentData.options[1].id}?start=${currentData.options[1].start}&autoplay=1&mute=1&loop=1&playlist=${currentData.options[1].id}`;
    document.getElementById('videoPlayer2').src = videoUrl2;
    document.getElementById('title2').innerText = currentData.options[1].title;
    document.getElementById('artist2').innerText = currentData.options[1].artist;

    document.getElementById('feedback').innerText = "";
    isProcessing = false;
}

function submitAnswer(selectedIndex) {
    if (isProcessing) return;
    isProcessing = true;

    const feedbackText = document.getElementById('feedback');
    const correctIndex = quizData[currentIndex].correctIndex;

    if (selectedIndex === correctIndex) {
        currentScore++;
        document.getElementById('scoreDisplay').innerText = `현재 점수: ${currentScore}점`;
        feedbackText.style.color = "#4facfe";
        feedbackText.innerText = "정답입니다! 다음 문제로 이동합니다.";
    } else {
        feedbackText.style.color = "#ff4b2b";
        feedbackText.innerText = "틀렸습니다! 다음 문제로 이동합니다.";
    }

    setTimeout(() => {
        currentIndex++;
        if (currentIndex < quizData.length) {
            renderQuiz();
        } else {
            document.getElementById('quizContainer').style.display = 'none';
            feedbackText.style.color = "#ffffff";
            feedbackText.innerText = `모든 문제가 끝났습니다! 최종 점수: ${currentScore}점`;
        }
    }, 2000);
}

window.onload = renderQuiz;