// basic calculator challenge.
// Asked to biuld a simple calculator with input can't divide by 0.

function calculator(num1, operator, num2) {
	if(num2 === 0){ // This code done by if else if method, can be done by siwtch case method.
		return  "Can't divide by 0!"; // If divided by 0, this message will appear.
	} else if(operator == "+") {
		return num1 + num2;
	} else if(operator == "-") {
		return num1 - num2;
	} else if(operator == "/") {
		return num1 / num2;
	} else if(operator == "*") {
		return num1 * num2;
	}
}