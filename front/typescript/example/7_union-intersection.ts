function logMessage(value: string) {
  console.log(value);
}
function logMessage(value: number) {
  console.log(value);
}
function logMessage(value: any) {
  console.log(value);
}

// # Union 타입 문법 - `any` 보다는 명시적임
function logMessage(value: string | number) {
  console.log(value);
}

function logMessage(value: string | number) {
  if (typeof value === "string") {
    value.toLocaleUpperCase();
  }
  if (typeof value === "number") {
    value.toLocaleString();
  }
  throw new TypeError("value must be string or number");
}

// # Intersection 타입 문법
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name; // O
  someone.age; // X
}


enum Shoes{
  Nike="nike",
  Adidas="adidas"
}
let adidas=Shoes.Adidas;
// 1



enum Answer{
  tmp1="yes",
  tmp2="no"
}


function ask(answer:string){
  if(answer==="yes"){
    console.log(1);
  }

  if(answer==="no"){
    console.log(1);
  }
}

ask(Answer.tmp1)

