// in ecom websites there's a shopping cart feature in which user keeps on adding items and in situations like this we don't know how many arguments are there 
// we use rest operator which combines all the data and forms an array of it 
function calculateCartPrice(...num){
    return num;

}
// console.log(calculateCartPrice(1,2,3,4,5));
function calculateCartPrice1(val1,val2,...num){
    return num;

}
// console.log(calculateCartPrice1(1,2,3,4,5));
//here 1 and 2 got stored in val1 and val2 while other remaining numbers formed an array with rest operator 



//handling object using functions 
const user = {
    name: "kush",
    id: 1235,
}
function handleObject(anyObject){
    console.log(`Username of the user is ${anyObject.name} and id of the user is ${anyObject.id}`);
}
handleObject(user);



//handling arrays using functions 
function handleArray(anyArray){
    console.log(`the second element of the array is ${anyArray[1]}`);
}
const arr1 = [1,2,3,4,5];
handleArray(arr1);