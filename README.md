```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript 스터디</title>
  </head>
  <body>
    <p id="show"></p>
    <script>
      document.getElementById("show").innerHTML = "안녕하세요.";
    </script>
  </body>
</html>
```

## 1.1 데이터 출력

- innerHTML : 브라우저 안에 있는 HTML 요소에 데이터 출력
- document.write() : 브라우저에 간단한 데이터 출력 // 되도록이면 쓰지마라
- alert() : 알림창에 데이터 출력
- console.log() : 브라우저 콘솔에 데이터 출력

### 1.1.1 innerHTML

### 1.1.2 document.write()

```js
<script>document.write(10 + 20);</script>
```

### 1.1.3 alert()

```js
<script>alert(10 + 20);</script>
```

# 1.1.4 console.log()

- 브라우저 개발자 도구 console에 출력

```js
<script>console.log(10 + 20);</script>
```
