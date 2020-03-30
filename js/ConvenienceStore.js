function changeEnough(change, amountDue) {
	var [a, b, c, d] = change;
	amountDue <= a * 0.25 + b * 0.10 + c * 0.05 + d * 0.01
	return true;
}