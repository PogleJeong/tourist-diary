const user_id = document.getElementById("inputId");
const user_pw = document.getElementById("inputPW");
const enterAcc = document.querySelector("#inputText button");
const createAcc = document.querySelector("#sign-up button");
let user_info = [];

function createAccount(event) {
    event.preventDefault();
}
function enterAccount(event) {
    event.preventDefault();
}

createAcc.addEventListener("click", createAccount);
enterAcc.addEventListener("click", enterAccount);
