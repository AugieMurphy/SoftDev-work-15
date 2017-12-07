var fibonacci = (function(n){
    if (n>0) {
	return (n + (fibonacci (n-1)))
    }
    else {
	return 0;
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

