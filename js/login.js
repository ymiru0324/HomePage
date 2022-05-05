const login = () => {
  document.loginFrm.addEventListener('submit', (e) => {
    const userIdVal = document.querySelector("#userId").value;
    const userPwVal = document.querySelector("#userPw").value;
  
    const regExpId1 = /^[a-z][a-z\d]{3,11}$/; // 영소문자로 시작하는 4 ~ 12 글자
    const regExpId2 = /[0-9]/; // 아이디 숫자 하나 이상 포함
    
    const joinCheck = JSON.parse(localStorage.getItem('joins')); // joins 배열 가져옴
    console.log(typeof joinCheck, joinCheck);
    
    const userIdCheck = 
      joinCheck.forEach((test) => {
        const {userId} = test;
        console.log(`${userId}`);
      });

    if(!userIdVal) {
      alert("아이디를 작성해주세요")
      e.preventDefault();
      return;    
    } else if(userIdVal != userIdCheck) {
      alert("id")
      e.preventDefault();
      return;
    } else if(regExpId1.test(userIdVal) == false) {
      alert("올바른 아이디 형식이 아닙니다 ! (영소문자로 시작하는 4~12글자)")
      e.preventDefault();
      return;
    } else if(regExpId2.test(userIdVal) == false) {
      alert("올바른 아이디 형식이 아닙니다 ! (아이디 숫자 1글자 이상 포함)")
      e.preventDefault();
      return;
    } else if(!userPwVal) {
      alert("비밀번호를 작성해주세요")
      e.preventDefault();
      return;
    } else if(userPwVal.length < '6') {
      alert('비밀번호를 6자리 이상 입력해주세요 !')
      e.preventDefault();
      return;
    } else if (userIdVal.value != "" && userPwVal.value != "") {
      alert("로그인 완료 !")
      location.href = '../html/main.html'
    }
  });

};