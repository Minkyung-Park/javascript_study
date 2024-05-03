# 16. 이벤트

- 웹 페이지에서 발생하는 사건을 의미
- 이벤트를 처리하는 함수를 event handler 또는 event listner라고 함

## 15. 이벤트 핸들러

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

### 15.1.1 인라인 모델

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

### 15.1.2 이벤트 리스너

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
