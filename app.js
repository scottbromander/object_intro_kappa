// var student = {};

// student.name = "Mark";
// student.cohort = "Kappa";
// student.salary = 100000;
// student.goToPrime = function(){
// 	console.log("Mark travels to Prime");
// 	return "Mark works hard";
// };
// student.goToHome = function(){
// 	console.log("Mark travels to Home");
// };

// console.log(student.goToPrime());

function Student(name, location, salary){
	this.firstname = name;
	this.location = location;
	this.salary = salary;
	
		if(this.firstname == undefined){
			this.firstname = "Name not entered";
		}
		if(this.location == undefined){
			this.location = "Location not entered";
		}
		if(this.salary == undefined){
			this.salary = "Salary not entered";
		}
	
}

var scott = new Student(undefined, "bloomington");

var biz = new Student("biz", "bloomington", 150000);
var mike = new Student("mike", "bloomington", 100);

// console.log(scott);	

var array = [];
array.push(scott, biz, mike);


for(var i = 0; i < array.length; i++){
	var student = array[i];
	console.log(student);
}






