var fibonacci = (function(n){
    if (n == 0) {
	return 0;
    }
    else if (n == 1) {
	return 1;
    }
    else {
	return (fibonacci(n-1) + fibonacci (n-2));
    }
});

var gcd = (function(a,b){
    var c;
    if (a > b) {
	c = a;
    }
    else {
	c = b;
    }
    while(c > 1){

	if (a % c == 0) {
	    if (b % c == 0) {
		return c;
	    }
	}	
	c--;
	
    }	

    return 1;
});

var randomStudent = (function() {

    var names = ["Augie", "Xing", "DW", "Angel", "Sasha", "Gordon", "MD"];
    var randomNum = Math.floor(Math.random() * names.length);

    return names[randomNum];
    
});

console.log("Testing fibonacci");
console.log("Fibonacci 1: " + fibonacci(1));
console.log("Fibonacci 2: " + fibonacci(2));
console.log("Fibonacci 3: " + fibonacci(3));
console.log("Fibonacci 4: " + fibonacci(4));
console.log("Fibonacci 5: " + fibonacci(5));
console.log("Fibonacci 10: " + fibonacci(10));

console.log("Testing gcd");
console.log("GCD 4,6: " + gcd(4,6));
console.log("GCD 40,60: " + gcd(40,60));
console.log("GCD 42,64: " + gcd(42,64));
console.log("GCD 45,63: " + gcd(45,63));
console.log("GCD 422,6321: " + gcd(422,6321));

console.log("Testing randomStudent");
console.log("Random student: " + randomStudent());
console.log("Random student: " + randomStudent());
console.log("Random student: " + randomStudent());
console.log("Random student: " + randomStudent());
console.log("Random student: " + randomStudent());


