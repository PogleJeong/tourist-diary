const accountID = document.getElementById("id");
const accountPW = document.getElementById("pw");
const create = document.querySelector("#create-account-form buttom");


function createAcc(event) {
    event.preventDefault();
    const form = document.getElementById("create-account-form");
    let successTextBox = document.createElement('p');
    successTextBox.innerText = "Success to create account!!"
    form.appendChild(successTextBox);
    localStorage.setItem(accountID,accountPW);
    
    
}

create.addEventListener("submit",createAcc);