자바스크립트에서 함수는 일급함수이기 때문에, 어떠한 데이터 타입으로 취급이 가능하며, 배열의 속성이나, 함수의 인자, 변수에 할당 또한 가능하다.
```jsx
const getServerStuff = callback => ajaxCall(json => callback(json));

const getServerStuff = ajaxCall;
```
아래의 함수처럼 일급함수의 특성을 이용해 코드를 작성한다면, 인수의 이름을 붙이고 참조할수밖에 없다. 여러이름을 사용함으로써 나타나는 혼란을 줄일 수 있으며, 함수와 인수의 명명을 통해 좀더 genric한 코드를 작성할 수 있다.
```jsx
// specific to our current blog
const validArticles = articles =>
  articles.filter(article => article !== null && article !== undefined),

// vastly more relevant for future projects
const compact = xs => xs.filter(x => x !== null && x !== undefined);
```
또한 oop에서 자주 사용되는 this는 함수형프로그래밍에서 사용을 지양한다. 함수형에서는 명시적으로 인자를 받아서 사용하지, 암시적인 것으로부터 의존하지 않는다. 이는 순수함수로 부터 시작하는 함수형의 개념에 위배된다.