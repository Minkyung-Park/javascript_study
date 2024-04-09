# 3. 데이터형(Date Type)

- number
- string
- boolean
- null
- undefined
- bigint
- object
- symbol

## 3.1 숫자 number

```js
const a = 3; // 정수(integer)
const b = 5.7; // 부동 소수점 숫자(floating point number)
const c = 123e3; // 123000, 10의 3승
const d = 123e-3; // 0.123, 10의 마이너스 3승

console.log(a, b, c, d);
```

## 3.2 Bitint

- 정수는 15개의 숫자를 15자리 정수까지 나타낼 수 있다.
- 그 이상의 정수를 사용하려면 Bigint 형을 사용해야 한다.

```js
const e = 9999999999999999998n;
console.log(e);
```

## 3.3 문자열 string

```js
// 문자열
const text1 = "사 과"; // 큰 따옴표 사용
console.log("text1에 저장된 내용 :", text1);

// 문자열의 length라는 property 사용, 공백도 포함
console.log("text1의 문자열 길이는" + " " + text1.length + " " + "입니다.");

// 템플릿 문자열 ``
let username = "홍길동";
let age = 30;

let text2 = "이름 : " + username + ", " + "나이 : " + age;
console.log(text2);
let text3 = `이름: ${username}, 나이: ${age}`;
console.log(text3);
```

## 3.4 boolean

```js
let x = 5 > 3; // ture
let y = 5 < 3; // false

console.log(x, y);
```

### undefined, null(빈 문자열)

```js
let x;
let y = "";

console.log(x);
console.log(typeof y);
```

## 3.6 객체 object(중요)

```js
const member = {
  id: "kdhong",
  name: "홍길동",
  age: 20,
};

console.log("아이디: ", member.id);
console.log(member.age);
console.log(member.name);
```

## 3.7 심볼 symbol

- number, string, boolean과 같은 원시 데이터
- 유일한 식별자로서 객체의 속성을 추가하는데 사용

```js
const member = {
  name: "홍길동",
  age: 30,
}; // member : 객체, name이 키고 홍길동이 값임

// Symbol()로 심볼 id 생성
let id = Symbol("id");

// 객체 member의 키 id에 문자열 "kdhong" 저장
// 심볼 id가 객체의 키로 사용되면 심볼 데이터형은
// 유일한 식별자이기 때문에 객체의 키 이름이 충돌하는 경우 방지
// member.id = "kdhong";
member[id] = "kdhong";

// 객체 member에서 심볼 id가 키로 사용된 요소는
// member[id]에 의해 접근 할 수 있다
// 심볼 id와 새롭게 생성된 Sympl("id")는 서로 다르다
console.log(id === Symbol("id")); // false
```

## 3.8 배열 array

- index는 0부터 시작

```js
const car = ["현대", "기아", "벤츠", "BMW"];

console.log(car[0]);
```
