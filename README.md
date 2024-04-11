# 8. for 문

## 8.1 for 문

- 특정 코드를 반복해서 실행 for, while, do while

```text
for(초기값; 조건식; 증가 또는 감소;) {
  문장;
  ...
}
```

```js
// for의 조건식이 참인 동안 문장들을 반복시행
// 1. i의 값을 1로 초기화
// 2. 조건식 1 <= 3 참, 1 출력
// 3. i의 값이 1 증가
// 4. i의 값이 2가 됨
// 5. 조건식 2 <= 3 참, 2 출력
// 6. i의 값이 1 증가
// 7. i의 값이 3이 됨
// 8. 조건식 3 <= 참, 3 출력
// 9. i의 값이 1 증가
// 10. i 의 값이 4가 됨
// 11. 조건식 <= 3 거짓, for 루프를 빠져나감

for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// for 문을 이용해서 1 ~ 100 정수의 합계를 구하는 프로그램
let sum = 0;
// i가 1에서 100까지 값을 가지는 동안
for (let i = 1; i <= 100; i++) {
  // 문장이 반복 실행되면서 변수 sum에 1 ~ 100의 누적 합계를 저장
  sum += i;
}
// sum의 값을 출력
console.log(sum);

// for 문,  배열, 템플릿 문자열 이용하여 웹페이지 글자에 색을 설정함
const color = ["red", "green", "blue", "pink"]; // 문자열
let text = "";

// i는 0, 1, 2, 3의 값을 가지는 동안
for (let i = 0; i <= 3; i++) {
  text += `<span style="color: ${color[i]}">안녕</span>`;
}
console.log(text);
document.write(text);
```

## 8.2 for in 문

- 객체의 요소들을 반복해서 읽어올 때 for in

```js
// 객체 내 각 요소들을 반복해서 읽어와
// 그 키를 변수에 저장하는 식으로 반복 루프가 진행
for(변수 in 객체) {
  문장;
  ...
}
```

```js
const member = { id: "kdhong", username: "홍길동", age: 30 };

// 객체의 요소 수 만큼, 즉 세번 반복 루프 진행
for (let x in member) {
  // x가 변수이다
  console.log(member[x]);
}
```

### 8.3 for of 문

```js
for(변수 of 배열) {
  문장;
  ...
}
```

```js
const scores = [88, 75, 95, 90];

// score라는 변수를 선언, score에 scores를 담아라
for (let score of scores) {
  console.log(score);
}
```

## 8.4 이중 for 문

- for 루프 안에 다시 for 루프가 들어가 있는 형태

```js
// 이중 for 문
// 구구단
// 2단
let x = 2;
let result;

for (let y = 1; y <= 9; y++) {
  result = x * y;
  console.log(result);
}

let resultAll;
for (let x = 2; x <= 9; x++) {
  for (let y = 1; y <= 9; y++) {
    resultAll = x * y;
    console.log(resultAll);
  }
}
```
