document.addEventListener("DOMContentLoaded", () => {
    const emojiList = document.getElementById("emoji-list");
    const toggleBtn = document.getElementById("emoji-toggle-btn");
    const messageInput = document.querySelector(".message-area");
    if (toggleBtn && emojiList) {
        toggleBtn.addEventListener("click", () => {
            if (emojiList.style.display === "none") {
                emojiList.style.display = "flex"; // Öppna
            } else {
                emojiList.style.display = "none"; // Stäng
            }
        });
    }
  if (emojiList && messageInput) {
        const emojis = emojiList.querySelectorAll("span");

        emojis.forEach(emoji => {
            emoji.addEventListener("click", () => {
                messageInput.value += emoji.innerText;
                messageInput.focus();
            });
        });
    }
});