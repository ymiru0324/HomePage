loginSubmit.addEventListener('click', (e) => {
  
  const userIdVal = document.querySelector("#userId").value;
  const userPwVal = document.querySelector("#userPw").value;

  const joins = JSON.parse(localStorage.getItem('joins')) || [];


  for(let i = 0; i < joins.length; i++){
    if(joins[i].userId == userIdVal && joins[i].userPw == userPwVal){
      location.href = '../html/main.html'
    } else if(joins[i].userId != userIdVal) {
        alert('존재하지 않는 아이디 입니다 !');
        e.preventDefault();
        return;
    } else if(joins[i].userPw != userPwVal) {
        alert('존재하지 않는 비밀번호 입니다 !');
        e.preventDefault();
        return;
      }
    }

  if(!userIdVal) {
    alert("아이디를 작성해주세요")
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
  } 

});

const login = () => {
  location.href = '../html/main.html'
  alert(`로그인 완료 !`);
};