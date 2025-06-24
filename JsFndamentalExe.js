const arraynumber=[98,43,50,-9,0,1,5];
const revrese=arraynumber.reverse();
const sort=arraynumber.sort();
const choose=sort.slice(3,7);
const dividebytwo=choose.filter((nums)=>nums % 2 ==0);
const answer=dividebytwo.reduce((total,num)=>total+num);

console.log(revrese);
console.log(sort);
console.log(choose);
console.log(dividebytwo);
console.log(answer);
const obj={
    name:"Dieu Merci",
    class:"ITC",
    age:20,
    country:"Rwanda",
}
const valueshere=Object.keys(obj);
console.log(valueshere);
const valuex=Object.values(obj);
console.log(valuex);
for(const[props,value] of Object.entries(obj)){
    console.log(`${props}: ${value}`);
}
// this is array to object 
const colors=["blue","grey","orange","white","pink","black"];
const arraytoobject={...colors};
colors.forEach((color,index)=>{
console.log(`${index + 1}: ${color}`);
});

// console.log(arraytoobject);

let arr = [1,2,3,4,5]
console.log(arr.every(elem=>elem%2 == 0))
console.log(arr.some(elem=>elem%2 == 0))
console.log("valens".length)

function countLetters(name,letter){
    console.log(name)
    let nameSplitted = name.split("")
    console.log(nameSplitted)
    let lettersWanted = nameSplitted.filter(elem => elem == letter)
    console.log(lettersWanted)
    return lettersWanted.length

}

console.log(countLetters("ababanabarasaneza","a"))

