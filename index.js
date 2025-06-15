// 1.Sum of Array Elements
function sumArr(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum; 
}

const arrSum = [12, 4, 5, 6, 7, 8];
console.log("Sum of array:", sumArr(arrSum)); 


// 2.Find Maximum value
function maxArr(number){
    return Math.max(...number);
}
const Array=[12,9,75,99,20];
console.log("Maximum:",maxArr(Array));
// Math.max finds the maximum number


// 3.remove duplicates
function duplicate(numbers){
    return[...new Set(numbers)]; 
}
const myArray=[1,5,5,8,2,9,8];
console.log("New Array:",duplicate(myArray));
// the set removes duplicate


// 4.Merge Two arrays
function mergeArr(arr1, arr2){
    return[...new Set([...arr1, ...arr2])];
}
const Array1=[1,3,4,6,8];
const Array2=[2,4,5,7];
console.log("merged array:",mergeArr(Array1,Array2));
// here the set with the spread operator merges two array 


//5.Array chunking
function chunkArr(){

}


// objects
// 6.object key count
function countkey(obj){
    return Object.keys(obj).length;
}
const keyObj={name:"sita",age:12, class:8};
console.log("No of keys:",countkey(keyObj));
// here Object.keys() defines the keys and .length finds out the length of the keys found


// 7.merge two object
function mergeObj(objA,objB){
    return {...objA, ...objB}
}
const objF={
     name:"Sita",
    age:19,
    gender:"female",
    roll:20,
    marks:50,
}
const objM={
     name:"Ram",
    age:20,
    gender:"male",
    roll:18,
    marks:59,
}
console.log("merged object:",mergeObj(objF,objM));
// while merging the value in the second object overwrites the value in first object so in the above code it will only show the output of objM


// 8.filter object properties
function filterObj(obj,keys){
}
const objS={
     name:"Sita",
    age:19,
    gender:"female",
    roll:20,
    marks:50,
}


// 9.convert object into array
function convertObj(obj){
    return Object.entries(obj);
}
const exObj={a:1,b:2,c:3};
console.log("Converted object:",convertObj(exObj));
// here Object.entries() converts both key-value pair into array


// 10.Deep clone object
function cloneObj(){
    
}


// rest operator
//11. sum of rest operator 
function sumRes(a,b,c,d,e){
    return a+b+c+d+e
}
const sum=sumRes(11,21,3,42,56)
console.log("Sum of numbers:",sum);


// 12.Concatenate arrays with spread
function mergeArr(arrA,arrB){
    return[...arrA,...arrB];
}
const arrOne=[1,2,7,8,9];
const arrTwo=[5,6,1,4,8];
console.log("Merged Array:",mergeArr(arrOne,arrTwo));
// a big bracket[] is used to merge array while a curly bracket{} to merge object


// 13.copy and modify object
function copyModify(){

}


// 14.Dynamic Function Arguments
function log(){

}


// 15.Merge and override
function mergeOverride(objectO,objectT){
    return {...objectO,...objectT};
}
const objectO={name:"Rina", Class:11, Age:17};
const objectT={name:"Tina", Class:12, Age:19};
console.log("merged and override object:",mergeOverride(objectO,objectT));


// Combined Challanges
// 16.array to object
function ArrtoObj(arr){
    return Object.fromEntries(arr);
}
const exArr=[["a",1],["b",2]];
console.log("converted array:",ArrtoObj(exArr));
// here Object.fromEntries() converts array of Key-Value pair into object


// 17.Flatten Nested arrays
function  flattenArray(arr){
    return arr.flat(Infinity);
}
const arrA=[1,[2,[3,4]]];
console.log("Flatten Array:",flattenArray(arrA));
// arr.flat() flattens only one level so to flat all the nests either we should specify or write the keyword infinity


// 18. Dynamic Obbject Builder
