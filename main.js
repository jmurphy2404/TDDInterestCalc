document.getElementById('submit').addEventListener('click', function(){
	var principal = document.getElementById('principal').value
	var rate = document.getElementById('rate').value
	var periods = document.getElementById('periods').value	
	for (var i = 0; i <= periods; i++ ) {
		let total = principal;
		total += (principal * (1 + rate));
		console.log(total);
	};
	document.getElementById('result').innerHTML = total;
	console.log(total);
});
