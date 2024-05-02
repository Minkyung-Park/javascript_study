# 14. 문서 객체 모델 DOM

- HTML 문서의 구조화된 표현
- DOM 구조에 접근하여 HTML 문서의 구조, 스타일, 내용 등을 변경
- DOM은 웹 페이지 즉, HTML 문서에 접근하여 문서를 읽고 조작할 수 있는 API(Application Programming Interface)를 제공하는 인터페이스라고 할 수 있음
- DOM은 JS 언어와는 다르게 독립적인 구조를 가지고 있음

## 14.1 DOM의 구조

- HTML 요소(element), 속성(attribute), 내용(content) 등으로 구성된 트리 구조
- 웹 페이지 요소들과 요소들에 관련된 정보를 트리 형태로 가지고 있음
- 모든 HTML 요소들은 객체로 정의 됨
- JS에서는 DOM에서 제공하는 Method와 Property를 통하여 HTML 요소들에 접근하거나 요소들을 수정할 수 있음

## 14.2 DOM Method와 Property

```js
// 웹 페이지에 있는 <p> 요소의 내용 변경
// Document 객체의 getElementByID("show")는 웹 페이지에서 아이디 "show"
// 즉, <p> 요소를 가져옴
// innerHTML에 "안녕"을 설정함으로써 단락 <p>의 내용을 "안녕"으로 변경
// DOM Method : getElementByID()
// DOM Property : innerHTML
document.getElementById("show").innerHTML = "안녕";

// 문서가 로드될 때 글 제목 요소 h1을 생성하는 예

// 1. window 객체의 onload() 메서드는  JS 문서가 로드될 때 자동으로 호출
window.onload = function () {
  // 2. h1 요소를 생성하여 변수 element에 저장
  let element = document.createElement("h1"); // h1을 생성함

  // 3. "글 제목"이란 텍스트 노드를 생성하여 변수 text에 저장
  let text = document.createTextNode("글 제목"); // 웹 문서에 텍스트를 생성해서 text에 담음

  // 4. element 요소가 가리키는 h1 요소에 text 즉, "글 제목"을 추가
  element.appendChild(text); // text를 담음
  // 5. Document 객체의 body 요소에 element를 추가
  document.body.appendChild(element);
};
```

## 14.3 Document 객체

- DOM의 Document 객체는 웹 페이지에 있는 모든 객체들의 소유주
- 웹 페이지에 있는 요소들에 접근하기 위해 Document 객체로부터 시작해서 해당 요소를 찾아감

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
    <form name="form1">
      이름: <input type="text" name="name" /> <br />
      <button onclick="get_name()">버튼</button>
    </form>

    <script src="js/dom.js"></script>
  </body>
</html>
```

```js
function get_name() {
  let text = document.form1.name.value;
  alert(text);
}
```

## 14.4 HTML 요소 선택

- 자바스크립트에서 웹페이지에 있는 HTML 요소를 추가, 수정, 삭제하는 방법
- 제일 먼저 페이지 내에 존재하는 해당 요소를 선택
  - 아이디(id) 이용
  - 태그 이름(tag name) 이용
  - 클래스 이름(class name) 이용
  - CSS 선택자(selector) 이용
  - 객체 콜렉션(object collection) 이용

### 14.4.1 아이디로 요소 선택하기

- 요소의 id
- getElementById() 메서드

```html
<body>
  <p id="p1">안녕하세요.</p>
  <button onclick="changeColor('red')">빨강</button>
  <button onclick="changeColor('blue')">파랑</button>

  <script src="js/dom.js"></script>
</body>
```

```js
function changeColor(new_color) {
  const elem = document.getElementById("p1");
  elem.style.color = new_color;
}
```

### 14.4.2 태그 이름으로 요소 선택하기

- getElementsByTagName() 메서드
- HTML 태그이름으로 요소선택

```html
<body>
  <div id="parent">
    <p>안녕1</p>
    <p>안녕2</p>
    <p>안녕3</p>
    <p>안녕4</p>
    <p>안녕5</p>
  </div>
  <p id="show"></p>

  <script src="js/dom.js"></script>
</body>
```

```js
const parent = document.getElementById("parent");

const p = parent.getElementsByTagName("p");

p[2].style.color = "red";
```

### 14.4.3 클래스 이름으로 요소 선택하기

- getElementsByClassName()

```html
<body>
  <div id="parent">
    <p>안녕1</p>
    <p>안녕2</p>
    <p class="a">안녕3</p>
    <p class="a">안녕4</p>
    <p class="a">안녕5</p>
  </div>
  <p id="show"></p>

  <script src="js/dom.js"></script>
</body>
```

```js
const parent = document.getElementById("parent");

const p = parent.getElementsByClassName("a");

for (let i = 0; i < p.length; i++) p[i].style.color = "red";
```

### 14.4.4 CSS 선택자로 요소 선택하기

- querySelector()

```js
// querySelector() 메서드는 CSS 선택자가 선택한 요소 중 첫 번째 요소 반환
const x = document.querySelector("p.a");
x.style.backgroundColor = "pink";
```

- querySelectorAll()

```html
<body>
  <h1 id="title">글 제목</h1>
  <p>단락1</p>
  <ul>
    <li>항목1</li>
    <li class="item">항목2</li>
    <li class="item">항목3</li>
    <li class="item">항목4</li>
  </ul>

  <script src="js/dom.js"></script>
</body>
```

```js
const x = document.querySelectorAll("h1#title");
const y = document.querySelectorAll("p");
const z = document.querySelectorAll("li.item");

x[0].style.backgroundColor = "red";
y[0].style.backgroundColor = "green";
z[1].style.backgroundColor = "blue";
```

## 14.5 HTML 요소 내용과 속성

### 14.5.1 요소 내용 가져오기

- 자바스크립에서 HTML 요소의 내용을 가져오는 데는
- innerHTML
- innerText

```js
const x = document.getElementById("p1");

alert(x.innerHTML);
alert(x.innerText);
```

### 14.5.2 요소 내용 설정하기

```html
<body>
  <ul>
    <li>항목1</li>
    <li>항목2</li>
    <li></li>
    <li></li>
    <li></li>
  </ul>

  <script src="js/dom.js"></script>
</body>
```

```js
const x = document.querySelectorAll("li");

x[2].innerHTML = `<span style="color: red">텍스트1</span>`;
x[3].innerHTML = "텍스트2";
x[4].innerText = "텍스트3";
```

### 14.5.3 요소 속성 값 변경하기

- HTML 요소의 속성(attribute) 값 변경

```html
<body>
  <img id="image" src="images/image.png" alt="기본이미지" />
  <button onclick="changeImg()">이미지 변경</button>
  <button onclick="changeSize()">이미지 사이즈 변경</button>

  <script src="js/dom.js"></script>
</body>
```

```js
function changeImg() {
  document.getElementById("image").src = `images/image-5.png`;
}

function changeSize() {
  document.getElementById("image").width = "50";
}
```

- jQuery

```js
// 이미지 변경 함수
function changeImg() {
  $("#image").attr("src", "images/image-5.png");
}

// 이미지 크기 변경 함수
function changeSize() {
  $("#image").css("width", "50px");
}
```

## 14.6 Document 객체의 프로퍼티
