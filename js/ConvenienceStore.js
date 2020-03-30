// Conveniece Strore challenge.
// This is a function that finds if the change equal or bigger than due amount.

function changeEnough(change, amountDue) {
	var [a, b, c, d] = change; // Creating array for the "change" variable.
	amountDue <= a * 0.25 + b * 0.10 + c * 0.05 + d * 0.01 // Converts every thing to DOLLAR.
	return true;
}