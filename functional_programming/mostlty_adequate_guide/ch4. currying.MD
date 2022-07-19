## 4. currying

커링은 적은 인자를 이용해, 함수를 호출한다.
```jsx
// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
function curry(fn) {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}

const curriedMatch = curry((regex, string) => string.match(regex))
const elephantIncludeP = curriedMatch(/p/g)
const result = elephantIncludeP("pppp")
console.log(result)
```
위의 함수를 