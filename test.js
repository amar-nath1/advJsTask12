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

    checkeligibility(boardmarks){
        var agelimit=40
        var minmarks=35
        let a= (age)=> {return (boardmarks>=minmarks && age<=agelimit)}
        
        return a
    }


}

const stu1=new Student('rob',24,1234,36)
const stu2=new Student('bob',28,54334,44)
const stu3=new Student('lalit',18,5438532,24)
const stu4=new Student('varun',38,4638532,54)
const stu5=new Student('vijay',484568532,74)


Student.printcount()

console.log(stu1.checkeligibility(stu1.board_marks)(stu1.age))
console.log(stu2.checkeligibility(stu2.board_marks)(stu2.age))
console.log(stu3.checkeligibility(stu3.board_marks)(stu3.age))
console.log(stu4.checkeligibility(stu4.board_marks)(stu4.age))
console.log(stu5.checkeligibility(stu5.board_marks)(stu5.age))