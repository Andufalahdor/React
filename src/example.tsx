// 1 video
// JS types 

// const str = 'string'; 
// const num = 2;
// const nan = NaN;
// const obj = {};
// const arr = [];
// const nul = null;
// const sym = Symbol();
// const und = undefined;
// const _void = void 0;
// const bool = true;
// const fn = () => {};

// let tsStr: string = 'asd';
// tsStr = 'test';

// function sumJS(arr) {
//     if (arr instanceof Array) {
//     return arr.reduce((a, v) => a + v);
//     } 
//     throw new Error('type mismatch')
// }


// function sumTS(arr: number[]) {
//     return arr.reduce((a:number, v:number) => a + v)
// }
// sumTS([1,2,3])

// const tsNumber = 2;
// const tsString = 'str';

// const result = tsNumber + tsString;
// const resultTwo = parseInt(tsString) - tsNumber;

// if (typeof tsString === 'number') {
//     const resultTwo = tsString - tsNumber;
// }

// 2 video

// Union Type
// const strOrNumber: string | number = '2';

// Type alias
// type StrOrNumber = string | number
// const strOrNumber2: StrOrNumber = 2;

// type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol; 

// Array
// const tsArray: number[] = [1,2,3];
// const tsArrayGeneric: Array<number> = [];

// const unionArray: (string | number)[] = [2, '2'];
// const unionArray2: Array<string|number> = [2, '2'];

// Tuple = arr fixed length
// const myTuple: [number, string]  = [1, '2'];
// destruction 
// const [val1, val2] = myTuple;
// const [state, setState] = useState();

// 3 video Object

// type myObjType = {a: number, b: string};
// const myObj: myObjType = {a: 1, b: '2'}; // Type alias 

// Interface 
// interface MyFirstInterface {
//    readonly a: number,
//     b: string,
//     c?: number[]
// }

// const myObj2: MyFirstInterface = {
//     a: 2,
//     b: '2',
// }

// index signature 
// const ApiAnswer: IndexInterface = { key: 'asd', key1: 'asd'}

// const val3 = ApiAnswer.key3;

// interface IndexInterface {
//     [n: string]: string;
// }

// 4 video Function 

// enum Methods {
// add = 0,
// sub = 1,
// }

// function calculate(method: Methods, left:number, right:number): number {
//     switch(method) {
//         case Methods.add: return left + right;
//         case Methods.sub: return left - right;
//     }
// }

// const sum = calculate(Methods.add,2,2);
// const ArrowFn: TypeFn = () => 2;
// type TypeFn = () => number  // type alias arrow function 
// interface FnInterface { 
//     (a: number): void
// }

// type StrangeTsTypes = any | unknown | never;
// const some: any = '2';
// const un: unknown = '2';

// function neverFn (): never {
// throw new Error('my exception')
// }

// Generics 

// const myArray: Array<number> = [1,2,3];

// interface MyArray<T> {
//     [N: number]: T

//     map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>
// }

// const myVar: MyArray<number> = [123,12,2,2];
// let vat = myVar[0];

// myVar.map

// // generics function 

// function identity<T>(arg:T):T {
// return arg
// }

// let result = identity(10);
// function getLen<T extends Array<any>>(arr: T): number {
//     return arr.length;
// }

// getLen([1,2,3]);

// interface IvalueWithType<T> {
//     type: string;
//     value: T
// }

// function withType<U> (arg: U): IvalueWithType<U> {
//     return {
//         type: typeof arg,
//         value: arg,
//     }
// }
// const result2 = withType(123);

// // встроенные generics 
// interface IExample<T> {
//     type: string, 
//     value: T,
//     isEmpty: boolean;
// }
// // Выбрасываем из интерфейса ключ isEmpty | value
// const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
//     type: 'test',
// }
// // Оставляем только ключ isEmpty
// const picked: Pick<IExample<number>, 'isEmpty'> ={
// isEmpty: true,
// }
// // Делает все ключи необязательными 
// const partial: Partial<IExample<object>> = {
// isEmpty: true
// }


// 6 video class 

// OLD CONSTRUCTOR 

// function OldConstructor(fieldValue) {
//     this.field = fieldValue || 123;
// }

// OldConstructor.prototype.method = function() {
//     return this.field;
// }

// const instance = new OldConstructor('123');
// instance.method() 

// ES6 + TS

// class MyConstructor {
//     public field: number
    
//     constructor(arg: number = 123) {
//         this.field = arg;
//     }

//     public publicMethod() {
//         return this.field;
//     }

//     protected protectedMethod() {
//         return this.field + 10;
//     }

//     private privateMethod() {
//         return this.field + 30;
//     }

// }

// let instance = new Constructor(123);

// Наследование 

// class Child extends MyConstructor {

// constructor(arg: number) {
//     super(arg);
//     }

