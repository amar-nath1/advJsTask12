// Ans 1- 
// a. 'this' inside Global Scope
// b.  'this' inside an object
// c.  'this' inside a method
// d.  'this' inside a function
// e.  'this' using 'call'
// f.  'this' inside an inner function
// g.  'this' inside a constructor
// h.  'this' inside a class
///////////////////////////////////////////////////////////////////////////////////////////////

// Ans 2- 
// a. 'this' inside Global Scope 
//Example
this.hotel='Taj Hotel'


// b. 'this' inside an object
this.school={
    bus_service:'yes'
}
console.log(this.school.bus_service)


// another Example

let Car={
carname:'merc'
}
console.log(Car.carname)

// c.  'this' inside a method
// Example

let Vehicle={
    name:'merc',
    wash(){
        console.log(`${this.name} is being washed`)
    }
    }
Vehicle.wash()

// d.  'this' inside a function
// Example

this.monument='Akshardham'
const visit=function(){
    console.log(`Please visit ${this.monument}`)
}

visit()

// e.  'this' using 'call'
// Example

this.game='chess'
const play=function(){
    console.log(`Please play ${this.game}`)
}
play.call(this)

// f.  'this' inside an inner function
// Example

this.table='window table'
const cleaTable=function(soap){

    const innerfunction=(_soap)=>{

        console.log(`cleaning ${this.table} using ${_soap} soap`)
    }
    innerfunction(soap)
}

cleaTable('Cinthol')

// g.  'this' inside a constructor
// Example

const createRoom= function(name){

    this.table= `${name}'s Table`
}

createRoom.prototype.cleanTable= function(soap){console.log(`cleaning ${this.table} using ${soap} soap`)}

const mytable=new createRoom('Amar')
mytable.cleanTable('Nirma')


// h.  'this' inside a class

class createhouse{

    constructor(name){

        this.table= `${name}'s Table`
    }

    washTable(soap){

        console.log(`washing ${this.table} using ${soap} soap`)
    }
}


const yourtable=new createhouse('Yours')
yourtable.washTable('Ghadi')


//Ans 3,4,5,6-

class Student{

    static count=0

    constructor(name,age,phone_num,board_marks){

        this.name=name
        this.age=age
        this.phone_num=phone_num
        this.board_marks=board_marks
        Student.count++
    }

   static printcount(){
        console.log(this.count)
    }

    checkeligibility(){
        if (this.board_marks<40){

            console.log(`${this.name} is not eligible for college`)
        }
        else{
            console.log(`${this.name} is eligible for college`)}
    }


}

const stu1=new Student('rob',24,1234,34)
const stu2=new Student('bob',28,54334,44)
const stu3=new Student('lalit',18,5438532,24)
const stu4=new Student('varun',38,4638532,54)
const stu5=new Student('vijay',484568532,74)


Student.printcount()
