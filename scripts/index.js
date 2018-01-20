const formMessageCreation = document.querySelectorAll(".chat-box");



const escapeHtml = (unsafe)  => {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

for (let i = 0; i < formMessageCreation.length; i++) {
    formMessageCreation[i].addEventListener('keydown', (evt) => {
        let chatBoxFirst = formMessageCreation[i].querySelector(".create-message");

        let messages = formMessageCreation[i].querySelectorAll(".message_you");

        let usersText = messages[messages.length - 1].querySelectorAll(".message__your-text");

        if (evt.keyCode === 13) {
            let inputText = formMessageCreation[i].querySelector(".create-message__text").value;
            evt.preventDefault();
            inputText = escapeHtml(inputText);
            if (inputText.length > 0) {
                if (usersText.length === 1) {
                    usersText[0].classList.add('message__your-text_first');
                } else {
                    usersText[usersText.length - 1].classList.add('message__your-text_middle');
                    usersText[usersText.length - 1].classList.remove('message__your-text_last');
                }
                let item = `<p class="message__your-text message__your-text_last">${inputText}</p>`;
                if (inputText.length < 30) {
                    item = `<p class="message__your-text message__your-text_small message__your-text_last">${inputText}</p>`;
                }
                messages[messages.length - 1].innerHTML += item;

                messages[messages.length - 1].scrollTop = messages[messages.length - 1].scrollHeight;
                let elem = formMessageCreation[i].querySelector(".chat");
                elem.scrollTop = elem.scrollHeight;
                chatBoxFirst.reset();
            }
        }
        if (evt.keyCode === 27) {
            chatBoxFirst.reset();
        }
    }, false);
}




