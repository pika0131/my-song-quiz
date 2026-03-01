const quizData = [
    { correctIndex: 0, options: [{ id: "_78CYlWmigI", start: 54, title: "한 페이지가 될 수 있게", artist: "DAY6" }, { id: "I3U0QAXeOW4", start: 57, title: "예뻤어", artist: "DAY6" }] },
    { correctIndex: 0, options: [{ id: "yvHXYL9D5J0", start: 70, title: "마음짓기 (心做し)", artist: "majiko" }, { id: "K9HrEhbE1vM", start: 72, title: "야생화", artist: "박효신" }] },
    { correctIndex: 1, options: [{ id: "46k6B-iRdo8", start: 55, title: "모든 날, 모든 순간", artist: "폴킴" }, { id: "AHOk3dG7w8Q", start: 65, title: "너의 모든 순간", artist: "성시경" }] },
    { correctIndex: 0, options: [{ id: "BzYnNdJhZQw", start: 50, title: "밤편지", artist: "아이유" }, { id: "nPTR0G_1E4w", start: 60, title: "사건의 지평선", artist: "윤하" }] },
    { correctIndex: 1, options: [{ id: "x815A21RIto", start: 62, title: "Congratulations", artist: "DAY6" }, { id: "M7J71FkZ-50", start: 60, title: "놓아 놓아 놓아", artist: "DAY6" }] },
    { correctIndex: 0, options: [{ id: "jOzXNEH3q1s", start: 53, title: "주저하는 연인들을 위해", artist: "잔나비" }, { id: "qJBq_x6A0pI", start: 60, title: "선물", artist: "멜로망스" }] },
    { correctIndex: 1, options: [{ id: "m3DZsBw5bnE", start: 63, title: "어떻게 이별까지...", artist: "AKMU" }, { id: "5iSlfF8IQiY", start: 60, title: "한숨", artist: "이하이" }] },
    { correctIndex: 0, options: [{ id: "6rS7PMGBCS4", start: 60, title: "첫눈처럼 너에게 가겠다", artist: "에일리" }, { id: "aI-KkFfE2vQ", start: 50, title: "You Are My Everything", artist: "거미" }] },
    { correctIndex: 0, options: [{ id: "8OuvqXkQ-Q8", start: 65, title: "Lemon", artist: "요네즈 켄시" }, { id: "0xWi8jCrXoM", start: 60, title: "마리골드", artist: "아이묭" }] },
    { correctIndex: 1, options: [{ id: "V31_7gA9bEE", start: 50, title: "녹아내려요", artist: "DAY6" }, { id: "fEsqE4_2x2s", start: 55, title: "Welcome to the Show", artist: "DAY6" }] }
];

let currentIndex = 0;
let currentScore = 0;

function renderQuiz() {
    const currentData = quizData[currentIndex];
    
    document.getElementById('videoPlayer1').src = `https://www.youtube.com/embed/${currentData.options[0].id}?start=${currentData.options[0].start}&autoplay=1&mute=1&loop=1&playlist=${currentData.options[0].id}`;
    document.getElementById('title1').innerText = currentData.options[0].title;
    document.getElementById('artist1').innerText = currentData.options[0].artist;

    document.getElementById('videoPlayer2').src = `https://www.youtube.com/embed/${currentData.options[1].id}?start=${currentData.options[1].start}&autoplay=1&mute=1&loop=1&playlist=${currentData.options[1].id}`;
    document.getElementById('title2').innerText = currentData.options[1].title;
    document.getElementById('artist2').innerText = currentData.options[1].artist;
}

function submitAnswer(selectedIndex) {
    const feedbackText = document.getElementById('message');
    const correctIndex = quizData[currentIndex].correctIndex;

    if (selectedIndex === correctIndex) {
        currentScore++;
        feedbackText.style.color = "#4facfe";
        feedbackText.innerText = "이전 문제: 정답! 🎉";
    } else {
        feedbackText.style.color = "#ff4b2b";
        feedbackText.innerText = "이전 문제: 땡! 오답 ㅠㅠ";
    }
    document.getElementById('scoreDisplay').innerText = `현재 점수: ${currentScore}점`;

    currentIndex++;
    if (currentIndex < quizData.length) {
        renderQuiz();
    } else {
        document.getElementById('quizArea').style.display = 'none';
        feedbackText.style.color = "#ffffff";
        feedbackText.innerText = `퀴즈 종료! 최종 점수: ${currentScore} / 10점`;
    }
}

window.onload = renderQuiz;