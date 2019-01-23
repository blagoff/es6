/*const sayHello = () => alert('Hello world!');
sayHello();*/

//zadanie 1

let a ='hello';
let b = 'world';

const hello = `${a} ${b}`;

//alert(hello);


//zadanie 2

const multiply =  (x = 1 ,y = 1) =>  {return x * y}

//alert(multiply(5));

//zadanie 3

//const average = (...args) => (console.log(args.length));

//const average = (...args) => {return args};
const average = (...args) => { let sum = 0; args.forEach(result => sum += result); return sum / args.length};

/*alert(average(1)) // 1
alert(average(1, 3)) // 2
alert(average(1, 3, 6, 6)) // 4*/

//zadanie 4

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];


//const average = (grades) => { let sum = 0; grades.forEach(result => sum += result); return sum / grades.length};

alert(average(grades).toString())

//zadanie 5

const data = [1, 4, 'Iwona', false, 'Nowak'];

let  [, , firstname,  ,lastname] = data;

//	alert(`${firstname}, ${lastname}`);