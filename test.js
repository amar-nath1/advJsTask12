let getA=(a)=>a
console.log(getA(5))

var b=8
let getB=()=>b
console.log(getB())

let square=(a)=>{return a*a}

console.log(square(5))

var x=function(){

    this.val=1
    setTimeout(()=>{

        this.val++
        console.log(this.val)
    },1)
}
// x()

var y=(...n)=>{

    console.log(n[1])
}
y(3,5,6)