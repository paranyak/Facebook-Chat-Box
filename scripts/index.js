
const formMessageCreation = document.querySelectorAll(".chat-box");


for (let i = 0; i < formMessageCreation.length; i++) {
    formMessageCreation[i].addEventListener('keydown', (evt) => {
        let chatBoxFirst = formMessageCreation[i].querySelector(".create-message");

        let messages = formMessageCreation[i].querySelectorAll(".message_you");

        let usersText = messages[messages.length - 1].querySelectorAll(".message__your-text");

        if (evt.keyCode === 13) {
            evt.preventDefault();
            console.log(usersText);
            if(formMessageCreation[i].querySelector(".create-message__text").value.length>0){
            if (usersText.length === 1) {
                usersText[0].classList.add('message__your-text_first');
            } else {
                usersText[usersText.length - 1].classList.add('message__your-text_middle');
                usersText[usersText.length - 1].classList.remove('message__your-text_last');
            }
            let item = `<p class="message__your-text message__your-text_last">${formMessageCreation[i].querySelector(".create-message__text").value}</p>`;
            if (document.querySelector(".create-message__text").value.length < 30) {
                item = `<p class="message__your-text message__your-text_small message__your-text_last">${formMessageCreation[i].querySelector(".create-message__text").value}</p>`;
            }
            messages[messages.length - 1].innerHTML += item;
            chatBoxFirst.reset();
        }}
        if(evt.keyCode === 27){
            chatBoxFirst.reset();
        }
    }, false);
}




