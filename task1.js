/* class Person
{

    #id;
    constructor(name,id,salary)
    {
        console.log(this.constructor)
        if(this.constructor==Person)
        {
            throw 'error this is abstract class'
        }
        this.name=name;  
        this.id=id;
        this.salary=salary;
    }
    setID(x)
    {

        this.#id=x;
    }

    getID()
    {
        return this.#id;
    }
}

class Employee extends Person {
    static count=0;
constructor(name,id,salary){
    super (name,id,salary);
    Employee.count++;
}
static displayHTRules(  ) {
    document.write("the Rules");
    document.write("<br>")
    document.write("bskdjchkasjcnds.");
}
static getCount()
{
    return Employee.count;
}

ShowSalary(){
    document.write(this.salary);
}

IncreaseSalary(){
    document.write(this.salary+1000);
}

}

class Student extends Person {
    constructor(name,id){
        super (name,id);
        
    }
}


var ScientificDepartment = {
    Location: "Aswan",
    Address: {
       city: "Aswan",
       street: "ABC",
       Zip_Code: 123456,
     } ,
     display: function(){
        return "Location: " + this.Location + "<br> " +"City: " + this.Address.city  + " <br>" +"Street: " + this.Address.street + "<br> " +"Zip Code: " + this.Address.Zip_Code;
         } 
 };
document.write(ScientificDepartment.display());
document.write("<br>")
Employee.displayHTRules();
document.write("<br>")
var E1=new Employee("ahmed",1,5000);
 var E2=new Employee("negm",2,10000);
 document.write(Employee.count);
 document.write("<br>")
 E1.ShowSalary();
 document.write("<br>")
 E1.IncreaseSalary();
 document.write("<br>")
 */