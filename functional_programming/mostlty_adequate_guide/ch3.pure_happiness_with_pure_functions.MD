### 순수함수

함수형을 이해하려면 pure라는 개념을 이해하는것이 가장 중요하다.

pure function은 같은 인자에 대해, 항상 return되는 값이 같음을 의미한다.
함수형은 수학적으로 프로그래밍을 바라보는개념이다.

수학에서 함수는 공역과 정의역이 1:1로 매핑된다. f(3)의 결과값이 4또는 5와같이 두가지가 될 수 없다.
수학에서의 함수를 프로그래밍에서는 pure function이라고 칭한다.
따라서 pure function은
```jsx
const xs = [1,2,3,4,5];

// pure
xs.slice(0,3); // [1,2,3]

xs.slice(0,3); // [1,2,3]

xs.slice(0,3); // [1,2,3]

// impure
xs.splice(0,3); // [1,2,3]

xs.splice(0,3); // [4,5]

xs.splice(0,3); // []

// impure
let minimum = 21;
const checkAge = age => age >= minimum;

// pure
const checkAge = (age) => {
  const minimum = 21;
  return age >= minimum;
};

```
slice와 같이 0,3이라는 인자에대해 항상 같은 return을 해야한다.
또는 함수 외부의 변수를 참조해서는 안된다. impure checkage는 minumum 이라는 mutable한 변수를 참조하며, 이는 함수결과값에 영향을 미친다. 순수함수는 인자에만 영향을 받아야한다.

### side Effect
아래는 side effect의 예시이다.
```
changing the file system
inserting a record into a database
making an http call
mutations
printing to the screen / logging
obtaining user input
querying the DOM
accessing system state
```
pure function에서 이야기하는 side effect는 무엇일까?
side effect는 나쁜것이 아니다. 프로그램이 단순한 계산기가 아니라 실제 buisness와 이어지도록 한다.
따라서 우리는 side effect를 금지 할것이 아니라, 조작 가능한 상태에서 유지되고, 작동되도록 해야한다.
side effect는 함수의 순수성을 저해한다. pure function은 같은 input에는 항상 같은 값을 return해야한다. 그러나 function의 바깥의 문제가 그것을 불가능하게 한다.

8th grade


### 순수성 사용 case
cacheable
portable / self-documenting
testable
reasonable
parallel code


그러나 프로그래밍은 수학이 아니라, 비즈니스를 표현한 과학이기때문에, 암묵적인 sideEffect가 존재하고, 함수가 100%영향을 받지 않는다는것은 불가능하다.
하지만 우리는 추상화과정을 통해 최대한 함수를 pure하게 만든다.