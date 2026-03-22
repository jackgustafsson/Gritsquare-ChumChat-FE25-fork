import { auth } from "../firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
const formBody = document.querySelector(".form-body");

formBody.addEventListener("submit", async(e) => {
    e.preventDefault();

    const formData = new FormData(formBody);

    const email = formData.get("email");
    const password = formData.get("password");

    signInWithEmailAndPassword(auth, email, password);
    console.log(auth.currentUser);

});