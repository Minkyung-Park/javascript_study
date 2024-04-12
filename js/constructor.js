// 생성자 함수의 객체 생성 예시

// 생성자 함수 Member는 세 개의 매개변수 id, name, age를 받음
function Member(id, name, age) {
  // 키워드 this는 생성자 함수로 생성되는 객체 자신을 의미
  // 따라서 this.id는 객체 자신의 property id를 의미
  this.id = id;
  this.name = name;
  this.age = age;
  this.getName = function () {
    return `나의 이름은 ${this.name}입니다`;
  };
}

const member1 = new Member("kdhong", "홍길동", 30);
const member2 = new Member("kdkim", "김길동", 29);
const member3 = new Member("gildong", "길동이", 24);

let text = "";
text += `${member1.name} <br>`;
text += `${member2.name} <br>`;
text += `${member3.name} <br>`;
text += `${member1.getName()}`;

document.getElementById("show").innerHTML = text;
