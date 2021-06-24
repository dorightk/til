# 02_modern javascript tutorial 2.2 변수와 상수

## 변수(Variable)

- 사용자나 서버로 부터 입력받은 정보를 저장하는 용도로 사용됨
- 이름을 가진 상자
- `let` 으로 생성
- 변수 선언

  ```
  let message;

  //message라는 이름을 가진 상자
  ```

- 변수에 값 할당

  ```
  let message;

  message = 'Hello';

  // 'Hello'를 message라는 이름을 가진 상자에 저장
  ```

- 가독성

  ````
  let user = 'John', age = 25, message = 'Hello';

      let user = 'John';
      let age = 25;
      let message = 'Hello';
      ```

  > 한줄에 작성하기 보다 여러줄에 작성하여 가독성을 높이자

  ````

- 다른 변수에 값 할당

```
let Hello = 'Hello world!';

let message;

message = Hello;
// Hello의 'Hello world' 값을 message에 복사합니다.
```

> admin 변수에 값을 넣기 위해서는, 왼쪽에 admin 오른쪽에 value값을 가진 변수를 놓는다

- 변수는 한번만 선언해야함
  > 변수는 두 번 선언 하면 에러 발생

~~함수형 언어는 변숫값 변경을 금지함(Scala, Erlang)~~

---

## 상수

- 변화 하지 않는 변수 = 상수
- `const`로 생성
- let과 달리 상수를 선언할 때 값도 함께 할당해 줘야함

  ```
  const name;

  name = 'John'
  ```

  > SyntaxError: Missing initializer in const declaration)

  ```
  const name = 'John';
  ```

- 한번 설정된 상수는 변경되지 않음

  ```
  const myBirthday = '18.04.1982';

  myBirthday = '01.01.2001';
  ```

  > TypeError: Assignment to constant variable.

### 대문자 상수

- 대문자 상수 : 하드 코딩한 값을 가진 상수는 대문자로 상수명 작성(하드 코딩 : 코드 실행전, 런타임 전, 코드 작성 단계부터 값을 할당 하는 것)

  ```
  const COLOR_RED = "#F00";
  const COLOR_GREEN = "#0F0";

  const BIRTHDAY = '18.04.1982';
  ```

- 일반적인 상수 : 런타임 중에 값이 할당되고, 그 최초값이 변하지 않는 상수
  ```
  const age = someCode(birthday)
  ```

---

## 변수 명명 규칙

변수명은

- **카멜 표기법** 사용(첫글자 제외한 각 단어 첫글자 대문자표기)(즉, 대소문자 구별)
- '$' , '\_' 사용 가능(그 외 특수 기호 사용 불가)
- 숫자로 시작 할 수 없음
- 영어사용을 권장
- 예약어(let, class 등 과 같은 js 내부에서 사용되는 단어)와 같은 단어 사용 금지
- `let` 없이 변수 할당되지만, 엄격모드(use strict)에서는 안되므로 꼭 `let`을 사용하자

---

## 바람직한 변수명

- 변수가 의미하는 뜻이 명확하다.
- 간결하다.

  > 프로젝트 중,
  >
  > 1. 개인이 기존 코드의 틀을 변경, 확장할 때
  > 2. 타인이 코드를 변경, 확장 할때

  > 정보에 맞는 변수명이 적혀 있다면, 해당 정보를 빠르게 찾을 수 있다.

```
- userName 이나 shoppingCart처럼 사람이 읽을 수 있는 이름을 사용하세요.
- 무엇을 하고 있는지 명확히 알고 있지 않을 경우 외에는 줄임말이나 a, b, c와 같은 짧은 이름은 피하세요.
- 최대한 서술적이고 간결하게 명명해 주세요. data와 value는 나쁜 이름의 예시입니다. 이런 이름은 아무것도 설명해주지 않습니다. 코드 문맥상 변수가 가리키는 데이터나 값이 아주 명확할 때에만 이런 이름을 사용합시다.
- 자신만의 규칙이나 소속된 팀의 규칙을 따르세요. 만약 사이트 방문객을 'user’라고 부르기로 했다면, 이와 관련된 변수를 currentVisitor나 newManInTown이 아닌 currentUser나 newUser라는 이름으로 지어야 합니다.

출처 - https://ko.javascript.info/variables
```

- 기존 변수를 재사용하지 말고, 새로운 변수를 선언하는 습관을 들이자. (코드가 길어질뿐, 코드최적화에 도움이 된다)
  > 상자의 내용물만 바꾸지 말고 상자의 이름표를 바꾸자!
