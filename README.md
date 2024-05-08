# 16. 이벤트

- 웹 페이지에서 발생하는 사건을 의미
- 이벤트를 처리하는 함수를 event handler 또는 event listner라고 함

## 15.1.1 이벤트 핸들러

- 마우스 클릭이나 이동
- 페이지 로드
- 이미지 로드
- 입력창에 데이터 입력
- 키보드 누르기 등

```html
<body>
  <!-- this -> button이다 -->
  <button onclick="change(this)">클릭하세요</button>
  <script src="js/event.js"></script>
</body>
```

```js
function change(elem) {
  elem.innerHTML = "OK";
}
```

### 15.1.2 인라인 모델

```html
<body>
  <!-- this -> button이다 -->
  <button onclick="document.getElementById('show').innerHTML = Date()">
    현재 시간은?
  </button>

  <p id="show"></p>

  <script src="js/event.js"></script>
</body>
```

### 15.1.3 이벤트 리스너

- 이벤트가 발생하길 기다렸다가 이벤트 발생 시 해당 이벤트를 처리

```html
<!-- Document -->
<!DOCTYPE html>
<!-- 요소 : html, 속성 : lang -->
<html lang="ko">
  <!-- 요소 : head -->
  <head>
    <!-- 요소 : meta, 속성 : charset -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 요소 : title, 텍스트 : Javascript 스터디 -->
    <title>Javascript 스터디</title>
  </head>
  <body>
    <!-- this -> button이다 -->
    <button id="btn">클릭하세요</button>

    <p id="show"></p>

    <script src="js/event.js"></script>
  </body>
</html>
```

```js
let text = "";

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  text += "안녕하세요<br>";
  document.getElementById("show").innerHTML = text;
});

btn.addEventListener("click", function () {
  text += "Nice to meet you<br>";
  document.getElementById("show").innerHTML = text;
});
```

## 15.2 마우스 이벤트

- 마우스에 관련된 이벤트는 웹에서 가장 많이 사용됨
- onclick : 사용자가 요소를 클릭했을 때
- ondblclick : 사용자가 요소를 더블 클릭했을 때
- onmouseover : 마우스 포인터가 요소 위에 올라갔을 때, 자식요소에 대해서도 동작
- onmouseout : 마우스 포인터가 요소에서 벗어날 때, 자식요소에 대해서도 동작
- onmouseenter : 마우스 포인터가 요소 안으로 진입할 때, 자식요소에 대해서 동작안함
- onmouseleave : 마우스 포인터가 요소에서 외부로 나갈 때, 자식요소에 대해서 동작안함
- onmousemove : 마우스 포인터가 요소안에서 움직일 때

## 15.2.1 onclick/ondblclick 이벤트

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Javascript 스터디</title>
  </head>
  <body>
    <button onclick="showMessage1()">클릭하세요</button>
    <button ondblclick="showMessage2()">더블 클릭하세요</button>

    <p id="show"></p>

    <script src="js/event.js"></script>
  </body>
</html>
```

```js
function showMessage1() {
  document.getElementById("show").innerHTML = "클릭했어요";
}

function showMessage2() {
  document.getElementById("show").innerHTML = "더블 클릭했어요";
}
```

### 15.2.2 onmouseover/onmouseout 이벤트

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Javascript 스터디</title>
  </head>
  <body>
    <!-- this는 button을 가리킨다 -->
    <button onmouseover="changeBg1(this)" onmouseout="changeBg2(this)">
      마우스를 올려보세요
    </button>

    <p id="show"></p>

    <script src="js/event.js"></script>
  </body>
</html>
```

```js
function changeBg1(btn) {
  btn.style.backgroundColor = "lightgreen";
}
function changeBg2(btn) {
  btn.style.backgroundColor = "";
}
```

### 15.2.3 onmouseenter 이벤트

- onmouseover 이벤트와 유사한 기능

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Javascript 스터디</title>
    <style>
      div#box1 {
        border: solid 3px red;
      }
      div#box2 {
        border: solid 3px blue;
      }
      p {
        border: solid 1px black;
      }
    </style>
  </head>
  <body>
    <div id="box1" onmouseenter="increaseX()">
      <p>단락1</p>
      <span id="show1"></span>
    </div>

    <div id="box2" onmouseover="increaseY()">
      <p>단락2</p>
      <span id="show2"></span>
    </div>

    <script src="js/event.js"></script>
  </body>
</html>
```

```js
let x = 0,
  y = 0;

function increaseX() {
  x += 1;
  document.getElementById("show1").innerHTML = x;
}

function increaseY() {
  y += 1;
  document.getElementById("show2").innerHTML = y;
}
```

### 15.2.4 onmouseleave 이벤트

```html
<title>Javascript 스터디</title>
    <style>
      div#box1 {
        border: solid 3px red;
      }
      div#box2 {
        border: solid 3px blue;
      }
      p {
        border: solid 1px black;
      }
    </style>
  </head>
  <body>
    <div id="box1" onmouseleave="increaseX()">
      <p>단락1</p>
      <span id="show1"></span>
    </div>

    <div id="box2" onmouseout="increaseY()">
      <p>단락2</p>
      <span id="show2"></span>
    </div>

    <script src="js/event.js"></script>
  </body>
