const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

/*
반복되는 string들은 대문자 변수로 저장
- 대문자표기는 일반적으로 string만 포함된 변수
- 중복되면 변수로 지정(변수 오타시 JS가 지적해주기 때문)
*/
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginBtnClick(event) {
    event.preventDefault(); //브라우저의 기본동작(새로고침)을 못하게 함
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    //로컬 스토리지 이용
    localStorage.setItem(USERNAME_KEY, username) //키,값 (브라우저에서 제공하는 DB같은 API)

    paintGreeting(username);
}

function paintGreeting(username){
    //기존에 알던 내용 : greeting.innerText = "Hello "+ username;
    greeting.innerText = `Hello ${username}`; //백틱`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginBtnClick);
} else{
    paintGreeting(savedUsername);
}