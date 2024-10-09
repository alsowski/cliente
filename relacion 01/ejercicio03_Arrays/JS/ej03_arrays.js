let a = prompt("Dime números separados por comas: ");
let b = prompt("Dime otros números separados por comas: ");

a = a.split(",");
b = b.split(",");
let max

if(a.length>b.length){
    max=a.length;
}else{
    max=b.length;
}

let res=[]

for(let i=0;i<max;i++){
    if(i<a.length){
        res.push(a[i]);
    }
    if(i<b.length){
        res.push(b[i]);
    }
}
console.log("Arrays concatenados "+res);