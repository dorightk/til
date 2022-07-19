type Person = {
  name: string
  age: number
}
//domain
function addPerson(oldData: Array<Person>, newData: Person) {
  const newPerson = [...oldData, newData]
  return newPerson
}

// repository
function getAllPerson() {
// id를 이용해서 객체를가져옴
return [{name: "ohbin", age: 12}, ]
}
function save(person) {
// person 저장
}

// service
//before validation
const personList  = getAllPerson() // 실제로는 repository에서 임포트
const newPerson = req.params.person

// 만약에 이것이 Uow라면
const newPersonList = addPerson(personList, newPerson)
save(newPersonList) // 실제로는 repository에서 임포트