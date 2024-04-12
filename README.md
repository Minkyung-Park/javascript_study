## 11.1 객체 생성

- 객체(object)는 property와 method의 집합임
- 객체의 property는 변수와 같은 개념
- 객체의 method는 함수와 거의 동일한 것(함수랑은 다른 것임)
- 특정 객체에 소속된 변수와 함수를 그 객체의 property와 method라고 부름
- JS에서 객체는 아주 중요한 개념
- function, array, date, math 등 모든 것이 객체
- JS의 number, string도 일종의 객체

```js
// 1. 객체 member를 생성
// 객체를 생성할 때는 일반적으로 키워드 const 사용

// member 객체는 id, username, age 세 개의 property로 구성
// property에 id, username, age를 키(key)라고 부름
// 이에 대응되는 "kdhong", "홍길동", 30을 값(value)라고 함

// 뭔가 오류 뜨는데 다시 확인하기
const member = {
  id: "kdhong",
  username: "홍길동",
  age: 30,
};

let text;
text = `${member.id} ${member.username} ${member.age}`;
console.log("member object", text);

document.getElementById("show").innerHTML = text;
```

## 11.2 property

- 객체는 property method로 구성

### 11.2.1 for in 문으로 property 읽기

```js
const member = {
  id: "kdhong",
  username: "홍길동",
  age: 30,
};

let text = "";

// for in 문에서 x는 객체 member에 존재하는 property의 key 이름을 가짐
// 따라서 반복 루프에서 변수 x의 값은 id
for (x in member) {
  text += member[x]; // text + member[x]
}

document.getElementById("show").innerHTML = text;
```

### 11.2.2 property 추가하기

```js
const member = {
  id: "kdhong",
  username: "홍길동",
  age: 30,
};

member.email = "kdhong@gmail.com";

let text = "";

// for in 문에서 x는 객체 member에 존재하는 property를 가짐
// 따라서 반복 루프에서 변수 x의 값은 id
for (x in member) {
  text += `키: ${x} 값: ${member[x]} <br>`;
}

document.getElementById("show").innerHTML = text;
```

### 11.2.3 property 삭제하기

```js
const member = {
  id: "kdhong",
  username: "홍길동",
  age: 30,
};

delete member.id;

let text = "";

for (x in member) {
  text += `키: ${x} 값: ${member[x]} <br>`;
}

document.getElementById("show").innerHTML = text;
```

### 11.2.4 중첩 객체

```js
const member = {
  id: "kdhong",
  username: "홍길동",
  age: 30,
  hobby: {
    hobby1: "게임",
    hobby2: "탁구",
    hobby3: "기타",
  },
};

let text = "";

text = member.hobby.hobby1;

document.getElementById("show").innerHTML = text;
```

## 11.3 메서드

### 11.3.1 메서드란?

- 객체는 프로퍼티와 메서드로 구성됨
- 프로퍼티는 객체에 소속된 변수
- 메서드는 객체에 소속된 함수
- 다르게 말하자면 property는 객체의 상태를 의미하는 것
- 메서드는 객체의 동작을 정의한다라고 할 수 있음

```js
const dog = {
  name: "댕댕이",
  species: "믹스",
  color: "흰색",
  age: 3,
  intro: function () {
    return `우리집 강아지 이름은 ${this.name} 입니다`;
  },
};

document.getElementById("show").innerHTML = dog.intro();
```

### 11.3.2 메서드 추가하기

```js
const dog = {
  name: "댕댕이",
  species: "믹스",
  color: "흰색",
  age: 3,
  intro: function () {
    return `우리집 강아지 이름은 ${this.name} 입니다`;
  },
};

dog.getAge = function () {
  return `나이는 ${this.age}살 입니다`;
};

document.getElementById("show").innerHTML = dog.getAge();
```

### 11.3.3 내장 메서드

- JS 자체적으로 만들어준 내장 객체(bulit-in object)
- 이 내장 객체들은 내장 메서드를 제공함으로써 객체에 관련된 프로그래밍을 할 수 있게 해줌
- 많이 사용되는 객체에는 number, string, array, date, math 등이 있음
