let str: string = "hello";
let num: number = 123;

// arr arr2 두개다 배열에 숫자만 받겠다라는 같은표시
let arr: Array<number> = [1, 2, 3];
let arr2: number[] = [123, 2];

let obj: object = { fisrt: 1 };

// 튜플  (특정 인덱스 원하는 타입을 받겠다를 명시)
let tuple: [string, number] = ["young", 123];

let obj2: { name: string; age: number } = { name: "young", age: 123 };

let tmp: boolean = true;

// ?가 포함되면 매계변수를 포함하지 않아도 괜찮음 -> sum(1)가능해짐
function sum(a: number, b?: number) {
  return a + b;
}

sum(1, 2);

//인터페이스
interface User {
  name: string;
  age: number;
}
// 변수에 인터페이스 활용
let tmp2: User = {
  name: "young man",
  age: 26,
};

//  함수에 인터페이스 활용
// User인터페이스에 만족하는 객체만 받겠다
function getUser(user: User) {
  console.log(user);
}
getUser({ name: "young", age: 21 });

// 함수의 스펙(구조)에 인터페이스를 활용 -> 함수 매계변수 타입 지정
interface SumFunction {
  (a: number, b: number): number;
}

let usualSum: SumFunction = function (a, b) {
  return a + b;
};
usualSum(1, 2);

let ArrowSum: SumFunction = (a, b) => {
  return a + b;
};
ArrowSum(1, 2);

// 인덱싱 -> 인터페이스로 배열의 원소 타입을 지정
interface StringArray {
  [index: number]: string;
}
//배열안에 string값만 들어가야함
let indexingArr: StringArray = ["1", "2", "3"];
// indexingArr[0]=2 하면 오류
indexingArr[1] = "2";

// 딕셔너리 패턴 (정규표현식)
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj4: StringRegexDictionary = {
  cssFile: /\.css$/,
};

// 타입 추론 forEach의 e를 보면 string형태인 것을 알 수 있음
// why? 인터페이스로 미리 정의해 놓은 객체의 키값이 string이고 Object.keys()로 호출하면 forEach에 각 키값이 호출됨
Object.keys(obj4).forEach((e) => e);

// 인터페이스 확장 (상속)
interface Person {
  name?: string;
  age?: number;
}

interface Developer extends Person {
  language: string;
}

let person: Developer = {
  language: "Korean",
  age: 2,
};

// 제내릭은 결국 함수의 매계변수의 타입을 미리 지정하지 않고 값을 넘길때 지정할 수있게 만드렁줌!
function sum<T>(a: T): T {
  return a;
}

sum<number>(1);

//인터페이스에 제네릭을 선언하는 법
interface DropDown<T> {
  value: T;
  selected: boolean;
}

const obj123: DropDown<number> = { value: 112, selected: false };

function sum123<T>(a: T[]) {
  console.log(a.length);
}
sum(1);


interface arr {
    a: number;
    b: number;
  }
  
  const tmp123: arr = { a: 1, b: 2 };
  console.log(tmp123);
  
  const gen = <T>(a: T): T => {
    return a;
  };
  
  console.log(gen<number>(1));
  
  // 제네릭에서 매계변수를 받아오고 해당 매계변수가 문자열일때 문자열의 length를 사용하고 싶지만 사용하지못함
  // why? text를 받아올때는 속성에 length가 있는지 모름
  // 따라서 interface로 length를 정의해서 T에 상속시켜줌
  // 받아온 매계변수의 length값이 숫자인 경우만 성공!
  interface Len {
    length: number;
  }
  
  function func<T extends Len>(text: T): T {
    text.length;
    return text;
  }
  console.log(func("123"));
  

  // 인터페이스에 정의 해놓은 객체의 키값만 함수에 매계변수로 넣을 수 있는 코드
interface ShoppingItem{
    name:string,
    cost:number,
    stock:number,
}

function getShoppingItem<T extends keyof ShoppingItem>(item:T):T{
    return item
}

getShoppingItem('cost')

// 동기, 비동기 타입 추론


// 동기적인 코드 (리턴값의 타입을 지정 해주지 않아도 number[]의 타입이 올거라는 추론이 가능함)
function item(){
    let arr=[1,2,3]
    return arr;
}
item()


// 비동기적인 코드는 리턴값의 타입 추론이 불가능함
function items(){
    let arr=[1,2,3]
    return new Promise(function(resolve){
        resolve(arr)
    })
}