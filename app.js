document.write("<h1>Hello World</h1>");

//tipos de datos
"Hello World"//string
'Hello world'//string

1000000//number
10.1
1000.2
-2.3
//boolean
true
false

//array
['Joe', 'ryan', 'martha']
[1, 2, 3]
[true, false, true, false]

//object
'ryan'
70.4
14
true

{
    "username": 'ryan',
    "score": 70.4,
    "hours": 14,
    "proffesional": true,
    "friends": ['', '', '']
}

{
    "username": 'joe',
    "score": 0.4,
    "hours": 1,
    "proffesional": false,
}

console.log('this is a string');
console.log('14.3');
console.log('true');
console.log[(1, 2, 3, 4)]
console.log({"username": "ryan",
"score": 70.4});

//variable, creacion
var nameuser= "john";
let lastname="carter";

//reasignando el valor de variable nameuser
nameuser = 'pepe';

let PI = 3.1415;
const PI =3.1415;
PI=100;
const id='user1';
let id='asdasdas';
id=123;

console.log(nameuser)
console.log(lastname)

1username ='fazt';//las variables no pueden iniciar con un numero.

let nickname='fazt';

let nombredepersona= 'gordon'
//camelcase
let userName='gordon'

user_name//otra forma de escribirlo

/*elsiguiente comenrario 
    esta ocupado multiples


    asdasdass
    asd
    asd
    asd
    */


//operadores

let numberOne =60;
let numberTwo=100;

let result=numberOne+numberTwo;
let result=numberOne-numberTwo;
let result=numberOne*numberTwo;
let result=numberOne/numberTwo;

console.log(result);

let name ='John';
let lastname= 'Carter';

let completeName= name+' '+lastname;

console.log(result);

let numberOne=100;
let numberTwo=500;

let result=numberOne>numberTwo
let result=numberOne<numberTwo

console.log(result);

let numberOne=100;
let numberTwo=100;

let result=numberOne==numberTwo
let result=numberOne!=numberTwo

console.log(result);

let numberOne=100;
let numberTwo=500;

let result=numberOne<=numberTwo
let result=numberOne>=numberTwo

console.log(result);

let passwotdDB= 'pepe123'

let input = 'assdddddsds'

let result = input ==passwotdDB;

console.log(result);


//Condicionales
if (result===true){
    console.log('login correcto');

} else{
    console.log('Contraseña incorrecta');
}

let score=70;

if(score>30){
    console.log('You need to practice more');

}else if(score>15){
console.log('Estas mejorando');
}
else{
    console.log('You need to follow this tutorial')
}

let typeCard = 'Debid Card';

switch(typeCard){
    case 'Debid card':
        console.log('This is a debid card');
        break;
    case 'Credit Card':
        console.log('This is a credit card');
        break;
    default:
        console.log('No Card');
}

//bucles
let count=50;
while (count>0){
    console.log('Hello Word');
    count=count-1;
}
while (count<50){
    console.log('Hello Word');
    count=count+1;
}
let count=1;

while (count>0){
    console.log('Hello Word');
    count++;
}
let count=1;
while (true){
    console.log('Hello Word');
    count++;
}
//arreglos
let names=['ryan', 'joe', 'john', 'mario'];

console.log(names [3]);
console.log (names.length);

for (let i =0; i< names.length; i++){

    console.log(names[i]);

}

let names=['ryan', 'joe', 'john', 'mario'];
for (let i = names.length -1; i>=0; i--){

    console.log(names[i]);

}

//Funciones
function greeting(personName){
    console.log('Hello' + personName);
}
greeting('Kara');
greeting('Marcus');
greeting('Connor');

function add(n1, n2){
    console.log(n1+n2);
}
add(3, 2);
add(100, 300);
add(233344, 84848);
add(3, 'adasdasdas');
