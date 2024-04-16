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
