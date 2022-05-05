document.loginFrm.addEventListener('submit', (e) => {
  const userIdVal = document.querySelector("#userId").value;
  const userPwVal = document.querySelector("#userPw").value;

  if(!userIdVal) {
    alert("아이디를 작성해주세요")
    e.preventDefault();
    return;
  }
  if(!userPwVal) {
    alert("비밀번호를 작성해주세요")
    e.preventDefault();
    return;
  }

  // 회원가입 후 localStroage 에 정보 저장
  // 로그인 시 localStroage에 저장된 정보와 맞다면 들어가기
});


// // 로그인 유효성 검사
// $('form').on('submit', function(e) {
//   var emailCheck = document.getElementById('email').value;
//   var pwCheck = document.getElementById('pw').value;
//   if (emailCheck == '') {
//     alert('아이디를 입력하세요 !')
//     e.preventDefault();
//   } else if (/\S+@\S+\.\S+/.test(emailCheck) == false) {
//     alert('이메일 형식이 아닙니다 !')
//     e.preventDefault();
//   } else if (pwCheck == '') {
//     alert('비밀번호를 입력하세요 !')
//     e.preventDefault();
//   } else if (pwCheck.length < '6') {
//     alert('비밀번호를 6자리 이상 입력해주세요 !')
//     e.preventDefault();
//   } else if (/[A-Z]/.test(pwCheck) == false) {
//     alert('비밀번호에 대문자를 입력해주세요 !')
//     e.preventDefault();
//   }
// });