//     public protectedMethod(): number {
//         return super.protectedMethod();
// //     }

// // }
// // let instance2 = new Child(123)


// // Абстрактный класс 
// abstract class AbstractClass {
//     public abstract abstractField: number;

//     public abstract abstractMethod():number 

//     protected protectedMethod() {
//         return this.abstractField;
//     }
// }
// // const instance2 = new AbstractClass()

// class NewChild extends AbstractClass {
//     public abstractField: number = 123;

//     abstractMethod(): number {
//         return this.abstractField;
//     }

//     protected protectedMethod(): number {
//         return this.abstractField + 10;
//     }
// }

// // interface | implements

// interface MyInterface {
//     field: string;
//     method(): string;
// }

// class NewClass implements MyInterface {
// field: string = 'text'
// method(): string {
//     return this.field;
// }
// }

// // 7 video | Infer, typeof, keyof, Mapped Types 
// const mistake = [] as Array<number> // Приведение к типу | Type casting 
// mistake.push(1);
// // mistake.push('1');


// let bigObject = {
//     "commit" : {
//         "id": "123",
//     },
//     "commits": [{
//         "id": 321
//     }],
//     "diffs": [{
//         "old_path": "files/js/app.js"
//     }],
//     bol: true
// }

// type TMyBigObject = typeof  bigObject; // 1 - Получаем тип объекта. 
// const typedBigObject: MyReadonly<TMyBigObject> = bigObject

// // typedBigObject.bol = false;
// // typedBigObject.commit.id = 'test'

// type TObjKeys = keyof TMyBigObject; // 2 - получаем все ключи объекта. 
// type TCommitType = TMyBigObject['commit']; // 2.5 - Получаем тип ключа. 

// type MyReadonly<T> = {
//     // readonly [N in 'asd' | 'qwe' ]: N
//     // readonly [N in keyof TMyBigObject]: N

//     // mapped types
//     readonly [N in keyof T]: T[N]
// }

// // for (let N of ['asd', 'qwe']) {} - для понимания как в JS

// // const some: MyReadonly<TMyBigObject> = {
// //     // asd: 'asd',
// //     // qwe: 'qwe',
// // }


// type MyPartial<T> = {
//     [N in keyof T]?: T[N];
// }

// type MyPick<T, K extends keyof T > = {
// [N in K]: T[N]
// }

// type picked = MyPick<TMyBigObject, 'commit' | 'bol'>

// type MyReadonlyDeep<T> = {
//     readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N] 
//     // T[N] итерация каждого ключа | extends object ? спрашиваем TCommitType расширяет объект | Если да MyReadonlyDeep<T[N]>  - рекурсия | если нет T[N] - вернется значение 
// }

// const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject

// // typedBigObjectDeep.bol = false;
// // typedBigObjectDeep.commit.id = 'test'


// type TSomeType = MyReadonlyDeep<TMyBigObject>

// // type inference 

// type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

// type TTest = RemoveReadonly<TSomeType>


// function greaterThenZero (a: number): boolean {
//     return a > 0;
// }

// type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R: never
// type FnParameters<T> = T extends ((...args: infer R) => any) ? R: never

// type TReturnType = FnReturnType<typeof greaterThenZero>
// type TArgsType = FnParameters<typeof greaterThenZero>


// const ArrowFn: TypeFn = () => 2;
// type TypeFn = () => number  // type alias arrow function 


// // 1. Работа с простыми типами
// const MyConcat: TConcat = (a,b) => a + b;
// type TConcat = (a: string, b: string ) => string;
// MyConcat('test', 'test2')

// // 2. Работа с интерфейсами
// interface IMyHometask {
//     howIDoIt: string;
//     simeArray: Array<string|number>
//     withData: [
//         {
//             howIDoIt: string;
//             simeArray: Array<string|number>
//         }
//     ]
// }
// const MyHometask: IMyHometask = {
//     howIDoIt: "I Do It Wel",
//     simeArray: ["string one", "string two", 42],
//     withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// }

// // 3. Типизация функций, используя Generic
// interface MyArray<T> {
//     [key: number]: T;
//     reduce<U>(fn: (acc: U, el: T, index?: number, arr?:  MyArray<T>) => U, initial?: U): U;
//     map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>
// }

// // 4. Работа с MappedTypes
// interface IHomeTask {
//     data: string;
//     numbericData: number;
//     date: Date;
//     externalData: {
//         basis: number;
//         value: string;
//     }
// }
// const homeTask: MyPartial<IHomeTask> = {
//     externalData: {
//         value: 'win'
//     }
// }
// type MyPartial<T> = {
//     [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
// }


// REACT - npm run build:dev | npm run dev => package.json => scripts 

// class Temp extends React.Component { 

// }

// class Temp extends React.PureComponent {

// }

// function Temp() {
//     return <div>test</div>
// }