document.addEventListener("DOMContentLoaded", function () {
    let countdown = setInterval(function(){
        const now = new Date();  // 今の日時
        const target = new Date("2024/05/03 10:30:00");
        const remainTime = target - now;  // 差分を取る（ミリ秒で返ってくる）

        // 指定の日時を過ぎていたら処理をしない
        if (remainTime < 0) {
            clearInterval(countdown); // カウントダウンを停止
            document.getElementById("countdown-message").textContent = "開会されました！"; // メッセージを表示
            return;
        }

        // 差分の日・時・分・秒を取得
        const difDay = Math.floor(remainTime / 1000 / 60 / 60 / 24);
        const difHour = Math.floor(remainTime / 1000 / 60 / 60 ) % 24;
        const difMin = Math.floor(remainTime / 1000 / 60) % 60;
        const difSec = Math.floor(remainTime / 1000) % 60;

        // 残りの日時を上書き
        document.getElementById("countdown-day").textContent  = difDay;
        document.getElementById("countdown-hour").textContent = difHour;
        document.getElementById("countdown-min").textContent  = difMin;
        document.getElementById("countdown-sec").textContent  = difSec;

    }, 1000);    // 1秒間に1度処理
});

