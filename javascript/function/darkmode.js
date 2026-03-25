function darkMode() {
    const darkmodeButton = document.querySelector('#darkmodeButton');
    const main = document.querySelector('#main');
    const footer = document.querySelector('footer')
    const nav = document.querySelector('nav')
    const sendChatInputMessage = document.querySelector('.send-message')
    const sendChatInputArea = document.querySelector('.message-area')
   
    if (!darkmodeButton || !main) {
        console.error("Element saknas i DOM");
        return;
    }

    darkmodeButton.addEventListener('click', () => {
        main.classList.toggle("dark-mode");
        footer.classList.toggle('footer-dark')
        sendChatInputMessage.classList.toggle('send-message-dark')
        sendChatInputArea.classList.toggle('message-area-dark')
        nav.classList.toggle('nav-dark')

    });
}

darkMode();