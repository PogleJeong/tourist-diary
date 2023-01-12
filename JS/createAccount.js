const idBox = document.getElementById("id");
const pwBox = document.getElementById("pw");
const createBtn = document.querySelector("#create-account-form button");
let checkValidation = true;

function createAcc(event) {
    event.preventDefault();
    const ID = idBox.value;
    const PW = pwBox.value;
    const resultPrint = document.getElementById("resultBox");
    const notAcceptPrint = document.getElementById("notAcceptId");
    if (ID == "") {
        alert("아이디를 입력해주세요.");
        return;
    }

    if (PW == "") {
        alert("비밀번호를 입력해주세요.");
        return;
    }
    
    if (localStorage.getItem(ID) != null) {
        alert("이미 존재하는 아이디 입니다.");
        return;
    }

    if (checkValidation) {
        localStorage.setItem(ID,PW);
        resultPrint.innerText = "Success to create your account!!";
        idBox.value = "";
        pwBox.value = "";
    } else {
        resultPrint.innerText = "Fail to create account";
        idBox.value = "";
        pwBox.value = "";
    }
    
    
}

function checkID() {
    const notIncludeChar = [" ","-","*","/","[","]","-","=","+","*","&","^","$","#","!","(",")","<",">"];
    const ID = idBox.value;
    const notAcceptPrint = document.getElementById("notAcceptId");

    checkValidation = true; // 처음값은 true 
    notAcceptPrint.innerText= ""; // 특수문자 들어가면 경고문자

    notIncludeChar.forEach(element => { // id 값 검증.
        if (ID.includes(element)) {
            checkValidation = false; // 특수문자 들어가면 id 검증 false 로 변환
            notAcceptPrint.innerText = "@를 제외한 특수문자는 불가합니다."
            pwBox.innerText ="";
            return;
        }
    });
}

idBox.addEventListener("change",checkID);
createBtn.addEventListener("click", createAcc);