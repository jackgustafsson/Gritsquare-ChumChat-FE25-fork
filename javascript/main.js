import { auth, reference, db, messagesRef, repliesRef } from "./firebase.js";
import { push, set, onValue, remove, ref, get } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

import { RenderMessages } from "./RenderFunctions/RenderMessages.js"

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Logged in user:", user.uid, user.email);
    } else {
        console.log("No user logged in");
    }
});

const hello = onValue(reference, snapshot => {
    const data = snapshot.val();

    document.querySelector(".chat-container").innerHTML = "";  

    const messages = data.messages;
    const users = data.users;

    RenderMessages(users, messages)
    console.log(messages)
})

onValue(messagesRef, snapshot => {
    hello();
})

