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
const colors=["blue","grey","orange","white","pink","black"]
const arraytoobject={...colors};
console.log(arraytoobject);