function firstNonRepeatedChar(str) {
 // Write your code here
	const count = new Map();

	for(let char of str){
		count.set(char, (count.get(char) || 0)+1);
	}

	for(let char of str){
		if(count.get(char) === 1){
			return char;
		}
	}
	return null;

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
