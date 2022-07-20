// state -> copyState -> changeCopyState -> useCopyState with changes
//console.log(typeof []); //object
//console.log(typeof {}); //object
//console.log(typeof (()=>{})); //function
//console.log( Array.isArray([]) );  // true  (use this if you need to check array or not array)\

const user = {  // Мы пишем литерал объекта (комманду создание объекта), сам объект создается интерпритатором в памяти.
    name: "Bob",
    age: 23,
    isStudent: true,
    friends: ["Den","Ben","Joe","Alex"]
}

// const user2 = user;  // new link on object
//
// user2.name = "Alex";
//
// console.log(user);

const user2 = {...user};  // create new object by another object by spread operator

// user2.name = user.name;
// user2.age = user.age;
// user2.isStudent = user.isStudent;

const deepCopyUser = {...user, friends: [...user.friends]}

const user3 = {
    ...user, // перезаписали объект другим объектом
    isMarried: true, // Добавили новое свойство
    name: "John" // Перезаписали свойста из user
}

let x = 5;

y = x;

y = 10;

// console.log(x) // 5
// console.log(y) // 10

const students = [
    {name: "Alex"},
    {name: "Bob"},
    {name: "Donald"},
    {name: "Ann"},
]


const newStudents = students.map(st => st.name === "Ann" ? {...st, name: "Joe"} : st)
const newStudents1 = students.map(st => ({...st}) )


const arr = [1,2,3]

// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

//let [a,b,c] = arr; // a = 1, b = 2, c = 3

const getArray = (a,b,c) => [a,b,c]

getArray(10,20,30)
