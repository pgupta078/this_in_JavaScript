console.group("%c1 --This--","color:blue");
// //this
var Name = "GlobalName"  
//1 variable- will refer to global context (window)
console.log(this);
console.log(this.Name); 
var myObject = {
    "Name": "ObjectName",
    "DOB": 1990,
    calAge: function () {
//2  method -refer to object context
        console.log(this);
        console.log(this.Name);  
        function printGreeting() {
//3  function -  will refer to global context
            console.log(this);
            console.log(this.Name);              
        }
        printGreeting();
    }
}
myObject.calAge();