```

```js
let x = 0,
  y = 0;

function increaseX() {
  x += 1;
  document.getElementById("show1").innerHTML = x;
}

function increaseY() {
  y += 1;
  document.getElementById("show2").innerHTML = y;
}
```

### 15.2.5 onmousemove 이벤트

- 요소 내에서 마우스가 이동할 때 발생

```html
 <title>Javascript 스터디</title>
    <style>
      div#box {
        border: solid 3px red;
        width: 300px;
        height: 200px;
      }
    </style>
  </head>
  <body>
    <div id="box" onmousemove="showCoord(event)">
      <p id="show"></p>
    </div>

    <script src="js/event.js"></script>
  </body>
```

```js
// e(이벤트)를 받아야 한다
function showCoord(e) {
  let text = "좌표 : (" + e.clientX + ", " + e.clientY + ")";
  document.getElementById("show").innerHTML = text;
}
```

### 효과주기

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>스크롤 동작으로 양 옆으로 움직이는 텍스트</title>
    <style>
      body,
      html {
        height: 200%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .text {
      }
      #textTop {
      }
      #textBottom {
      }
    </style>
  </head>
  <body>
    <div id="textTop" class="text">위쪽 텍스트 - 오른쪽으로 이동</div>
    <div id="textBottom" class="text">아래쪽 텍스트 - 왼쪽으로 이동</div>

    <script src="js/textmove.js"></script>
  </body>
</html>
```

```js
document.addEventListener("scroll", function () {
  const scrollAmount = window.scrollY; // 스크롤 양을 담아서 저장
  const textTop = document.getElementById("textTop");
  const textBottom = document.getElementById("textBottom");

  textTop.style.transform = `translateX(${scrollAmount * 0.5}px)`;
  textBottom.style.transform = `translateX(-${scrollAmount * 0.5}px)`;
});
```

```html
<style>
      body,
      html {
        height: 200%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .text {
        position: fixed;
        white-space: nowrap;
      }
      #textTop {
        top: 50%;
      }
      #textBottom {
        bottom: 50%;
      }
    </style>
  </head>
  <body>
    <div id="textTop" class="text">위쪽 텍스트 - 오른쪽으로 이동</div>
    <div id="textBottom" class="text">아래쪽 텍스트 - 왼쪽으로 이동</div>

    <script src="js/textmove.js"></script>
  </body>
```

### 물결 효과

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>마우스 물결 효과</title>
    <link rel="stylesheet" href="styles/wave.css" />
  </head>
  <body>
    <script src="js/wave.js"></script>
  </body>
</html>
```

- wave.js

```js
document.addEventListener("mousemove", function (e) {
  let ripple = document.createElement("div");
  ripple.className = "ripple";
  document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX - 50}px`;
  ripple.style.top = `${e.clientY - 50}px`;

  ripple.addEventListener("animationend", () => {
    ripple.parentElement.removeChild(ripple);
  });
});
```

- wave.css

```css
body,
html {
  height: 100%;
  margin: 0;
  overflow: hidden;
  background: #303848;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle closest-side,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0) 70%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset 0 0 20px 10px rgba(255, 255, 255, 0.1), 0 0 30px rgba(0, 0, 0, 0.1); /* 외부 그림자 */
  animation: ripple-animation 1.8s ease;
  pointer-events: none;
}
@keyframes ripple-animation {
  0% {
    transform: scale(0);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}
```

### 15.3 포커스 이벤트

- onfocus : 요소가 포커스를 얻었을 때
- onblur : 요소가 포커스를 잃었을 때
- 텍스트나 비밀번호 입력창 안에 마우스를 클릭하면 마우스 커서가 깜빡임
- 이런 상태를 포커스를 얻었다고 표현
- 반대로 입력창 외부를 클릭하면 포커스를 잃게 됨

```html
<body>
  <input type="text" id="uid" />
  <input
    type="password"
    id="upw"
    onfocus="changeColor3()"
    onblur="changeColor4()"
  />

  <script src="js/event.js"></script>
</body>
```

```js
const userId = document.getElementById("uid");
const userPw = document.getElementById("upw");

function changeBgColor1() {
  userId.style.backgroundColor = "yellow";
}
function changeBgColor2() {
  userId.style.backgroundColor = "grey";
}

userId.onfocus = function () {
  changeBgColor1();
};

userId.onblur = function () {
  changeBgColor2();
};

// 이 방법도 됨

function changeColor3() {
  userPw.style.backgroundColor = "red";
}

function changeColor4() {
  userPw.style.backgroundColor = "blue";
}
```

## 15.4 기타 이벤트

### 15.4.1 onchange 이벤트

```html
<body>
  <label>
    사이즈:
    <select name="size" id="sz">
      <option value="">선택</option>
      <option value="small">S</option>
      <option value="medium">M</option>
      <option value="large">L</option>
      <option value="xlarge">XL</option>
    </select>
  </label>
  <p id="show"></p>
  <script src="js/event.js"></script>
</body>
```

```js
const sel = document.getElementById("sz");
sel.addEventListener("change", function (e) {
  document.getElementById(
    "show"
  ).innerHTML = `선택한 사이즈는 ${e.target.value}입니다`;
});
```
