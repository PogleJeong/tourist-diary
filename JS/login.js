const user_id = document.getElementById("inputId");
const user_pw = document.getElementById("inputPW");
const enterAcc = document.querySelector("#inputText button");
const createAcc = document.querySelector("#sign-up button");
let user_info = [];

function openCreateAccount(event) {
    window.open("createAccount.html","Create your account!!","width=400, height=400, left=520, top=200"); //resizable=no 는 IE에서만 됨(보안상문제)
}
function enterAccount(event) {
    event.preventDefault();
}

createAcc.addEventListener("click", openCreateAccount);
enterAcc.addEventListener("click", enterAccount);
