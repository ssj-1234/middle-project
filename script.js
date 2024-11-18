document.addEventListener("DOMContentLoaded", () => {
    const text1 = document.getElementById("text-1");
    const text2 = document.getElementById("text-2");
    let isText1Visible = true;

    // 2초마다 텍스트 전환
    setInterval(() => {
        if (isText1Visible) {
            text1.classList.remove("visible");
            text2.classList.add("visible");
        } else {
            text1.classList.add("visible");
            text2.classList.remove("visible");
        }
        isText1Visible = !isText1Visible;
    }, 2000);
});
