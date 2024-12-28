//function a(){
//    if(true){
//        var a = 5; 
//        console.log(a);
//    }
//    console.log(a);
//}
//a()
//output: 5 5

//function a(){
//    if(true){
//        let a = 5;
//        console.log(a);
//    }
//    console.log(a);
//}
//a()
//output : 5 error

//console.log(a);
//var a = 5;
//output: undefined

//console.log(a);
// let a = 5;
//output: errpr

//let a = 5;
//let a = 3;//a=3;
//console.log(a)
//output: error// 3

//const a = 5;
//a = 3;
//console.log(a)
//output:5

//Datatype:number,string,boolean1

//let student1 = {
//    name : ["abi","rahul"],
//    age : 20,
//   isStudent : true,
//    address:{
//        city : "perundurai",
//        state : "tamilnadu"
//    },
//    hello:function(){
//        console.log("hi nivetha")
//    }
//}
//console.log(student1.name[0]);
//output:abi

//let student1 = new Object();
//student1.name = "abi";
//student1.age = 20;
//console.log(student1);
//output:{name: 'abi', age: 20}


//let student1 = new Object()
//student1.name = "abi";
//student1.age = 20;
//student1.hello = function(){
//    console.log("hi nivetha");
//}
//student1.hello()
//output:hi nivetha

//let a = 5;
//let b = a++ + --a;
//let c = ++b + b++;
//a++;
//console.log(a);  
//console.log(b); 
//console.log(c); 

//if else
//let a = 6;
//if(a/3 && a/5)
//    {
//        console.log("hi hello");
//    }
//else if (a/3)
//{
//    console.log("hi");
//   
//}
//else if(a/5)
//{
//    console.log("hello");
//}

//parameterized arrow function
//let banana = (a,b) => 
//{
//    console.log(a+b);
//}
//banana(1,2)

//spread operator(...)
//let a = [1,2,3,4,5]
//let b = [...a]
//b[2] = 10;
//console.log(a)
//console.log(b)
//output:1,2,3,4,5
//1,2,10,4,5

//spread operator(...) concadinate
//let a = [1,2,3,4,5]
//let x = [6,7,8,9]
//let b = [...a,...x]
//b[2] = 10;
//console.log(a)
//console.log(b)
//output:1,2,3,4,5,6,7,8,9
//1,2,10,4,5,6,7,8,9


//let a = 10;
//let b = a;
//console.log(a);
//memory allocation
//a = 10
//b = 10  20

//rest operators(...)
//function restexample(...values){
//console.log(values)
//}
//restexample(1,2,3,4)
//output:1,2,3,4

//rest operators(...)
//function restexample(x,...values){
//console.log(values)
//}
//restexample(1,2,3,4)
//output:2,3,4
//x occupies the place of 1 so 1 will not be printed

//spread operators using object
//let a = {
//    name :"abi",
//    age :   20
//}
//let b = {...a};
//console.log(a)
//outpu:{name: 'abi', age: 20}

//destructuring operator 
//let a = [1,2,3,4,5,6]
//let [b,c,x,...y] = a;
//console.log(y);

//destructuring in object
//let a = {
//    name : "sara",
//    age : 20,
//    isStudent : true,
//    college : "kgisl",
//    year : "third" //
//}
//let {name,age,...y} = a
//console.log(y)

//function can be called for another function is called callback
//function dog(callback){
//    setTimeout(()=>{
//        console.log("JACK the dog");
//        callback();
//    },2000);    
//}
//function cat(){
//    console.log("ROSE the cat")
//}
//dog(cat)
//output:JACK the dog
//ROSE the cat

//callback hell 
//calling the callback to the function is called callback hell
//function attendence(callback){
//    setTimeout(()=>{
//        console.log("Present or absent");
//        callback();
//    },1500);    
//}
//function lunch(callback){
//    setTimeout(()=>{
//        console.log("Have lunch");
//        callback();
//    },1500);
//}
//function goingtohome(callback){
//    setTimeout(()=>{
//        console.log("boarded to bus");
//        callback() 
//    },1500); 
//}
//attendence(()=>{
//    lunch(()=>{
//        goingtohome(()=>{
//            console.log("Go to home")
//        })
//    })
//})

//promises
//function attandences(){
//    return  new Promise((resolve,reject)=>{
//        let att = false;
//        if (att)
//            resolve("Present");
//        
//        else
//            reject("Absent");
//        
//    })
//}
//attandences().then(output=>console.log(output))
//            .catch(error=>console.error(error))


// function funct1 (funct2,filename){
//     setTimeout(()=>{
//         console.log(`file ${filename} is downloading`);
//         console.log(`file ${filename} is downloaded`);
//         funct2();
//     },2000)
// }
// function funct2(){
//     console.log("file downloaded")
// }
// funct1(funct2,"clg")


//if(condition)
//  true statement
//else
//  false statement
//(condition) ? true statement : false statement
 

 //31/01/2024-invalid
 //29/02/2001-
 
