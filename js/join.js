document.joinFrm.addEventListener('submit', (e) => {
  const userNameVal = document.querySelector("#userName").value;
  const userIdVal = document.querySelector("#userId").value;
  const userPwVal = document.querySelector("#userPw").value;
  const userPwCheckVal = document.querySelector("#userPwCheck").value;

  if(!userNameVal) {
    alert("이름을 작성해주세요")
    e.preventDefault();
    return;
  } else if(!userIdVal) {
    alert("아이디를 작성해주세요")
    e.preventDefault();
    return;
  } else if(!userPwVal) {
    alert("비밀번호를 작성해주세요")
    e.preventDefault();
    return;
  } else if(!userPwCheckVal) {
    alert("비밀번호 확인을 작성해주세요")
    e.preventDefault();
    return;
  } else if (userNameVal.value != "" && userIdVal.value != "" && userPwVal.value != "" && userPwCheckVal.value != "") {
    alert("회원가입 완료 !")
    location.href='../html/login.html'
  }
});

/*
  제출
*/
const saveJoin = () => {
  // console.log("saveJoin 호출!");
  const userNameVal = document.querySelector("#userName").value;
  const userIdVal = document.querySelector("#userId").value;
  const userPwVal = document.querySelector("#userPw").value;
  const userPwCheckVal = document.querySelector("#userPwCheck").value;

  // 방명록객체 생성
  const join = new Join(userNameVal, userIdVal, userPwVal, userPwCheckVal);
  // console.log(join);

  // guestbooks배열 관리
  const joins = JSON.parse(localStorage.getItem('joins')) || [];
  // console.log(joins);
  joins.push(join);

  localStorage.setItem('joins', JSON.stringify(joins));

  // 폼초기화
  document.joinFrm.reset();
};

class Join {
  constructor(userName, userId, userPw, userPwCheck, datetime = Date.now()){
    this.userName = userName;
    this.userId = userId;
    this.userPw = userPw;
    this.userPwCheck = userPwCheck;
    this.datetime = datetime;
  }
}